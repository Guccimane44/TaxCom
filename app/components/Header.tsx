"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Calculator, Globe } from "lucide-react";
import type { Route } from "next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const pathname = usePathname();

  type NavLink = {
    href: Route;   // ✅ use Route, not string
    label: string;
  };

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/compare", label: "Compare" },
    { href: "/about", label: "About" },
    { href: "/feedback", label: "Feedback" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
          <Calculator className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TaxCom
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                English
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>中文</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
              <DropdownMenuItem>日本語</DropdownMenuItem>
              <DropdownMenuItem>한국어</DropdownMenuItem>
              <DropdownMenuItem>Português</DropdownMenuItem>
              <DropdownMenuItem>Русский</DropdownMenuItem>
              <DropdownMenuItem>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="shadow-soft">Register</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
