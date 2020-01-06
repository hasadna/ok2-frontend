import UsersService from '../../../services/users.services';
import { LOGIN } from '../../mutations-types';
import { ActionContext, ActionTree } from 'vuex';

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
const actions: ActionTree<UserState, UserState> = {
  logIn: ({ commit }: ActionContext<UserState, UserState>, credentias: CredentialRequest) => {
    UsersService.getUser(credentias)
      .then(user => {
        commit(LOGIN.CHECK_IN, user);
      });
  },
  logOut: ({ commit }: any) => {
    commit(LOGIN.CHECK_OUT);
  },
  signUp: ({ commit }: any, newUser: NewUser) => {
    console.log(newUser);
    UsersService.addUser(newUser)
      .then(user => {
        commit(LOGIN.CHECK_IN, user);
      });

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
  // role:string;
}
export interface UserState {
  user: User | null;
}

export interface CredentialRequest {
  email: string;
  password: string;
}

export interface NewUser {
  privateName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
}
