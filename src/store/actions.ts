import store from "@/store";
import { State, Realty, Rent, User } from "@/types";
import { ActionTree } from "vuex";

export const actions: ActionTree<State, State> = {
  async addRealty(vuex, realty: Realty) {
    vuex.commit('ADD_REALTY', realty);
  },
  async editRealty(vuex, val: Record<string, Realty>) {
    vuex.commit('EDIT_REALTY', val);
  },
  async deleteRealty(vuex, realty: Realty) {
    vuex.commit('DELETE_REALTY', realty);
  },
  async addUser(vuex, user: User) {
    vuex.commit('ADD_USER', user);
  },
  async editUser(vuex, val: Record<string, User>) {
    vuex.commit('EDIT_USER', val);
  },
  async deleteUser(vuex, user: User) {
    vuex.commit('DELETE_USER', user);
  },
  async addRent(vuex, rent: Rent) {
    console.log(rent)
    vuex.commit('ADD_RENT', rent);
  },
  async editRent(vuex, val: Record<string, Rent>) {
    vuex.commit('EDIT_RENT', val);
  },
  async deleteRent(vuex, rent: Rent) {
    vuex.commit('DELETE_RENT', rent);
  },
};
