import { useState } from 'react';
import RiskProfilingChatFlow from '@/components/chatbot/RiskProfilingChatFlow';
import ChatbotResults from '@/components/chatbot/ChatbotResults';
import { Card } from '@/components/ui/card';
import type { Classification } from '@/backend';

export interface RiskProfile {
  age: number;
  monthlyIncome: number;
  investmentGoal: string;
  investmentHorizon: string;
  riskTolerance: string;
  investmentKnowledge: string;
}

export default function Chatbot() {
  const [profile, setProfile] = useState<RiskProfile | null>(null);
  const [classification, setClassification] = useState<Classification | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleProfileComplete = (completedProfile: RiskProfile, userClassification: Classification) => {
    setProfile(completedProfile);
    setClassification(userClassification);
    setShowResults(true);
  };

  const handleStartOver = () => {
    setProfile(null);
    setClassification(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-fintech-blue/5 to-fintech-green/5 px-4 py-8 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="overflow-hidden shadow-lg">
          {!showResults ? (
            <RiskProfilingChatFlow onComplete={handleProfileComplete} />
          ) : (
            <ChatbotResults
              profile={profile!}
              classification={classification!}
              onStartOver={handleStartOver}
            />
          )}
        </Card>
      </div>
    </div>
  );
}
