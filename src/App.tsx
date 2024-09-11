import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
// import Sales from "./pages/Dashboard/Sales";
// import Accounts from "./pages/Dashboard/Accounts";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    // <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Protected dashboard routes */}
      {/* <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="sales" element={<Sales />} />
          <Route path="accounts" element={<Accounts />} />
        </Route> */}

      {/* You can also protect other routes the same way */}
    </Routes>
    // </AuthProvider>
  );
};

export default App;
