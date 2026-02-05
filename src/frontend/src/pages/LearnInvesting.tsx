import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, TrendingUp, Shield, Target, Lightbulb, DollarSign } from 'lucide-react';

export default function LearnInvesting() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Learn Investing</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Simple guides to help you start your investment journey
          </p>
        </div>

        <div className="space-y-6">
          {/* Getting Started */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fintech-blue/10">
                  <BookOpen className="h-5 w-5 text-fintech-blue" />
                </div>
                <div>
                  <CardTitle>Getting Started with Investing</CardTitle>
                  <CardDescription>The basics every beginner should know</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Investing is simply putting your money to work so it can grow over time. Instead of letting your savings sit idle in a regular bank account, you invest in assets that have the potential to increase in value.
              </p>
              <p>
                Think of it like planting a tree. You plant a seed (your initial investment), water it regularly (add more money through SIPs), and over time it grows into a big tree (your wealth).
              </p>
              <div className="rounded-lg bg-fintech-blue/5 p-4">
                <p className="font-medium">Key Takeaway:</p>
                <p className="text-sm">Start early, stay consistent, and let time do the heavy lifting.</p>
              </div>
            </CardContent>
          </Card>

          {/* Understanding Risk */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fintech-green/10">
                  <Shield className="h-5 w-5 text-fintech-green" />
                </div>
                <div>
                  <CardTitle>Understanding Risk & Return</CardTitle>
                  <CardDescription>Why higher returns come with higher risk</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                In investing, risk and return are best friends. If someone promises you high returns with zero risk, run away – it's probably a scam!
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="low-risk">
                  <AccordionTrigger>Low Risk = Low Returns</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm">
                      Safe investments like fixed deposits or government bonds give you steady but lower returns (5-7% per year). Your money is safe, but it grows slowly.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="medium-risk">
                  <AccordionTrigger>Medium Risk = Medium Returns</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm">
                      Balanced funds or index funds offer moderate returns (10-12% per year). Some ups and downs, but generally stable over time.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="high-risk">
                  <AccordionTrigger>High Risk = High Returns</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm">
                      Stocks and equity funds can give great returns (15%+ per year) but can also fall 30-40% during bad times. Only for those who can handle the roller coaster!
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Power of Compounding */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fintech-blue/10">
                  <TrendingUp className="h-5 w-5 text-fintech-blue" />
                </div>
                <div>
                  <CardTitle>The Magic of Compounding</CardTitle>
                  <CardDescription>How your money grows exponentially</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Compounding is when your returns start earning returns. It's like a snowball rolling down a hill – it starts small but gets bigger and bigger as it rolls.
              </p>
              <div className="rounded-lg border bg-card p-4">
                <p className="mb-2 font-medium">Example:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Invest ₹5,000/month for 20 years at 12% returns</li>
                  <li>• Total invested: ₹12 lakhs</li>
                  <li>• Final value: ₹50 lakhs!</li>
                  <li className="font-medium text-fintech-green">• Extra ₹38 lakhs from compounding alone</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                The earlier you start, the more time compounding has to work its magic. Even small amounts invested early beat large amounts invested late.
              </p>
            </CardContent>
          </Card>

          {/* Diversification */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fintech-green/10">
                  <Target className="h-5 w-5 text-fintech-green" />
                </div>
                <div>
                  <CardTitle>Why Diversification Matters</CardTitle>
                  <CardDescription>Don't put all your eggs in one basket</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Diversification means spreading your money across different types of investments. If one goes down, others might go up, balancing things out.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border p-3">
                  <p className="mb-1 font-medium">Equity</p>
                  <p className="text-xs text-muted-foreground">Stocks, mutual funds</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="mb-1 font-medium">Debt</p>
                  <p className="text-xs text-muted-foreground">Bonds, FDs</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="mb-1 font-medium">Gold</p>
                  <p className="text-xs text-muted-foreground">Physical, ETFs</p>
                </div>
              </div>
              <p className="text-sm">
                A good portfolio has a mix of all three. The exact mix depends on your age, goals, and risk appetite.
              </p>
            </CardContent>
          </Card>

          {/* SIP Explained */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fintech-blue/10">
                  <DollarSign className="h-5 w-5 text-fintech-blue" />
                </div>
                <div>
                  <CardTitle>What is SIP?</CardTitle>
                  <CardDescription>Systematic Investment Plan explained</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                SIP is like a monthly subscription for investing. Instead of investing a lump sum, you invest a fixed amount every month automatically.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Benefits of SIP:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-green" />
                    <span>No need to time the market – you buy at all levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-green" />
                    <span>Builds discipline – automatic deduction from your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-green" />
                    <span>Start small – even ₹500/month works</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-green" />
                    <span>Rupee cost averaging – buy more when prices are low</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fintech-green/10">
                  <Lightbulb className="h-5 w-5 text-fintech-green" />
                </div>
                <div>
                  <CardTitle>Common Beginner Mistakes</CardTitle>
                  <CardDescription>Learn from others' mistakes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-sm font-medium text-destructive">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Waiting for the "perfect time"</p>
                    <p className="text-sm text-muted-foreground">
                      There's no perfect time. Start now with whatever you have.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-sm font-medium text-destructive">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Panic selling during market falls</p>
                    <p className="text-sm text-muted-foreground">
                      Markets go up and down. Stay calm and stick to your plan.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-sm font-medium text-destructive">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Chasing hot tips and trends</p>
                    <p className="text-sm text-muted-foreground">
                      Stick to index funds and diversified portfolios. Boring wins.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-sm font-medium text-destructive">
                    4
                  </span>
                  <div>
                    <p className="font-medium">Not having an emergency fund</p>
                    <p className="text-sm text-muted-foreground">
                      Keep 6 months of expenses in a savings account before investing.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
