import Vue from 'vue';

class BaseProxy {

  public endpoint: string;
  public parameters: any;

  /**
   * The constructor of the BaseProxy.
   *
   * @param {string} endpoint   The endpoint being used.
   * @param {Object} parameters The parameters for the request.
   */

  constructor(endpoint: string, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }

  /**
   * The method used to perform an AJAX-request.
   *
   * @param {string}      requestType The request type.
   * @param {string}      url         The URL for the request.
   * @param {Object|null} data        The data to be send with the request.
   *
   * @returns {Promise} The result in a promise.
   */
  public submit(requestType: string, url: string, data = null) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http[requestType](url + this.getParameterString(), data)
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((response: any) => {
          if (response) {
            reject(response.data);
          } else {
            reject();
          }
        });
    });
  }

  /**
   * Method used to transform a parameters object to a parameters string.
   *
   * @returns {string} The parameter string.
   */
  public getParameterString() {
    const keys = Object.keys(this.parameters);

    const parameterStrings = keys
      .filter((key) => !!this.parameters[key])
      .map((key) => `${key}=${this.parameters[key]}`);

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`;
  }
}

export default BaseProxy;
