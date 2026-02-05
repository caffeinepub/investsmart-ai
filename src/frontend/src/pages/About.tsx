import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">About InvestSmart AI</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Making investing simple and accessible for everyone
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                InvestSmart AI is your friendly guide to the world of investing. We believe that everyone deserves access to smart financial advice, not just the wealthy. Our mission is to help beginner investors understand their risk profile and make informed investment decisions without the confusing jargon.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-fintech-blue/10">
                  <Target className="h-6 w-6 text-fintech-blue" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To democratize investment advice and help young Indians build wealth through smart, personalized investment strategies that match their goals and risk appetite.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-fintech-green/10">
                  <Users className="h-6 w-6 text-fintech-green" />
                </div>
                <CardTitle>Who We Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're built for beginners – people who want to start investing but don't know where to begin. Whether you're a student, young professional, or anyone looking to grow their wealth, we're here for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-fintech-blue/10">
                  <Heart className="h-6 w-6 text-fintech-blue" />
                </div>
                <CardTitle>Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use simple language, not financial jargon. Our AI-powered risk profiling helps you understand your investment personality and suggests portfolios that actually fit your life and goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-fintech-green/10">
                  <Shield className="h-6 w-6 text-fintech-green" />
                </div>
                <CardTitle>Educational Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're not here to sell you products. Our content is purely educational, designed to help you make informed decisions. We believe in empowering you with knowledge, not pushing products.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-fintech-blue/20">
            <CardHeader>
              <CardTitle>What Makes Us Different</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-blue" />
                  <span>
                    <strong>GenZ-Friendly:</strong> We speak your language. No boring finance textbook stuff here.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-blue" />
                  <span>
                    <strong>Personalized:</strong> Your risk profile is unique. We don't believe in one-size-fits-all advice.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-blue" />
                  <span>
                    <strong>Free & Transparent:</strong> No hidden fees, no product pushing. Just honest, educational content.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-blue" />
                  <span>
                    <strong>Beginner-First:</strong> We assume you know nothing about investing, and that's perfectly okay.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Remember: InvestSmart AI provides educational content only. We are not SEBI-registered advisors. Always consult a certified financial advisor before making investment decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
