import * as type from '../types.js';

export const getUsers = () => {
  return {
    type: type.GET_USERS_REQUESTED,
  };
};
