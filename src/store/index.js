import Vuex from 'vuex';

let store = null;

export default function Store(Vue){
  if (!store){
    Vue.use(Vuex);
    store = new Vuex.Store({
      state: {
        count: 0,
        user: {}
      },
      mutations: {
        increment (state) {
          state.count++
        },
        balance (state) {

        },
        user (state) {
          state.user
        }
      }
    });
  }
  return {
    store
  };
};
