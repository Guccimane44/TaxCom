import { NavLink } from "react-router-dom";
import { Calculator } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="font-semibold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TaxCom
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Compare income tax across countries and calculate your take-home pay with confidence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/compare" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tax Calculator
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/feedback" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Send Feedback
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TaxCom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;