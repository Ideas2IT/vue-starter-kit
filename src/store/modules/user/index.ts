/* ============
 * Patient Module
 * ============
 */
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import {State} from './state';

export const user = {
  state: new State(),
  actions,
  getters,
  mutations,
};
