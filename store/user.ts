import { ActionContext, ActionTree } from 'vuex';
import { LOGIN } from './mutations-types';
import { User, CredentialRequest, NewUser } from '~/app/types/user';
import UsersService from '~/services/users.services';

export const state = (): UserState => ({
  user: null,
});

export const getters = {
  getUser: (state: UserState) => state.user,
};

export const mutations = {
  [LOGIN.CHECK_IN]: (state: UserState, user: User) => (state.user = user),
  [LOGIN.CHECK_OUT]: (state: UserState) => { state.user = null; },
};
export const actions: ActionTree<UserState, UserState> = {
  logIn: ({ commit }: ActionContext<UserState, UserState>, credentias: CredentialRequest) => {
    UsersService.getUser(credentias)
      .then((user) => {
        commit(LOGIN.CHECK_IN, user);
      });
  },
  logOut: ({ commit }: any) => {
    commit(LOGIN.CHECK_OUT);
  },
  signUp: ({ commit }: any, newUser: NewUser) => {
    console.log(newUser);
    UsersService.addUser(newUser)
      .then((user) => {
        commit(LOGIN.CHECK_IN, user);
      });
  },
};

export interface UserState {
  user: User | null;
}
