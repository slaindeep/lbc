import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext"; // Make sure this path is correct
import AdminDashboard from "./components/admin/AdminDashboard";
import LoginPage from "./components/auth/LoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ModernHero from "./components/home/hero/ModernHero";
import ProfileProcessorPage from "./components/image/ProfileProcessorPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import IdealPartner from "./components/sections/IdealPartner";
import Locations from "./components/sections/Locations";
import Services from "./components/sections/Services";
import TeamMembers from "./components/sections/TeamMembers";
import About from "./pages/About";
import GetStartedPage from "./pages/GetStartedPage";

const MainContent = () => {
  return (
    <>
      <ModernHero />
      <Services />
      <IdealPartner />
      <TeamMembers />
      <Locations />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-20">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<MainContent />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/get-started" element={<GetStartedPage />} />
              <Route path="/about" element={<About />} />

              {/* Protected routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/process-image"
                element={
                  <ProtectedRoute>
                    <ProfileProcessorPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
