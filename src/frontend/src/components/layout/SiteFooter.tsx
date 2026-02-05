import { useNavigate } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const navigate = useNavigate();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/investsmart-logo.dim_512x128.png"
              alt="InvestSmart AI"
              className="mb-3 h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Making investing simple and accessible for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate({ to: '/learn' })}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Learn Investing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ to: '/sip-calculator' })}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  SIP Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ to: '/about' })}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate({ to: '/disclaimer' })}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Educational content only. Not SEBI advice.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © 2026. Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
