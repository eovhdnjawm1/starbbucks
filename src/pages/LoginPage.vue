<template>
  <div
    id="main"
    class="flex flex-col h-fullsize gap-4 justify-center items-center"
  >
    <label for="userId">
      <input
        v-model="username"
        type="text"
        placeholder="아이디"
        class="
          w-60
          border-solid border-2 border-gray-300
          pl-2
          pt-2
          pb-2
          rounded-lg
          focus:outline-blue-400
        "
      />
    </label>
    <label for="userPw">
      <input
        v-model="password"
        type="password"
        placeholder="비밀번호"
        class="
          w-60
          border-solid border-2 border-gray-300
          pl-2
          pt-2
          pb-2
          rounded-lg
          focus:outline-blue-400
        "
      />
    </label>
    <button id="submit-btn" @click="login">로그인</button>
    <div class="w-60 text-center">아이디 :{{ username }}</div>
    <div class="w-60 text-center">비밀번호 :{{ password }}</div>
  </div>
</template>

<script>
import UserApi from '@/api/User';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const userApi = new UserApi(this.apiClient);

      const response = await userApi.login(this.username, this.password);

      if (response) {
        await this.$router.push('/product');
      } else {
        alert('아이디와 비밀번호가 맞지 않습니다.');
      }
    },
  },
};
</script>

<style>
#submit-btn {
  @apply bg-green-500 text-white rounded-3xl w-1/6 h-12 mt-8;
  @apply drop-shadow-md hover:drop-shadow-lg active:drop-shadow-none mx-auto;
}
</style>
