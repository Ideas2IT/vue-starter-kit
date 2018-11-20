/* ============
 * Actions for the counter module
 * ============
 *
 * The actions that are available on the
 * counter module.
 */
import types from './mutation-types';
import UserProxy from '@/proxies/UserProxy';

const getUserList = ({commit}: any) => {
  new UserProxy().getUserList().then((response) => {
    commit(types.USER_LIST, response);
  }).catch((error) => {
    // tslint:disable-next-line:no-console
    console.log(error);
  });
};

export default {
  getUserList,
};
