import { useState, useCallback } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import Footer from './Footer';
import Button from './components/Button';

const LOGO_SIZE = 96;
const LOGO_PADDING = 6;

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className='bg-white min-h-screen'>
      <div>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-8 pt-8'>
          <a
            aria-label='Vite homepage'
            href='https://vite.dev'
            rel='noreferrer'
            target='_blank'
          >
            <img
              alt='Vite logo'
              className='h-24 w-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]'
              src={viteLogo}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              style={{ padding: LOGO_PADDING }}
            />
          </a>
          <a
            aria-label='React homepage'
            href='https://react.dev'
            rel='noreferrer'
            target='_blank'
          >
            <img
              alt='React logo'
              className='h-24 w-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow'
              src={reactLogo}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              style={{ padding: LOGO_PADDING }}
            />
          </a>
        </div>

        <h1 className='text-5xl font-bold mt-8 mb-4 text-center text-gray-900'>
          Vite + React
        </h1>

        <div className='card bg-white/80 rounded-lg shadow p-8 my-8 flex flex-col items-center'>
          <Button
            aria-label='Increment counter'
            onClick={increment}
            tabIndex={0}
          >
            <span
              className='transition-all duration-300 ease-in-out text-blue-700 text-3xl font-mono'
              style={{ display: 'inline-block', minWidth: 60 }}
              aria-live='polite'
            >
              <span className='sr-only'>Current count: </span>
              {count}
            </span>
          </Button>
          <p className='mt-4 text-gray-700'>
            Edit{' '}
            <code className='bg-gray-200 px-2 py-1 rounded text-sm text-gray-900'>
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </div>

        <p className='text-center mb-8 text-gray-700'>
          Click on the Vite and React logos to learn more
        </p>
        <Footer />
      </div>
    </div>
  );
}

export default App;
