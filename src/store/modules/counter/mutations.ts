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
  [types.INCREMENT](state: State) {
    state.count += 1;
  },
  [types.DECREMENT](state: State) {
    state.count -= 1;
  },
  [types.RESET](state: State) {
    state.count = 0;
  },
} as MutationTree<State>;
