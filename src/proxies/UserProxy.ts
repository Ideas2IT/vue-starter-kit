import Proxy from './Proxy';

class UserProxy extends Proxy {
  /**
   * The constructor for the UserProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('/result', parameters);
  }

  // Get user list from api.json using json-server
  public getUserList() {
    return this.submit('get', `${this.endpoint}/`);
  }

}

export default UserProxy;
