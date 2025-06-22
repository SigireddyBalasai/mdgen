import { useState, useCallback, lazy, Suspense } from 'react';
const viteLogo = '/vite.svg';
const reactLogo = './assets/react.svg';
const Footer = lazy(() => import('./Footer'));
const Button = lazy(() => import('./components/Button'));

const LOGO_SIZE = 96;
const LOGO_PADDING = 6;

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className='bg-white min-h-screen'>
      <div className='max-w-xl mx-auto px-2 sm:px-4'>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-6 sm:pt-8'>
          <a
            aria-label='Vite homepage'
            href='https://vite.dev'
            rel='noreferrer'
            target='_blank'
          >
            <img
              alt='Vite logo'
              className='h-20 w-20 sm:h-24 sm:w-24 p-4 sm:p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]'
              src={viteLogo}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              style={{ padding: LOGO_PADDING }}
              loading='lazy'
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
              className='h-20 w-20 sm:h-24 sm:w-24 p-4 sm:p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow'
              src={reactLogo}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              style={{ padding: LOGO_PADDING }}
              loading='lazy'
            />
          </a>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-center text-gray-900'>
          Vite + React
        </h1>

        <div className='card bg-white/80 rounded-lg shadow p-4 sm:p-8 my-6 sm:my-8 flex flex-col items-center w-full'>
          <Button
            aria-label='Increment counter'
            onClick={increment}
            tabIndex={0}
            className='focus-visible:ring-4 focus-visible:ring-blue-400 w-full sm:w-auto'
          >
            <span
              className='transition-all duration-300 ease-in-out text-blue-700 text-2xl sm:text-3xl font-mono'
              style={{ display: 'inline-block', minWidth: 60 }}
              aria-live='polite'
            >
              <span className='sr-only'>Current count: </span>
              {count}
            </span>
          </Button>
          <p className='mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg text-center'>
            Edit{' '}
            <code className='bg-gray-200 px-2 py-1 rounded text-sm text-gray-900'>
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </div>

        <p className='text-center mb-6 sm:mb-8 text-gray-700 text-base sm:text-lg'>
          Click on the Vite and React logos to learn more
        </p>
        <Suspense fallback={<div className='text-center text-gray-400'>Loading footer…</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
