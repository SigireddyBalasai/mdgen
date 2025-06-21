import { resolve, join } from 'path';
import { readFileSync, readdirSync, statSync } from 'fs';
import type { Plugin, ViteDevServer } from 'vite';

interface LlmsOptions {
  llmsDir?: string;
}

function llmsRoutingPlugin(options: LlmsOptions = {}): Plugin {
  const llmsDir = options.llmsDir || "llms";
  let markdownRoutes: string[] = [];
  
  return {
    name: "vite-llms-routing-fixed",
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url === "/llms.txt") {
          const llmsTxtPath = resolve(process.cwd(), llmsDir, "llms.txt");
          try {
            const content = readFileSync(llmsTxtPath, "utf-8");
            res.setHeader("Content-Type", "text/markdown");
            res.end(content);
            return;
          } catch (e) {
            next();
          }
        }
        if (req.url?.endsWith(".md")) {
          const markdownPath = resolve(process.cwd(), llmsDir, req.url.slice(1));
          try {
            const content = readFileSync(markdownPath, "utf-8");
            res.setHeader("Content-Type", "text/markdown");
            res.end(content);
            return;
          } catch (e) {
            next();
          }
        }
        next();
      });
      
      const files = getAllMarkdownFiles(resolve(process.cwd(), llmsDir));
      markdownRoutes = files.map((file) => {
        const route = file.replace(resolve(process.cwd(), llmsDir), "").replace(/\\/g, "/");
        return route;
      });
      console.log("\nLLMS Plugin (Fixed): Available markdown routes:");
      console.log("  /llms.txt");
      markdownRoutes.forEach((route) => {
        console.log(`  ${route}`);
      });
    },
    
    async generateBundle(this: any) {
      try {
        const llmsTxtPath = resolve(process.cwd(), llmsDir, "llms.txt");
        this.emitFile({
          type: "asset",
          fileName: "llms.txt",
          source: readFileSync(llmsTxtPath, "utf-8")
        });
        
        const markdownFiles = getAllMarkdownFiles(resolve(process.cwd(), llmsDir));
        markdownRoutes = [];
        
        for (const file of markdownFiles) {
          const relativePath = file.replace(resolve(process.cwd(), llmsDir), "").replace(/\\/g, "/");
          markdownRoutes.push(relativePath);
          this.emitFile({
            type: "asset",
            fileName: relativePath.slice(1), // Remove leading slash
            source: readFileSync(file, "utf-8")
          });
        }
        
        console.log("\nLLMS Plugin (Fixed): Files emitted during generateBundle");
        console.log("  /llms.txt");
        markdownRoutes.forEach((route) => {
          console.log(`  ${route}`);
        });
      } catch (error) {
        console.error("LLMS Plugin (Fixed): Error during generateBundle:", error);
      }
    }
  };
}

function getAllMarkdownFiles(dir: string): string[] {
  let results: string[] = [];
  try {
    const files = readdirSync(dir);
    for (const file of files) {
      const filePath = join(dir, file);
      const stat = statSync(filePath);
      if (stat.isDirectory()) {
        results = results.concat(getAllMarkdownFiles(filePath));
      } else if (file.endsWith(".md")) {
        results.push(filePath);
      }
    }
  } catch (error) {
    console.error("LLMS Plugin (Fixed): Error reading directory:", error);
  }
  return results;
}

export default llmsRoutingPlugin;
