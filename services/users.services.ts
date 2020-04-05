import axios from 'axios';
import { User, CredentialRequest, NewUser } from '~/app/types/user';

class UsersService {
  private baseUrl = '';

  public async getUser(credentias: CredentialRequest): Promise<User> {
    const { data } = await axios.post<Promise<User>>(`${this.baseUrl}/login`, credentias);
    return {
      ...data,
    };
  }

  public async addUser(newUser: NewUser): Promise<User> {
    const { data } = await axios.post<Promise<User>>(`${this.baseUrl}/users`, newUser);
    return {
      ...data,
    };
  }
}

export default new UsersService();
