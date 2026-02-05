import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import { calculateSIP, formatCurrency } from '@/lib/sipCalculator';

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('5000');
  const [expectedReturn, setExpectedReturn] = useState('12');
  const [timePeriod, setTimePeriod] = useState('10');
  const [result, setResult] = useState<{
    totalInvested: number;
    estimatedReturns: number;
    totalValue: number;
  } | null>(null);

  const handleCalculate = () => {
    const monthly = parseFloat(monthlyInvestment);
    const rate = parseFloat(expectedReturn);
    const years = parseFloat(timePeriod);

    if (isNaN(monthly) || isNaN(rate) || isNaN(years) || monthly <= 0 || rate <= 0 || years <= 0) {
      return;
    }

    const calculatedResult = calculateSIP(monthly, rate, years);
    setResult(calculatedResult);
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">SIP Calculator</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Calculate how much your monthly investments can grow
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input Card */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Details</CardTitle>
              <CardDescription>Enter your SIP parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthly">Monthly Investment (₹)</Label>
                <Input
                  id="monthly"
                  type="number"
                  placeholder="5000"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                  min="500"
                />
                <p className="text-xs text-muted-foreground">Minimum ₹500</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="return">Expected Annual Return (%)</Label>
                <Input
                  id="return"
                  type="number"
                  placeholder="12"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(e.target.value)}
                  min="1"
                  max="30"
                  step="0.5"
                />
                <p className="text-xs text-muted-foreground">Typical range: 8-15% for equity funds</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="period">Time Period (Years)</Label>
                <Input
                  id="period"
                  type="number"
                  placeholder="10"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  min="1"
                  max="40"
                />
                <p className="text-xs text-muted-foreground">Longer periods benefit more from compounding</p>
              </div>

              <Button
                onClick={handleCalculate}
                className="w-full bg-fintech-blue hover:bg-fintech-blue/90"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calculate
              </Button>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="border-2 border-fintech-green/20 bg-fintech-green/5">
            <CardHeader>
              <CardTitle>Projected Results</CardTitle>
              <CardDescription>Your investment growth estimate</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-background p-4">
                      <p className="text-sm text-muted-foreground">Total Invested</p>
                      <p className="text-2xl font-bold">{formatCurrency(result.totalInvested)}</p>
                    </div>

                    <div className="rounded-lg border bg-background p-4">
                      <p className="text-sm text-muted-foreground">Estimated Returns</p>
                      <p className="text-2xl font-bold text-fintech-green">
                        {formatCurrency(result.estimatedReturns)}
                      </p>
                    </div>

                    <div className="rounded-lg border-2 border-fintech-green bg-background p-4">
                      <p className="text-sm text-muted-foreground">Total Value</p>
                      <p className="text-3xl font-bold text-fintech-green">
                        {formatCurrency(result.totalValue)}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-background p-4">
                    <p className="mb-2 text-sm font-medium">Breakdown:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Your contribution:</span>
                        <span className="font-medium">
                          {((result.totalInvested / result.totalValue) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Returns from compounding:</span>
                        <span className="font-medium text-fintech-green">
                          {((result.estimatedReturns / result.totalValue) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    * This is an estimate based on the expected return rate. Actual returns may vary based on market conditions.
                  </p>
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center text-center">
                  <div className="space-y-2">
                    <Calculator className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">
                      Enter your details and click Calculate to see results
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Understanding SIP Returns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>
              <strong>What is SIP?</strong> Systematic Investment Plan (SIP) is a method of investing a fixed amount regularly in mutual funds. It's like a recurring deposit but with market-linked returns.
            </p>
            <p>
              <strong>Why SIP works:</strong> By investing regularly, you buy more units when prices are low and fewer when prices are high. This averages out your cost and reduces risk.
            </p>
            <p>
              <strong>Important:</strong> Past performance doesn't guarantee future returns. The calculator shows estimates based on your expected return rate. Actual returns depend on market performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
