import { User } from './../store/modules/user/index';

class UsersService {
  public async  getUser(username: string): Promise<User> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${1}`);
    const json = await res.json();
    return {
      ...json,
      username
    };
  }

}

export default new UsersService();
