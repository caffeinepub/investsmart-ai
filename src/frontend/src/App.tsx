import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import LearnInvesting from './pages/LearnInvesting';
import SipCalculator from './pages/SipCalculator';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import { Toaster } from '@/components/ui/sonner';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const chatbotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chatbot',
  component: Chatbot,
});

const learnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn',
  component: LearnInvesting,
});

const sipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sip-calculator',
  component: SipCalculator,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const disclaimerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/disclaimer',
  component: Disclaimer,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  chatbotRoute,
  learnRoute,
  sipRoute,
  aboutRoute,
  disclaimerRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
