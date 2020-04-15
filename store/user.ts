import { ActionContext, ActionTree } from 'vuex';
import { LOGIN } from './mutations-types';
import { User, CredentialRequest, NewUser } from '~/app/types/user';
import UsersService from '~/services/users.services';
import { Ls, isPleaseRegister, userLocalStorage } from '~/app/utils/localStorage.ts';

export const state = (): UserState => ({
  user: Ls.get(userLocalStorage) || null,
});

export const getters = {
  getUser: (state: UserState) => state.user,
};

export const mutations = {
  [LOGIN.CHECK_IN]: (state: UserState, user: User) => {
    state.user = user;
    Ls.set(userLocalStorage, user);
  },
  [LOGIN.CHECK_OUT]: (state: UserState) => {
    Ls.remove(isPleaseRegister);
    Ls.remove(userLocalStorage);
    state.user = null;
    location.reload();
  },
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
    UsersService.addUser(newUser)
      .then((user) => {
        commit(LOGIN.CHECK_IN, user);
      });
  },
};

export interface UserState {
  user: User | null;
}
