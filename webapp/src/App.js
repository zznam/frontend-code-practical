import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const EmployeeSingle = lazy(() => import('./pages/EmployeeSingle.jsx'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.jsx'));

const queryClient = new QueryClient()

function App() {
  return (
    <AnimatePresence>
        <QueryClientProvider client={queryClient}>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <Router>
            <ScrollToTop />
            <AppHeader />
            <Suspense fallback={""}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="user/:id"
                  element={<EmployeeSingle />}
                />
                <Route
                  path="*"
                  element={<PageNotFound />}
                />
              </Routes>
            </Suspense>
            <AppFooter />
          </Router>
          <UseScrollToTop />
      </div>
      </QueryClientProvider>
    </AnimatePresence>
  );
}

export default App;
