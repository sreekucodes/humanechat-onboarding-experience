
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-light p-6">
      <div className="glass-panel rounded-lg p-10 text-center max-w-md w-full animate-fade-in">
        <h1 className="text-6xl font-bold text-app-dark mb-4">404</h1>
        <p className="text-xl text-app-text mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-app-blue hover:text-blue-700 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Return to onboarding</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
