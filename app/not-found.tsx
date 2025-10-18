"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "./components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NotFoundPage() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="container max-w-2xl px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="mb-4 text-9xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved or doesn't exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
