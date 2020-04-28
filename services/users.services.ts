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
    const serilizeObj = {
      ...newUser,
      email: newUser.email,
      first_name: newUser.privateName,
      last_name: newUser.lastName,
      password: newUser.password,
      confirm_password: newUser.confirmPassword,
    };
    const { data } = await axios.post<Promise<User>>(`${this.baseUrl}/register`, serilizeObj);
    return {
      ...data,
    };
  }
}

export default new UsersService();
