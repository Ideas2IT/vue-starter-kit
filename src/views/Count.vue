<template>
  <div>
    <VCounter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VCounter from '@/components/Counter.vue';

@Component({
  components: {
    VCounter,
  },
})
export default class Count extends Vue {}
</script>
