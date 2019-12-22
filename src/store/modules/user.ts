
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    LOGIN: ({ commit }, payload) => {
      console.log(commit);

      fetch(`https://jsonplaceholder.typicode.com/users/${payload.usernmae}`)
        .then(response => response.json())
        .then(json => json)
    }
  }
};


export interface User {
  name: string;
}
