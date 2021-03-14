<template>
  <header class="flex justify-between items-stretch">
    <div class="w-1/5 mr-4"></div>
    <div class="py-6 flex justify-between items-center max-w-6xl flex-1">
      <img src="../../assets/images/economies-logo.png" alt="" />
      <div class="flex items-center">
        <a href="javascript:;" class="mr-12 font-semibold"> MON GUIDE </a>
        <a href="javascript:;" class="mr-12 font-semibold"> F.A.Q. </a>
        <button class="bg-t_cyan px-4 py-3 text-white font-bold text-xl">
          J’EN PROFITE
        </button>
      </div>
    </div>
    <div class="ml-4 w-1/5 min-w-max flex items-center justify-end">
      <img src="../../assets/images/user.png" alt="" class="mr-3" />
      <img src="../../assets/images/angle_down.svg" alt="" />
      <a
        href="tel:0810-550-560"
        class="bg-red-600 px-8 py-6 self-stretch ml-6 flex items-center"
      >
        <img src="../../assets/images/phone.png" class="w-auto mr-3" alt="" />
        <div class="text-l text-white">
          <span>APPEL GRATUIT</span> <br />
          <span class="text-xl font-bold">0810 550 560</span>
        </div>
      </a>
    </div>
  </header>
</template>
<script>
export default {
  name: "EconomiesHeader",
};
</script>
