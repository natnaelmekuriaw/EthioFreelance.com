import { deposit } from '../../services/payments';

export const actions = {
  deposite({ commit }, credentials) {
    return deposit(credentials).then(({ data }) => {
      console.log(data);
      console.log(commit);
    });
  },
};
