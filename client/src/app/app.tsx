import { PageLoader } from '@/shared/ui/page-loader';
import { HomePageLazy } from '@/pages/home';
import { Suspense } from 'react';
import './_styles/globals.css';

export const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomePageLazy />
    </Suspense>
  );
};
