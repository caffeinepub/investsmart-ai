import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { TrendingUp, Shield, Target, PieChart } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-fintech-blue via-background to-fintech-green/10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Start Your Investment Journey with{' '}
                <span className="text-fintech-blue">InvestSmart AI</span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Get personalized investment recommendations based on your risk profile, goals, and financial situation. No jargon, just simple advice to help you grow your wealth.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-fintech-blue hover:bg-fintech-blue/90 text-white"
                  onClick={() => navigate({ to: '/chatbot' })}
                >
                  Get My Investment Plan
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/learn' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/assets/generated/investsmart-hero.dim_1600x900.png"
                alt="Investment growth illustration"
                className="w-full max-w-lg rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Risk Profiling */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What is Risk Profiling?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Risk profiling helps us understand your comfort level with market ups and downs. By knowing your age, income, goals, and how you react to market changes, we can suggest investments that match your personality and financial situation.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Think of it like finding the right shoe size – we want investments that fit you perfectly, not too risky or too safe.
            </p>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-fintech-blue/20 hover:border-fintech-blue/40 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-fintech-blue/10">
                  <TrendingUp className="h-6 w-6 text-fintech-blue" />
                </div>
                <CardTitle>Why Invest?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Saving alone won't beat inflation. Investing helps your money grow faster than the rising cost of living, building real wealth over time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-fintech-green/20 hover:border-fintech-green/40 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-fintech-green/10">
                  <Target className="h-6 w-6 text-fintech-green" />
                </div>
                <CardTitle>Power of Compounding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your returns earn returns! Start early and let time do the heavy lifting. Even small amounts grow significantly over 10-20 years.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-fintech-blue/20 hover:border-fintech-blue/40 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-fintech-blue/10">
                  <Shield className="h-6 w-6 text-fintech-blue" />
                </div>
                <CardTitle>Risk vs Return</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Higher returns usually mean higher risk. The key is finding the right balance for your comfort level and time horizon.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-fintech-green/20 hover:border-fintech-green/40 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-fintech-green/10">
                  <PieChart className="h-6 w-6 text-fintech-green" />
                </div>
                <CardTitle>Diversification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Don't put all eggs in one basket. Spread your money across different types of investments to reduce risk and smooth out returns.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Investing Smart?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Answer a few simple questions and get your personalized investment plan in minutes.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-fintech-blue hover:bg-fintech-blue/90 text-white"
            onClick={() => navigate({ to: '/chatbot' })}
          >
            Get My Investment Plan
          </Button>
        </div>
      </section>
    </div>
  );
}
