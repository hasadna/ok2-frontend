import { User, CredentialRequest, NewUser } from './../store/modules/user/index';

class UsersService {
  private baseUrl = `https://jsonplaceholder.typicode.com/users`;
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  public async getUser(credentias: CredentialRequest): Promise<User> {
    const res = await fetch(this.baseUrl, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(credentias)
    });
    const json = await res.json();
    return {
      ...json,
      email: credentias.email
    };
  }
  public async addUser(newUser: NewUser): Promise<User> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(newUser)
    });
    const json = await res.json();
    return {
      ...json,
    };
  }
}

export default new UsersService();
