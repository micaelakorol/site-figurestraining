import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./interfaces/pages/configRoutes/Index.jsx";
import "./styles/global.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { UserContextField } from "./interfaces/pages/context/UserContextField.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserContextField>
      <RouterProvider router={router} />
    </UserContextField>
  </Provider>
);
