import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Screenshots } from '../types/entities';

const useScreenshots = (game_pk: string) => {
  const apiClient = new APIClient<Screenshots>(`/games/${game_pk}/screenshots`);
  return useQuery({
    queryKey: ['screenshots', game_pk],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
