import dynamic from 'next/dynamic';

export const LazyBackgroundBeams = dynamic(() => import('../widgets/BackgroundBeamsDemo').then(mod => mod.default), {
  loading: () => <p>Loading...</p>,
  ssr: false
});