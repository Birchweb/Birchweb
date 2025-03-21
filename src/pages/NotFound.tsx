
import React from "react";
import Button from "@/components/Button";
import { ArrowLeft, Home } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="pt-20">
      <div className="min-h-[calc(100vh-250px)] flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="text-9xl font-bold text-primary-100">404</div>
          </div>
          
          <h1 className="heading-2 text-gray-900 mb-4">Pagina niet gevonden</h1>
          
          <p className="body-large text-gray-600 mb-8">
            De pagina die je zoekt bestaat niet of is verplaatst.
            Ga terug naar de homepage of neem contact op als je hulp nodig hebt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              <Home className="w-4 h-4" />
              Terug naar home
            </Button>
            
            <Button href="/contact" variant="outline">
              <ArrowLeft className="w-4 h-4" />
              Neem contact op
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
