import Text "mo:core/Text";

actor {
  type Classification = {
    #conservative;
    #moderate;
    #aggressive;
  };

  type InvestmentRecommendation = {
    stocks : Nat;
    bonds : Nat;
    cash : Nat;
    description : Text;
  };

  public shared ({ caller }) func classifyProfile(age : Nat, riskTolerance : Nat, investmentHorizon : Nat) : async Classification {
    if (riskTolerance <= 3 and age >= 60) {
      #conservative;
    } else if (riskTolerance <= 7 and investmentHorizon < 10) {
      #moderate;
    } else {
      #aggressive;
    };
  };

  public shared ({ caller }) func generateRecommendation(classification : Classification) : async InvestmentRecommendation {
    {
      stocks = switch classification {
        case (#conservative) { 20 };
        case (#moderate) { 50 };
        case (#aggressive) { 80 };
      };
      bonds = switch classification {
        case (#conservative) { 60 };
        case (#moderate) { 40 };
        case (#aggressive) { 15 };
      };
      cash = switch classification {
        case (#conservative) { 20 };
        case (#moderate) { 10 };
        case (#aggressive) { 5 };
      };
      description = switch classification {
        case (#conservative) { "Low risk, stable returns" };
        case (#moderate) { "Balanced approach" };
        case (#aggressive) { "High risk, high reward" };
      };
    };
  };
};
