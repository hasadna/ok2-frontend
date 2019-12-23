
class UsersService {
  public getUser(username: string) {
    return new Promise((resolve, reject) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${1}`)
        .then(res => res.json())
        .then(res => resolve({ ...res, username }))
        .catch(error => reject(error));
    });
  }

}

export default new UsersService();
