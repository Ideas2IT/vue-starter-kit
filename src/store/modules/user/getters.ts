import {GetterTree} from 'vuex';
import { State } from './state';

export default {
  userList(state: State) {
    return state.userList;
  },
} as GetterTree<State, any>;
