import Vue from 'vue'
import Vuex from 'vuex'

import { router } from '../router'

Vue.use(Vuex)

const user = JSON.parse(localStorage.getItem('user'));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null }

const actions = {
  async login({ commit }, { email, password }) {
    commit('loginRequest', { email })

    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      };

      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://vevericka-auth-service.herokuapp.com/auth/login`, requestOptions);
      const data = await response.json();

      localStorage.setItem('user', JSON.stringify(data.user))
      await commit('loginSuccess', data.user);
      router.push('/')
    } catch (err) {
      commit('loginFailure', err);
    }
  },

  logout({ commit }) {
    localStorage.removeItem('user');
    commit('logout');
    router.push('/login')
  }
}

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  // eslint-disable-next-line no-unused-vars
  registerRequest(state, user) {
    state.status = { registering: true };
  },
  // eslint-disable-next-line no-unused-vars
  registerSuccess(state, user) {
    state.status = {};
  },
  // eslint-disable-next-line no-unused-vars
  registerFailure(state, error) {
    state.status = {};
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
