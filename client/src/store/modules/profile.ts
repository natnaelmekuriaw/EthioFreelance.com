import { createProfile } from '../../services/users';

export const actions = {
  createProfile({ commit }, credentials) {
    return createProfile(credentials).then(({ data }) => {
      console.log(commit);
      console.log(data);
    });
  },
};
