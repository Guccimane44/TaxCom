"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Zap, Target, Shield, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroImage from "./assets/hero-tax.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <Image
              src={heroImage}
              alt="Tax comparison visualization"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Compare Income Tax <br className="hidden md:block" />
                Across Countries
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Calculate your take-home pay and compare tax rates from around the world.{" "}
                Fast, accurate, and transparent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/compare">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="shadow-soft text-lg px-8"
                  >
                    Compare Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose TaxCom?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We make international tax comparison simple and reliable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <Card className="p-8 shadow-card hover:shadow-soft transition-all animate-fade-in">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Get instant results with our optimized calculator. No waiting, no hassle—
                  just accurate tax comparisons in seconds.
                </p>
              </Card>

              {/* Feature 2 */}
              <Card
                className="p-8 shadow-card hover:shadow-soft transition-all animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Highly Accurate</h3>
                <p className="text-muted-foreground">
                  Our data is sourced from official government resources and updated regularly
                  to ensure precision.
                </p>
              </Card>

              {/* Feature 3 */}
              <Card
                className="p-8 shadow-card hover:shadow-soft transition-all animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">100% Transparent</h3>
                <p className="text-muted-foreground">
                  See exactly how we calculate your taxes. No hidden formulas, no surprises—
                  just clear, honest information.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
