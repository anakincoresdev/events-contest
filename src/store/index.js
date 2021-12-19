import { createStore } from 'vuex';
import axios from 'axios';

const cityTablesUrls = {
  moscow: 'https://script.googleusercontent.com/macros/echo?user_content_key=7rF9uGXCerK-Y6fmNWLcoaXcGJQuxEfOQSUKHX0sexy7sveRaJ2vK774mpJfbBHOMRioFzn0SdsiGG-56nZDWX0ApLNM1-Lvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN_BQqIj5WLIxAHNRRalQfaQu0tB879BQtaMdDr6TpiNL2wXn7HjYzX4waEJw5asYDnczjg0-cAR&lib=MsyTtMcNWutgtcjvKFtIlULZE41Zi1qzU',
  novosibirsk: 'https://script.googleusercontent.com/macros/echo?user_content_key=XvNa1alTO4GsglFqHKu76CQC_gjLa6QozLQZgnBaaHf0m_E8Dmu0dJNdfLsX-BnIqlsHZuUW0GGD9HeFhFsy1B6kzHbHUoGYm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMvUazu01Ehr8adTvutQbBC-0kpQtWbQk679SVguoZBjtqGgjMV0RQVIRUNF2SHgul2TUknZ5h_v&lib=M1cbNtxb_9Wd_JaVqVV6y5LZE41Zi1qzU',
  'saint-petersburg': 'https://script.googleusercontent.com/macros/echo?user_content_key=azi8otm7dN56lyVkbrq-ohVGU3dLf8fMjRWUmmKJtzwGZBW8WJBVZt5b_wg0Bp4rQQmTw_tmvp-mCrFY8v4issqwJDAcW4jgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLt-83guKLziUtZiWO50au0NoofqIRtTQcUlxA554JeWtEK6mT1zLGpVwxNay9BtR1aEcnd3ia07&lib=MkbbiEudjuQV5i_e5gUAF5rZE41Zi1qzU',
};

export default createStore({
  state: {
    members: [],
  },
  getters: {
    members(state) {
      return state.members;
    },
    membersTotal(state) {
      return state.members.length;
    },
  },
  mutations: {
    setMembers(state, { list }) {
      state.members.push(...list);
    },
  },
  actions: {
    getMembers({ commit }, { city }) {
      const cityUrlKey = cityTablesUrls[city] || cityTablesUrls.moscow;

      return axios.get(cityUrlKey)
        .then((response) => {
          commit('setMembers', { list: response.data.result });
        })
        .catch(() => 'Error');
    },
  },
  modules: {
  },
});
