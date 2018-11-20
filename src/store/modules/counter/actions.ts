/* ============
 * Actions for the counter module
 * ============
 *
 * The actions that are available on the
 * counter module.
 */
import types from './mutation-types';

const increment = ({ commit }: any) => {
  commit(types.INCREMENT);
};

const decrement = ({ commit }: any) => {
  commit(types.DECREMENT);
};

const reset = ({ commit }: any) => {
  commit(types.RESET);
};

export default {
  increment,
  decrement,
  reset,
};
