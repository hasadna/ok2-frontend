import UsersService from '../../../services/users.services';
import { LOGIN } from '../../mutations-types';

const state: UserState = {
  user: null
};
const getters = {
  getUser: (state: UserState) => state.user

};
const mutations = {
  [LOGIN.CHECK_IN]: (state: UserState, user: User) => (state.user = user),
  [LOGIN.CHECK_OUT]: (state: UserState) => { state.user = null; },
};
const actions = {
  logIn: ({ commit }: any, { username }: { username: string; password: string }) => {

    UsersService.getUser(username)
      .then(res => {
        commit(LOGIN.CHECK_IN, res);
      });
  },
  logOut: ({ commit }: any) => {
    commit(LOGIN.CHECK_OUT);

  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
}
export interface UserState {
  user: User | null;
}
