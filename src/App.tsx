import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; // Ensure this path is correct
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/auth/AdminLogin"; // Import the AdminLogin component
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ModernHero from "./components/home/hero/ModernHero";
import ProfileProcessorPage from "./components/image/ProfileProcessorPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import IdealPartner from "./components/sections/IdealPartner";
import Locations from "./components/sections/Locations";
import Services from "./components/sections/Services";
import TeamMembers from "./components/sections/TeamMembers";
import { AppointmentProvider } from "./contexts/AppointmentContext"; // Ensure this path is correct
import About from "./pages/About";
import GetStartedPage from "./pages/GetStartedPage";
import SuccessPage from "./pages/SuccessPage"; // Import the SuccessPage component

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
        <AppointmentProvider>
          <div className="app">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/about" element={<About />} />
                <Route path="/get-started" element={<GetStartedPage />} />
                <Route path="/login" element={<AdminLogin />} />{" "}
                {/* Add the admin login route */}
                <Route path="/success" element={<SuccessPage />} />{" "}
                {/* Add the success route */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile-processor"
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
        </AppointmentProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
