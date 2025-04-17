import { createBrowserRouter } from "react-router-dom";
import Welcome from "../welcome/Welcome";
import Principal from "../principal/Principal";


const Routers = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/principal", element: <Principal /> },
]);

export default Routers;
