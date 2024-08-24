import dynamic from 'next/dynamic';

export const LazyAbout = dynamic(() => import('./List'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
