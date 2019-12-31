import { User, CredentialRequest } from './../store/modules/user/index';

class UsersService {
  public async getUser(credentias: CredentialRequest): Promise<User> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${1}`);
    const json = await res.json();
    return {
      ...json,
      email: credentias.email
    };
  }
}

export default new UsersService();
