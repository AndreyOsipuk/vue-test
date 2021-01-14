import store from "@/store";
import { State, Realty, Rent, User } from "@/types";
import { MutationTree } from "vuex";

export const mutations: MutationTree<State> = {
  ADD_REALTY(state: State, realty: Realty) {
    state.realty.push(realty);
  },
  EDIT_REALTY(state: State, { oldRealty, newRealty }: Record<string, Realty>) {
    state.realty = state.realty.map(item => {
      if (item === oldRealty) {
        return newRealty
      } else {
        return item;
      }
    });
  },
  DELETE_REALTY(state: State, realty: Realty) {
    state.realty.splice(state.realty.indexOf(realty), 1);
  },
  ADD_USER(state: State, user: User) {
    state.users.push(user);
  },
  EDIT_USER(state: State, { oldUser, newUser }: Record<string, User>) {
    state.users = state.users.map(item => {
      if (item === oldUser) {
        return newUser
      } else {
        return item;
      }
    });
  },
  DELETE_USER(state: State, user: Realty) {
    state.users.splice(state.users.indexOf(user), 1);
  },

  ADD_RENT(state: State, { address, rent }: Record<string, any>) {
    state.realty.map(item => {
      if (item.address === address) {
        item.rent = rent;
        return item;
      }
    });
  },
  EDIT_RENT(state: State, { oldRent, newRent }: Record<string, Rent>) {
    state.realty = state.realty.map(item => {
      if (item.rent === oldRent) {
        item.rent = newRent;
        return item;
      } else {
        return item;
      }
    });
  },
  DELETE_RENT(state: State, rent: Rent) {
    state.realty = state.realty.map((item, idx) => {
      if (item.rent === rent) {
        delete item.rent
        return item
      } else {
        return item
      }
    })
  }
};
