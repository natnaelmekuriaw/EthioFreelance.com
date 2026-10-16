export const state = {
  minMax: false,
  id: 1,
};

export const mutations = {
  min(state) {
    state.minMax = !state.minMax;
  },
};
