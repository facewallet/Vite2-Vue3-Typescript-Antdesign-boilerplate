<template>
  <component :is="layout_name" />
  <router-link to="/about"> to about </router-link>
  <p><router-link to="/">back index</router-link></p>
</template>

<script lang="ts">
import "_LESS_/reset.less";
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from "vue-router";
import layoutDefault from '_LAYOUT_/default.vue';
import layoutAdmin from '_LAYOUT_/admin.vue';

export default defineComponent({
  name: 'App',
  components: { layoutDefault, layoutAdmin },
  setup() {
    const route = useRoute();
    const layout_name = ref(route.meta.layout);

    watch(() => route.meta, meta => {
      layout_name.value = `layout-${meta.layout}`;
    });

    return {
      layout_name
    };
  }
});
</script>
