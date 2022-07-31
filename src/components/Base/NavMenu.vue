<template>
  <div id="NavMenuFooter">
    <div id="footerBar">
      <ul
        class="
          fixed
          bottom-0
          left-0
          w-full
          text-center
          border-t
          py-2
          z-50
          bg-white
        "
      >
        <li>
          <router-link to="/product">
            <i class="fas fa-home" />
            <span>홈</span>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <i class="fas fa-shopping-cart" />
            <span>장바구니</span>
          </router-link>
        </li>
        <li>
          <i class="fas fa-cog" />
          <span>설정</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenuFooter',
};
</script>

<style>
#footerBar ul {
  @apply w-full border-t-2 border-gray-200 h-20 flex content-between justify-around bg-white;
}

#footerBar li {
  @apply focus:text-green-600 hover:text-green-600 justify-center inline-block
  text-center pt-2 pb-1 space-y-2;
}

#footerBar ul li span {
  @apply block;
}
</style>
