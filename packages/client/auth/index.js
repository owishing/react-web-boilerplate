import { SECURITY_SERVICE, QA_SECURITY_SERVICE } from '../urls';

export class Auth {
  constructor({
    apikey,
    token,
    host = {
      qa: QA_SECURITY_SERVICE,
      production: SECURITY_SERVICE,
    },
    env = process.env.NODE_ENV === 'production' ? 'production' : 'qa',
  } = {}) {
    this.apikey = apikey;
    this.token = token;
    this.host = host[env];
  }

  async login(payload) {
    return fetch(`${this.host}/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
}
