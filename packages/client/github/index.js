import { stringify } from 'query-string';
import { GITHUB_SERVICE, QA_GITHUB_SERVICE } from '../urls';

export class Github {
  constructor({
    apikey,
    token,
    host = {
      qa: QA_GITHUB_SERVICE,
      production: GITHUB_SERVICE,
    },
    env = process.env.NODE_ENV === 'production' ? 'production' : 'qa',
  } = {}) {
    this.apikey = apikey;
    this.token = token;
    this.host = host[env];
  }

  async fetchUserInfo({ query = {} }) {
    return fetch(`${this.host}/eefd?${stringify(query)}`, {
      method: 'GET',
    });
  }
}
