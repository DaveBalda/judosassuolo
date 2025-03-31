import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Maestri from "./pages/Maestri/Maestri";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound>Sembra che la pagina non esista!</NotFound>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/maestri",
    element: <Maestri />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
