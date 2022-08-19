import { api } from '../api/api';
import { User } from '../user/User';
import { useUser } from '../user/UserContext';

export function useSignIn() {
  const { setUser } = useUser();

  return {
    async signIn(credential:string) {
      const res = await api.post('/sign-in', credential);
      const user:User = res.data;
      setUser(user);
    },
  };
}
