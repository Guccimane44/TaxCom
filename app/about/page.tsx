"use client";

import { Card } from "../components/ui/card";
import { Target, Users, Shield } from "lucide-react";


export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">About TaxCom</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to make international tax comparison simple,
                accurate, and accessible to everyone.
              </p>
            </div>

            <Card className="p-8 shadow-soft border-2 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                TaxCom was founded with a simple goal: to help people understand
                and compare income tax across different countries. Whether you&apos;re
                considering a move abroad, planning your career, or just curious
                about how tax systems compare globally, we provide accurate,
                up-to-date information in an easy-to-understand format.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 shadow-card hover:shadow-soft transition-shadow animate-fade-in">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accurate Data</h3>
                <p className="text-sm text-muted-foreground">
                  We use reliable sources and regularly update our database to
                  ensure you get the most accurate tax information.
                </p>
              </Card>

              <Card
                className="p-6 shadow-card hover:shadow-soft transition-shadow animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Our intuitive interface makes complex tax calculations simple.
                  No accounting degree required.
                </p>
              </Card>

              <Card
                className="p-6 shadow-card hover:shadow-soft transition-shadow animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  Your data stays private. We don't store your financial
                  information or share it with third parties.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 shadow-soft animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Why Choose TaxCom?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Comprehensive Coverage:</strong>{" "}
                  We cover tax systems from major countries around the world,
                  with more being added regularly.
                </p>
                <p>
                  <strong className="text-foreground">Real-Time Calculations:</strong>{" "}
                  Get instant results with our advanced calculator that takes
                  into account various deductions and filing statuses.
                </p>
                <p>
                  <strong className="text-foreground">Transparent Methodology:</strong>{" "}
                  We believe in transparency. Our calculation methods are based
                  on publicly available tax codes and regulations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

    </div>
  );
}
