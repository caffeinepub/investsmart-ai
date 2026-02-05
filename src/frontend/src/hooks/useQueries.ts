import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Classification } from '@/backend';

export function useClassifyProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      age,
      riskTolerance,
      investmentHorizon,
    }: {
      age: bigint;
      riskTolerance: bigint;
      investmentHorizon: bigint;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.classifyProfile(age, riskTolerance, investmentHorizon);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}

export function useGenerateRecommendation(classification: Classification) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['recommendation', classification],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.generateRecommendation(classification);
    },
    enabled: !!actor && !isFetching && !!classification,
  });
}
