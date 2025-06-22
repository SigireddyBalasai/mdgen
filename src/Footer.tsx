import { memo } from 'react';

declare const __COMMIT_HASH__: string;

const Footer = memo(() => {
  const year = new Date().getFullYear();
  const commit = typeof __COMMIT_HASH__ !== 'undefined' ? __COMMIT_HASH__ : '';
  return (
    <footer className="text-center mt-8 text-gray-400" aria-label="Site footer">
      <p>
        Copyright &copy; {year} Sigireddy Balasai
        {commit && (
          <span className="ml-2 text-xs text-gray-500">Commit: {commit}</span>
        )}
      </p>
    </footer>
  );
});

export default Footer;
