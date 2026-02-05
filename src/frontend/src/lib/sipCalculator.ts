export function calculateSIP(
  monthlyInvestment: number,
  annualReturnRate: number,
  years: number
): {
  totalInvested: number;
  estimatedReturns: number;
  totalValue: number;
} {
  const monthlyRate = annualReturnRate / 12 / 100;
  const months = years * 12;

  // Future Value of SIP formula: FV = P × [(1 + r)^n - 1] / r × (1 + r)
  const futureValue =
    monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

  const totalInvested = monthlyInvestment * months;
  const estimatedReturns = futureValue - totalInvested;

  return {
    totalInvested: Math.round(totalInvested),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(futureValue),
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
