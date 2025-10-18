"use client";

import { useState } from "react";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Calculator, TrendingUp } from "lucide-react";

const taxData = {
  "United States": { base: 0.22, additional: 0.07, currency: "USD" },
  "United Kingdom": { base: 0.2, additional: 0.12, currency: "GBP" },
  Germany: { base: 0.25, additional: 0.19, currency: "EUR" },
  France: { base: 0.3, additional: 0.2, currency: "EUR" },
  Canada: { base: 0.2, additional: 0.1, currency: "CAD" },
  Australia: { base: 0.19, additional: 0.1, currency: "AUD" },
  Singapore: { base: 0.11, additional: 0.07, currency: "SGD" },
  Japan: { base: 0.2, additional: 0.1, currency: "JPY" },
} as const;

export default function ComparePage() {
  const [country, setCountry] = useState("");
  const [income, setIncome] = useState("");
  const [filingStatus, setFilingStatus] = useState("");
  const [result, setResult] = useState<{
    effectiveRate: number;
    netIncome: number;
    currency: string;
  } | null>(null);

  const calculateTax = () => {
    if (!country || !income || !filingStatus) return;

    const incomeNum = parseFloat(income);
    const data = taxData[country as keyof typeof taxData];

    let effectiveRate = data.base;
    if (filingStatus === "married") {
      effectiveRate -= 0.02;
    }
    effectiveRate += data.additional;

    const netIncome = incomeNum * (1 - effectiveRate);

    setResult({
      effectiveRate: effectiveRate * 100,
      netIncome,
      currency: data.currency,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">Tax Calculator</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enter your details below to calculate your effective tax rate and
                net income.
              </p>
            </div>

            <Card className="p-8 shadow-soft border-2 animate-fade-in">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(taxData).map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="filingStatus">Filing Status</Label>
                    <Select value={filingStatus} onValueChange={setFilingStatus}>
                      <SelectTrigger id="filingStatus">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="head">Head of Household</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="income">Annual Income</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="Enter your annual income"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </div>

                <Button
                  onClick={calculateTax}
                  className="w-full shadow-soft"
                  size="lg"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Tax
                </Button>
              </div>
            </Card>

            {result && (
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 shadow-soft animate-fade-in">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Your Results</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Effective Tax Rate
                    </p>
                    <p className="text-4xl font-bold text-primary">
                      {result.effectiveRate.toFixed(1)}%
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Net Annual Income
                    </p>
                    <p className="text-4xl font-bold text-accent">
                      {result.currency}{" "}
                      {result.netIncome.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-background/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This is an estimated calculation based
                    on standard rates. Actual tax amounts may vary based on
                    deductions, credits, and specific circumstances.
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>

    </div>
  );
}
