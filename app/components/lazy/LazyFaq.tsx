import dynamic from 'next/dynamic';

export const LazyFaq = dynamic(() => import('../Faq').then(mod => mod.default), {
  loading: () => <p>Loading...</p>,
  ssr: false
});