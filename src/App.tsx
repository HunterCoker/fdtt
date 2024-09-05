import { Route, Routes } from "react-router-dom";

import LandingPage from "@/pages/landing";
import HomePage from "@/pages/home";
import ChecklistPage from "@/pages/checklist";
import ReportIssuePage from "@/pages/reportissue";
import AboutPage from "@/pages/about";
import SettingsPage from "@/pages/settings";

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<HomePage />} path="/home" />
      <Route element={<ChecklistPage />} path="/home/checklist" />
      <Route element={<ReportIssuePage />} path="/home/report-issue" />
      <Route element={<AboutPage />} path="/home/about" />
      <Route element={<SettingsPage />} path="/home/settings" />
    </Routes>
  );
}

export default App;
