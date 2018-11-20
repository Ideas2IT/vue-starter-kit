import {GetterTree} from 'vuex';
import { State } from './state';

export default {
  count(state: State) {
      return state.count;
  },
} as GetterTree<State, any>;
