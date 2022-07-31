import BaseClient from '@/api/BaseClient';

export default class {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async memberJoin(userInfo) {
    const response = await this.client.instance.post('/join', userInfo);

    return response.data;
  }

  async login(username, password) {
    const response = await this.client.instance.post(
      '/login',
      {
        grant_type: 'password',
        username,
        password,
      },
      {
        headers: {
          authorization: `Basic ${this.client.getBasicAuth()}`,
        },
      },
    );

    if (response.status === 200) {
      return response.data.access_token;
    }
    return false;
  }
}
