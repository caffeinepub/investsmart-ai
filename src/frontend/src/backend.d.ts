import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface InvestmentRecommendation {
    stocks: bigint;
    cash: bigint;
    description: string;
    bonds: bigint;
}
export enum Classification {
    conservative = "conservative",
    aggressive = "aggressive",
    moderate = "moderate"
}
export interface backendInterface {
    classifyProfile(age: bigint, riskTolerance: bigint, investmentHorizon: bigint): Promise<Classification>;
    generateRecommendation(classification: Classification): Promise<InvestmentRecommendation>;
}
