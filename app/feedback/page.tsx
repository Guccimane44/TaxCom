"use client";

import { useState, FormEvent } from "react";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useToast } from "../components/hooks/use-toast";
import { MessageSquare, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Feedback Received!",
      description: "Thank you for your feedback. We'll get back to you soon.",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                We'd Love Your Feedback
              </h1>
              <p className="text-lg text-muted-foreground">
                Help us improve TaxCom by sharing your thoughts, suggestions, or reporting any issues.
              </p>
            </div>

            <Card className="p-8 shadow-soft border-2 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your thoughts, suggestions, or report an issue..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full shadow-soft" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Feedback
                </Button>
              </form>
            </Card>

            <Card className="p-6 bg-muted/50 border-0">
              <h3 className="font-semibold mb-2">Other Ways to Reach Us</h3>
              <p className="text-sm text-muted-foreground">
                You can also email us directly at{" "}
                <a
                  href="mailto:support@taxcom.example"
                  className="text-primary hover:underline"
                >
                  support@taxcom.example
                </a>{" "}
                or follow us on social media for updates and news.
              </p>
            </Card>
          </div>
        </div>
      </main>

    </div>
  );
}
