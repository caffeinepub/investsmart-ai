import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Disclaimer</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Important information about our service
          </p>
        </div>

        <div className="space-y-6">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Not SEBI Advice</AlertTitle>
            <AlertDescription>
              InvestSmart AI is not registered with SEBI (Securities and Exchange Board of India) and does not provide investment advisory services. All content is for educational purposes only.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Educational Purpose Only</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The information, recommendations, and tools provided on InvestSmart AI are purely for educational purposes. They are designed to help you understand investment concepts and make informed decisions.
              </p>
              <p>
                <strong>This is not financial advice.</strong> We do not recommend specific securities, mutual funds, or investment products. The model portfolios and asset allocations shown are examples for educational purposes only.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Guarantee of Returns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Past performance is not indicative of future results. The returns shown in our calculators and examples are estimates based on historical averages and do not guarantee actual returns.
              </p>
              <p>
                All investments carry risk, including the potential loss of principal. Market conditions can change rapidly, and actual returns may be significantly different from projections.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consult a Professional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Before making any investment decisions, we strongly recommend consulting with a SEBI-registered investment advisor or certified financial planner who can provide personalized advice based on your complete financial situation.
              </p>
              <p>
                A professional advisor can consider factors beyond our risk profiling, including your tax situation, existing investments, insurance needs, and long-term financial goals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                By using InvestSmart AI, you acknowledge that:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  <span>You are solely responsible for your investment decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  <span>You understand the risks involved in investing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  <span>You will conduct your own research before investing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                  <span>You will not hold InvestSmart AI liable for any investment losses</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We do not store your personal financial information. The risk profiling data you enter is used only to generate recommendations and is not saved or shared with third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-fintech-blue/20 bg-fintech-blue/5">
            <CardContent className="pt-6">
              <p className="text-center font-medium">
                InvestSmart AI is a free educational tool. We do not sell financial products, earn commissions, or have any conflicts of interest. Our goal is simply to help you learn about investing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
