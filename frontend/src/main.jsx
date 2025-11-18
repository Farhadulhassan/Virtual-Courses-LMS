// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { store } from "./redux/store.js";
// import { Provider } from "react-redux";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </StrictMode>
// );













// src/main.jsx (Final Code for Replace)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// store se 'persistor' bhi import karein
import { store, persistor } from "./redux/store.js"; 
import { Provider } from "react-redux";
// PersistGate component import karein
import { PersistGate } from 'redux-persist/integration/react'; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          {/* 🚀 FIX: PersistGate se wrap karein */}
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);