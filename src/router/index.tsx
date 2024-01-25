import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CallbackPage from "../Pages/CallbackPage";
import RedirectPage from "../Pages/RedirectPage";

const router = createBrowserRouter([
    {
        path: "/biodoc-callback",
        element: <CallbackPage />
    },
    {
        path: "/redirect",
        element: <RedirectPage />
    },
    {
        path: "/",
        element: <App />
    },
]);

export default router