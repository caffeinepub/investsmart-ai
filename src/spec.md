# Specification

## Summary
**Goal:** Build the InvestSmart AI fintech website with a mobile-friendly landing page, a step-by-step risk-profiling chatbot that returns rule-based investment recommendations, and supporting educational/calculator/info pages.

**Planned changes:**
- Create a mobile-friendly homepage with fintech styling (blue/white/green), an explanation of risk profiling, a primary CTA button labeled “Get My Investment Plan”, and sections for Why invest, Power of compounding, Risk vs return, and Diversification.
- Implement a chatbot UI that collects: age, monthly income, investment goal, investment horizon, risk tolerance, and investment knowledge; prevent results until all answers are provided.
- Add a single Motoko actor backend method to classify the completed profile as exactly one of: Conservative, Moderate, Aggressive.
- Add a single Motoko actor backend method to return structured investment recommendations using the provided allocation rules (labels + percentages + examples/guidance suitable for charting).
- Build a chatbot results screen that shows: risk profile result, asset allocation pie chart (with fallback), a monthly SIP suggestion, exactly 3 model portfolios, and a Do’s and Don’ts list (using backend response).
- Add supporting pages reachable via navigation: Learn Investing (blog-style beginner content), SIP Calculator (inputs + validation + projection output), About Us, and Disclaimer including “Not SEBI advice” and educational-only wording.
- Add generated brand assets as static files under `frontend/public/assets/generated` and use them in the header (logo) and homepage hero (illustration).

**User-visible outcome:** Users can browse a clean InvestSmart AI landing site, complete a conversational risk-profiling chatbot to receive a conservative/moderate/aggressive profile with a visual allocation and suggested next steps, and access Learn Investing content, a SIP calculator, About Us, and a clear educational disclaimer.
