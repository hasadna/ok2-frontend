import { ActionTree } from 'vuex';
import { UI } from './mutations-types';
import { ToasterEnum } from '~/app/enums/toaster.enum.ts';

export const state = (): UiState => ({
  toastrs: [],
});

export const getters = {
  getToastrs: (state: UiState) => state.toastrs
};

export const mutations = {
  [UI.SET_TOASTER]: (state: UiState, toastr: ToasterEnum) => (state.toastrs = [...new Set([...state.toastrs, toastr])]),
  [UI.REMOVE_TOASTER]: (state: UiState, toastrToRemove: string) => (state.toastrs = state.toastrs.filter(toastr => toastr !== toastrToRemove)),
};
export const actions: ActionTree<UiState, UiState> = {

  setToastr: ({ commit }: any, toastr: string) => {
    commit(UI.SET_TOASTER, toastr);
  },
  unSetToastr: ({ commit }: any, toastr: string) => {
    commit(UI.REMOVE_TOASTER, toastr);
  },

};

export interface UiState {
  toastrs: ToasterEnum[];
}
