import { HashRouter, Route, Routes } from "react-router-dom";

// Docs: https://reactrouter.com/en/main/route/route

// Layouts
import { MainLayout } from "./layouts/Main";
import { AuthLayout } from "./layouts/Auth";

// Pages
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { ProfilePage } from "./pages/Profile";
import { VotePage } from "./pages/Vote";
import { StatPage } from "./pages/Stat";
import { ServicesPage } from "./pages/Services";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";

// Router
export const App = () => (
  <HashRouter>
    <Routes>

      {/* MainLayout - / */}
      <Route path="/" element={<MainLayout />} >
        {/* / */}
        <Route index element={<HomePage />} />
        {/* /#/home */}
        <Route path="home" element={<HomePage />} />
        {/* /#/services */}
        <Route path="services" element={<ServicesPage />} />
        {/* /#/login */}
        <Route path="apropos" element={<AboutPage />} />
        {/* /#/login */}
        <Route path="contact" element={<ContactPage />} />
        {/* /#/login */}
        <Route path="login" element={<LoginPage />} />

        {/* 404 Not Found - * */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* AuthLayout - /profile */}
      <Route path="profile" element={<AuthLayout />} >
        {/* /#/profile */}
        <Route index element={<ProfilePage />} />
        {/* /#/profile/power */}
        <Route path="vote" element={<VotePage />} />
        <Route path="stat" element={<StatPage />} />

        {/* 404 Not Found - * */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* 404 Not Found - * */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
)
