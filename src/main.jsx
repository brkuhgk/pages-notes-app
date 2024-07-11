import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Page from "./routes/page.jsx";
import {getNameByPagesId, getPagesName} from "./pages.js";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: getPagesName,

        errorElement: <ErrorPage />,
        children: [
            {
                path: "pages/:pageId",
                element: <Page />,
                loader: ({params}) =>{
                    return getNameByPagesId(params.pageId);
                }

            },
        ],

    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
