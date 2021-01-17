import * as type from '../types.js';

export const getUsers = (users) => {
  return {
    type: type.GET_USERS,
    payload: users,
  };
};
