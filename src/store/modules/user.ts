
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    LOGIN: (_: string, payload: { usernmae: string; password: string }) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${payload.usernmae}`)
        .then(response => response.json())
        .then(json => json);
    }
  }
};

export interface User {
  name: string;
}
