import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Loader from "./components/Globals/Loader";

import ScrollToTop from "./components/Button/Button";
import { Home } from "lucide-react";

import Services from "./pages/Services";
import { HelmetProvider } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
 
  
  return (
    <>

      <HelmetProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => {
            return <Route element={route.page} key={index} path={route.url} />;
          })}
          {/* <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about-us" element={<AboutUS/>}/>
          <Route path="/contact-us" element={<ContactUS/>}/>
          */}


        </Routes>
        <ScrollToTop/>
      </Suspense>
      </HelmetProvider>
    </>
  );
}

export default App;
