import BaseClient from '@/api/BaseClient';

export default class {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async getCartList() {
    const path = '/cart';
    const response = await this.client.instance.get(path);

    return response.data;
  }

  async addCart(product) {
    const path = '/cart';
    const response = await this.client.instance.post(path, product);

    return response.data;
  }

  async confirmOrder() {
    const path = 'order';
    const response = await this.client.instance.post(path);

    return response.data;
  }
}
