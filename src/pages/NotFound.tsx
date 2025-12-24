import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <section className="min-h-[70vh] flex items-center justify-center bg-card">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-secondary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Button variant="secondary" asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} />
              Go Home
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
