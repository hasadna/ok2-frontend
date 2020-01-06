import { User, CredentialRequest, NewUser } from './../store/modules/user/index';
import axios from 'axios';

class UsersService {
  private baseUrl = `https://jsonplaceholder.typicode.com/`;

  public async getUser(credentias: CredentialRequest): Promise<User> {
    const { data } = await axios.post<Promise<User>>(`${this.baseUrl}/users`, credentias);
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
