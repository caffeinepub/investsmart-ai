export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateSIPSuggestion(
  monthlyIncome: number,
  investmentHorizon: string
): { amount: number; explanation: string } {
  // Suggest 10-20% of monthly income based on horizon
  const percentage = investmentHorizon === '10+' ? 0.2 : investmentHorizon === '5-10' ? 0.15 : 0.1;
  const suggestedAmount = Math.round((monthlyIncome * percentage) / 500) * 500; // Round to nearest 500

  const explanations: Record<string, string> = {
    '1-3': 'For short-term goals, start with 10% of your income. You can increase this as you get comfortable.',
    '3-5': 'For medium-term goals, aim for 15% of your income to build a solid corpus.',
    '5-10': 'For long-term goals, invest 15-20% of your income to maximize compounding benefits.',
    '10+': 'For very long-term goals, invest 20% or more to build significant wealth through compounding.',
  };

  return {
    amount: Math.max(500, suggestedAmount), // Minimum 500
    explanation: explanations[investmentHorizon] || explanations['5-10'],
  };
}
