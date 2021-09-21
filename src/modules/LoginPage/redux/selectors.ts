import { useAppSelector } from '../../../store';

export const useAuth = () => useAppSelector(state => state.authentication);