import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFn: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const apiMutation = useMutation(mutationFn);

  const mutate = (payload: any) => {
    setIsLoading(true);
    return apiMutation(payload)
      .finally(() => setIsLoading(false))
      .then((results) => results)
      .catch((error) => {
        throw error;
      });
  };

  return { mutate, isLoading };
};
