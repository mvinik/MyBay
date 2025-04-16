import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Loader from "./components/Globals/Loader";
import { useLocation } from 'react-router-dom';
import ScrollToTop from "./components/Button/Button";
function App() {
  
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => {
            return <Route element={route.page} key={index} path={route.url} />;
          })}
        </Routes>
        <ScrollToTop/>
      </Suspense>
    </>
  );
}

export default App;
