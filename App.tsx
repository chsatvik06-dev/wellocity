import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Foods from "./pages/Foods";
import DietPlan from "./pages/DietPlan";
import WorkoutPlan from "./pages/WorkoutPlan";
import BloodReport from "./pages/BloodReport";
import WomensWellness from "./pages/WomensWellness";
import FeedbackPortal from "./pages/FeedbackPortal";
import AISpecialists from "./pages/AISpecialists";
import PubertyConsultant from "./pages/PubertyConsultant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/foods" element={<Foods />} />
              <Route path="/diet-plan" element={<DietPlan />} />
              <Route path="/workout-plan" element={<WorkoutPlan />} />
              <Route path="/blood-report" element={<BloodReport />} />
              <Route path="/womens-wellness" element={<WomensWellness />} />
              <Route path="/feedback" element={<FeedbackPortal />} />
              <Route path="/ai-specialists" element={<AISpecialists />} />
              <Route path="/puberty-consultant" element={<PubertyConsultant />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
