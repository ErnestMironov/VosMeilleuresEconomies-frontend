<template>
  <div class="flex mt-4">
    <div
      :class="[
        'w-1/5 flex flex-col items-center justify-center p-5',
        expand ? 'bg-t_cyan' : 'bg-t_dark_cyan',
      ]"
    >
      <img src="../../../assets/images/electric-icon.png" alt="" />
      <span v-if="expand" class="uppercase text-white text-xl3 mt-4">
        electricity
      </span>
    </div>
    <div
      :class="[
        'flex-1 p-10 text-xl font-bold',
        expand ? 'bg-t_dark_cyan text-white' : 'bg-white text-t_dark_cyan',
      ]"
    >
      <div class="flex justify-between items-center">
        <span>Vos économies en Électricité</span>
        <span
          class="text-6xl cursor-pointer font-medium"
          @click="expand = !expand"
        >
          {{ expand ? "-" : "+" }}
        </span>
      </div>
      <div v-if="expand">
        <select
          id="currency"
          name="currency"
          class="bg-white focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
        >
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpandItem",
  data() {
    return {
      expand: false,
    };
  },
};
</script>
