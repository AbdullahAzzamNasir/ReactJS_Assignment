import { Route, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
        
      <Route path="/" element={<Home/> }/>
      <Route  path="/about" element={<About/> }/>
      <Route  path="/contact" element={<Contact/> }/>
    </>
  )
);

export default appRouter