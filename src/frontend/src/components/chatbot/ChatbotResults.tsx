import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import AssetAllocationPieChart from '@/components/charts/AssetAllocationPieChart';
import { useGenerateRecommendation } from '@/hooks/useQueries';
import { calculateSIPSuggestion, formatCurrency } from '@/lib/finance';
import type { RiskProfile } from '@/pages/Chatbot';
import type { Classification } from '@/backend';

interface Props {
  profile: RiskProfile;
  classification: Classification;
  onStartOver: () => void;
}

interface AllocationData {
  name: string;
  value: number;
  color: string;
}

export default function ChatbotResults({ profile, classification, onStartOver }: Props) {
  const { data: recommendation, isLoading } = useGenerateRecommendation(classification);

  const getProfileLabel = () => {
    switch (classification) {
      case 'conservative':
        return 'Conservative';
      case 'moderate':
        return 'Moderate';
      case 'aggressive':
        return 'Aggressive';
      default:
        return 'Unknown';
    }
  };

  const getProfileColor = () => {
    switch (classification) {
      case 'conservative':
        return 'bg-blue-500';
      case 'moderate':
        return 'bg-yellow-500';
      case 'aggressive':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getAllocationData = (): AllocationData[] => {
    if (!recommendation) return [];
    
    const data: AllocationData[] = [];
    if (Number(recommendation.stocks) > 0) {
      data.push({ name: 'Equity', value: Number(recommendation.stocks), color: '#10b981' });
    }
    if (Number(recommendation.bonds) > 0) {
      data.push({ name: 'Debt', value: Number(recommendation.bonds), color: '#3b82f6' });
    }
    if (Number(recommendation.cash) > 0) {
      data.push({ name: 'Gold/Cash', value: Number(recommendation.cash), color: '#f59e0b' });
    }
    return data;
  };

  const getModelPortfolios = () => {
    switch (classification) {
      case 'conservative':
        return [
          {
            name: 'Safe & Steady',
            components: ['60% Fixed Deposits', '20% Debt Mutual Funds', '10% Large Cap ETF', '10% Gold ETF'],
          },
          {
            name: 'Income Focus',
            components: ['50% Government Bonds', '30% Corporate Bonds', '10% Index Funds', '10% Gold'],
          },
          {
            name: 'Capital Protection',
            components: ['70% Bank FDs', '20% Liquid Funds', '10% Nifty 50 Index'],
          },
        ];
      case 'moderate':
        return [
          {
            name: 'Balanced Growth',
            components: ['30% Nifty 50 Index', '20% Mid Cap Funds', '30% Debt Funds', '10% Gold', '10% Hybrid Funds'],
          },
          {
            name: 'Steady Returns',
            components: ['40% Large Cap Equity', '30% Corporate Bonds', '20% Balanced Funds', '10% Gold ETF'],
          },
          {
            name: 'Diversified Mix',
            components: ['35% Index Funds', '25% Debt Mutual Funds', '20% Multi-Asset Funds', '10% Gold', '10% FDs'],
          },
        ];
      case 'aggressive':
        return [
          {
            name: 'High Growth',
            components: ['50% Mid & Small Cap', '30% Nifty 50 Index', '10% Gold', '10% Debt Funds'],
          },
          {
            name: 'Equity Focus',
            components: ['40% Small Cap Funds', '30% Large Cap Index', '20% Mid Cap Funds', '10% Gold ETF'],
          },
          {
            name: 'Maximum Returns',
            components: ['60% Diversified Equity', '20% Sectoral Funds', '10% International Equity', '10% Gold'],
          },
        ];
      default:
        return [];
    }
  };

  const getDosAndDonts = () => {
    const common = {
      dos: [
        'Start investing early to benefit from compounding',
        'Review your portfolio every 6-12 months',
        'Stay invested for the long term',
        'Diversify across different asset classes',
      ],
      donts: [
        "Don't panic during market corrections",
        "Don't invest money you'll need in the next year",
        "Don't put all your money in one investment",
        "Don't try to time the market",
      ],
    };

    switch (classification) {
      case 'conservative':
        return {
          dos: [
            ...common.dos,
            'Focus on capital preservation',
            'Consider tax-saving fixed deposits',
          ],
          donts: [
            ...common.donts,
            "Don't chase high returns at the cost of safety",
          ],
        };
      case 'moderate':
        return {
          dos: [
            ...common.dos,
            'Balance between growth and stability',
            'Use SIPs for equity investments',
          ],
          donts: [
            ...common.donts,
            "Don't ignore debt allocation",
          ],
        };
      case 'aggressive':
        return {
          dos: [
            ...common.dos,
            'Stay patient during volatility',
            'Consider international diversification',
          ],
          donts: [
            ...common.donts,
            "Don't invest borrowed money",
          ],
        };
      default:
        return common;
    }
  };

  const sipSuggestion = calculateSIPSuggestion(profile.monthlyIncome, profile.investmentHorizon);

  if (isLoading) {
    return (
      <CardContent className="flex min-h-[400px] items-center justify-center">
        <p>Loading recommendations...</p>
      </CardContent>
    );
  }

  return (
    <div className="space-y-6 p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Your Investment Plan</h2>
          <p className="text-muted-foreground">Based on your risk profile and goals</p>
        </div>
        <Button variant="outline" onClick={onStartOver}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Start Over
        </Button>
      </div>

      {/* Risk Profile Result */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full ${getProfileColor()}`} />
            <CardTitle>Your Risk Profile: {getProfileLabel()}</CardTitle>
          </div>
          <CardDescription>{recommendation?.description}</CardDescription>
        </CardHeader>
      </Card>

      {/* Asset Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Asset Allocation</CardTitle>
          <CardDescription>How to split your investments</CardDescription>
        </CardHeader>
        <CardContent>
          <AssetAllocationPieChart data={getAllocationData()} />
        </CardContent>
      </Card>

      {/* SIP Suggestion */}
      <Card className="border-fintech-green/30 bg-fintech-green/5">
        <CardHeader>
          <CardTitle>Monthly SIP Suggestion</CardTitle>
          <CardDescription>Start with a systematic investment plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-fintech-green">
              {formatCurrency(sipSuggestion.amount)}
              <span className="text-base font-normal text-muted-foreground">/month</span>
            </p>
            <p className="text-sm text-muted-foreground">{sipSuggestion.explanation}</p>
          </div>
        </CardContent>
      </Card>

      {/* Model Portfolios */}
      <div>
        <h3 className="mb-4 text-xl font-bold">3 Model Portfolios for You</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {getModelPortfolios().map((portfolio, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{portfolio.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {portfolio.components.map((component, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-fintech-green" />
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Card>
        <CardHeader>
          <CardTitle>Investment Do's and Don'ts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-fintech-green">
                <CheckCircle2 className="h-5 w-5" />
                Do's
              </h4>
              <ul className="space-y-2">
                {getDosAndDonts().dos.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fintech-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                <XCircle className="h-5 w-5" />
                Don'ts
              </h4>
              <ul className="space-y-2">
                {getDosAndDonts().donts.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="rounded-lg bg-muted/50 p-4 text-center text-sm text-muted-foreground">
        <p>
          This is educational content only and not SEBI-registered investment advice. Please consult a certified financial advisor before making investment decisions.
        </p>
      </div>
    </div>
  );
}
