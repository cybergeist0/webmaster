import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DarkModeProvider } from "./context/DarkModeContext"; // Assuming you have this
import SuspenseWrapper from "./components/SuspenseWrapper";
import Spinner from "./components/Spinner";

// Lazy load components
const NavbarHome = lazy(() => import("./components/NavbarHome"));
const NavbarPages = lazy(() => import("./components/NavbarPages"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Contact = lazy(() => import("./pages/Contact"));
const Approach = lazy(() => import("./pages/Approach"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route
            path="/webmaster/"
            element={
              <>
                <NavbarHome />
                <SuspenseWrapper>
                  <Home />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
          <Route
            path="/webmaster/menu"
            element={
              <>
                <NavbarPages />
                <SuspenseWrapper>
                  <Menu />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
          <Route
            path="/webmaster/contact"
            element={
              <>
                <NavbarPages />
                <SuspenseWrapper>
                  <Contact />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
          <Route
            path="/webmaster/approach"
            element={
              <>
                <NavbarPages />
                <SuspenseWrapper>
                  <Approach />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <DarkModeProvider> {/* Wrap the entire app in the context */}
      <Router>
        <Suspense fallback={<Spinner />}>
          <AnimatedRoutes />
        </Suspense>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
