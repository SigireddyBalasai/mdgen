import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import Footer from './Footer';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-8'>
        <a href='https://vite.dev' rel='noreferrer' target='_blank'>
          <img
            alt='Vite logo'
            className='h-24 w-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]'
            src={viteLogo}
            width={96}
            height={96}
          />
        </a>
        <a href='https://react.dev' rel='noreferrer' target='_blank'>
          <img
            alt='React logo'
            className='h-24 w-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow'
            src={reactLogo}
            width={96}
            height={96}
          />
        </a>
      </div>

      <h1 className='text-5xl font-bold mt-8 mb-4 text-center'>Vite + React</h1>

      <div className='card bg-white/5 rounded-lg shadow p-8 my-8 flex flex-col items-center'>
        <Button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
        <p className='mt-4 text-gray-400'>
          Edit{' '}
          <code className='bg-gray-800 px-2 py-1 rounded text-sm'>
            src/App.tsx
          </code>{' '}
          and save to test HMR
        </p>
      </div>

      <p className='text-center text-gray-400 mb-8'>
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;
