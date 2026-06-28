import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { TaskProvider } from "./context/TaskContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#0f172a",
            color: "#fff",
          },
        }}
      />
    </TaskProvider>
  </React.StrictMode>
);