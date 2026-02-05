import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ArrowRight } from 'lucide-react';
import { useClassifyProfile } from '@/hooks/useQueries';
import type { RiskProfile } from '@/pages/Chatbot';
import type { Classification } from '@/backend';

interface Props {
  onComplete: (profile: RiskProfile, classification: Classification) => void;
}

type Step = 'age' | 'income' | 'goal' | 'horizon' | 'tolerance' | 'knowledge' | 'processing';

export default function RiskProfilingChatFlow({ onComplete }: Props) {
  const [step, setStep] = useState<Step>('age');
  const [age, setAge] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [investmentGoal, setInvestmentGoal] = useState('');
  const [investmentHorizon, setInvestmentHorizon] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('');
  const [investmentKnowledge, setInvestmentKnowledge] = useState('');

  const { mutate: classifyProfile, isPending } = useClassifyProfile();

  const handleNext = () => {
    const steps: Step[] = ['age', 'income', 'goal', 'horizon', 'tolerance', 'knowledge'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const handleSubmit = () => {
    setStep('processing');
    
    const profile: RiskProfile = {
      age: parseInt(age),
      monthlyIncome: parseInt(monthlyIncome),
      investmentGoal,
      investmentHorizon,
      riskTolerance,
      investmentKnowledge,
    };

    // Map risk tolerance to numeric value
    const riskToleranceMap: Record<string, number> = {
      'panic': 1,
      'moderate': 5,
      'high': 9,
    };

    // Map investment horizon to numeric value (years)
    const horizonMap: Record<string, number> = {
      '1-3': 2,
      '3-5': 4,
      '5-10': 7,
      '10+': 15,
    };

    classifyProfile(
      {
        age: BigInt(profile.age),
        riskTolerance: BigInt(riskToleranceMap[riskTolerance] || 5),
        investmentHorizon: BigInt(horizonMap[investmentHorizon] || 5),
      },
      {
        onSuccess: (classification) => {
          onComplete(profile, classification);
        },
      }
    );
  };

  const canProceed = () => {
    switch (step) {
      case 'age':
        return age && parseInt(age) >= 18 && parseInt(age) <= 100;
      case 'income':
        return monthlyIncome && parseInt(monthlyIncome) > 0;
      case 'goal':
        return investmentGoal !== '';
      case 'horizon':
        return investmentHorizon !== '';
      case 'tolerance':
        return riskTolerance !== '';
      case 'knowledge':
        return investmentKnowledge !== '';
      default:
        return false;
    }
  };

  if (step === 'processing') {
    return (
      <CardContent className="flex min-h-[400px] flex-col items-center justify-center space-y-4 p-8">
        <Loader2 className="h-12 w-12 animate-spin text-fintech-blue" />
        <p className="text-lg font-medium">Analyzing your profile...</p>
        <p className="text-sm text-muted-foreground">Creating your personalized investment plan</p>
      </CardContent>
    );
  }

  return (
    <div className="p-6 sm:p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl">Let's Build Your Investment Profile</CardTitle>
        <CardDescription>
          Answer a few questions to get personalized recommendations
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 px-0 pb-0">
        {step === 'age' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-base font-medium">
                What's your age?
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="18"
                max="100"
                className="text-base"
              />
              <p className="text-sm text-muted-foreground">
                This helps us understand your investment timeline
              </p>
            </div>
          </div>
        )}

        {step === 'income' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="income" className="text-base font-medium">
                What's your monthly income? (₹)
              </Label>
              <Input
                id="income"
                type="number"
                placeholder="Enter monthly income"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                min="0"
                className="text-base"
              />
              <p className="text-sm text-muted-foreground">
                This helps us suggest realistic investment amounts
              </p>
            </div>
          </div>
        )}

        {step === 'goal' && (
          <div className="space-y-4">
            <Label className="text-base font-medium">What's your main investment goal?</Label>
            <RadioGroup value={investmentGoal} onValueChange={setInvestmentGoal}>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="wealth" id="wealth" />
                <Label htmlFor="wealth" className="flex-1 cursor-pointer font-normal">
                  Wealth Creation
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="retirement" id="retirement" />
                <Label htmlFor="retirement" className="flex-1 cursor-pointer font-normal">
                  Retirement Planning
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="education" id="education" />
                <Label htmlFor="education" className="flex-1 cursor-pointer font-normal">
                  Education Fund
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="travel" id="travel" />
                <Label htmlFor="travel" className="flex-1 cursor-pointer font-normal">
                  Travel & Experiences
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="emergency" id="emergency" />
                <Label htmlFor="emergency" className="flex-1 cursor-pointer font-normal">
                  Emergency Fund
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 'horizon' && (
          <div className="space-y-4">
            <Label className="text-base font-medium">How long can you stay invested?</Label>
            <RadioGroup value={investmentHorizon} onValueChange={setInvestmentHorizon}>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="1-3" id="1-3" />
                <Label htmlFor="1-3" className="flex-1 cursor-pointer font-normal">
                  1–3 years
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="3-5" id="3-5" />
                <Label htmlFor="3-5" className="flex-1 cursor-pointer font-normal">
                  3–5 years
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="5-10" id="5-10" />
                <Label htmlFor="5-10" className="flex-1 cursor-pointer font-normal">
                  5–10 years
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="10+" id="10+" />
                <Label htmlFor="10+" className="flex-1 cursor-pointer font-normal">
                  10+ years
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 'tolerance' && (
          <div className="space-y-4">
            <Label className="text-base font-medium">
              How do you feel about market ups and downs?
            </Label>
            <RadioGroup value={riskTolerance} onValueChange={setRiskTolerance}>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="panic" id="panic" />
                <Label htmlFor="panic" className="flex-1 cursor-pointer font-normal">
                  I panic if market falls 10%
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="moderate" id="moderate" />
                <Label htmlFor="moderate" className="flex-1 cursor-pointer font-normal">
                  I can tolerate 10–20% fall
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high" className="flex-1 cursor-pointer font-normal">
                  I can tolerate 30%+ fall
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 'knowledge' && (
          <div className="space-y-4">
            <Label className="text-base font-medium">
              How would you rate your investment knowledge?
            </Label>
            <RadioGroup value={investmentKnowledge} onValueChange={setInvestmentKnowledge}>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="beginner" id="beginner" />
                <Label htmlFor="beginner" className="flex-1 cursor-pointer font-normal">
                  Beginner – Just starting out
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate" className="flex-1 cursor-pointer font-normal">
                  Intermediate – Some experience
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced" className="flex-1 cursor-pointer font-normal">
                  Advanced – Experienced investor
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        <div className="flex justify-end pt-4">
          {step !== 'knowledge' ? (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-fintech-blue hover:bg-fintech-blue/90"
            >
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed() || isPending}
              className="bg-fintech-green hover:bg-fintech-green/90"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Get My Plan <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </div>
  );
}
