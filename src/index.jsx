import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { fetchTools } from './redux/tools/toolSlice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    }
])
// store.dispatch(fetchTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
);


