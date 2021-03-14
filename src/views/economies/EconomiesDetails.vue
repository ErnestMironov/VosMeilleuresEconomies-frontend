<template>
  <div>
    <h1 class="text-t_dark_cyan text-3xl font-bold">
      Je choisis mes domaines d’économies
    </h1>
    <p class="text-t_dark_cyan text-xl">Un conseiller va vous accompagner.</p>
    <div class="mt-10">
      <expand-item
        v-for="item in [6, 1, 2, 3, 4, 5, 7]"
        :key="item"
      ></expand-item>
    </div>
  </div>
</template>

<script>
import ExpandItem from "./components/ExpandItem";

export default {
  name: "economiesDetails",
  components: {
    ExpandItem,
  },
};
</script>
