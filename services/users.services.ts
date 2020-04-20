import axios from 'axios';
import { User, CredentialRequest, NewUser } from '~/app/types/user';

class UsersService {
  private baseUrl = 'api';
  private headers = { headers: { 'Content-Type': 'application/json' } };

  public async getUser(credentias: CredentialRequest): Promise<User> {
    const { data } = await axios.post<Promise<User>>(`${this.baseUrl}/login`, credentias, this.headers);
    return {
      ...data,
    };
  }

  public async addUser(newUser: NewUser): Promise<User> {
    const { data } = await axios.post<Promise<User>>(`${this.baseUrl}/register`, newUser);
    return {
      ...data,
    };
  }
}

export default new UsersService();
