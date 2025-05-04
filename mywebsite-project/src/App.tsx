import { RouterProvider } from "react-router-dom";
import appRouter from "./routes";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
      
      <Navbar />
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
