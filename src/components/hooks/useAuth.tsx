import { useAppSelector } from "./useRedux";

export const useAuth = () => {
    const token = localStorage.getItem('token');
    const refresh = localStorage.getItem('refresh');
    const { user } = useAppSelector(state => state.user);
    return (!!user.id) && (!!token) && (!!refresh); 
}