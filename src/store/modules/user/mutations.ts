/* ============
 * Mutations for the counter module
 * ============
 *
 * The mutations that are available on the
 * counter module.
 */

import {MutationTree} from 'vuex';
import { State } from './state';
import types from './mutation-types';


export default {
  [types.USER_LIST](state: State, result) {
    state.userList = result;
  },
} as MutationTree<State>;
