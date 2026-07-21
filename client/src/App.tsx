import { useUser } from "@clerk/react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Loading from "./pages/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Dashboard from "./pages/protected/Dashboard";
import ProtectedRoute from "./hooks/ProtectedRoute";

import Generate from "./pages/protected/site/Generate";
import GeneratedSites from "./pages/protected/site/GeneratedSites";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <main className="max-w-7xl mx-auto px-8 lg:px-0">
        <Routes>
          <Route path="/" element={isSignedIn ? <Dashboard /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="sites" element={<GeneratedSites />} />
            <Route path="site/generate" element={<Generate />} />
          </Route>
        </Routes>
      </main>
      {!isSignedIn && <Footer />}
    </Router>
  );
}

export default App;
