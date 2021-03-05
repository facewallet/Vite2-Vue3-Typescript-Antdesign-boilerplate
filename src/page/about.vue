<template>
  <div>about page! {{ count }}</div>
  <a-button type="primary" @click="addCount"> state.count++ </a-button>
</template>

<script lang="ts">
import { computed, toRefs } from "vue";
import { useStore } from "vuex";
// import config from "_TYPE_/vuexConfig";

export default {
  setup() {
    const store = useStore();
    const config = toRefs(store.state.config);

    return {
      count: computed(() => config.count.value),
      addCount: () => store.commit('config/addCount')
    };
  },
  mounted() {
    this.$api.game(2).then(res => {
      console.log(res.data);
    });
  }
};
</script>
