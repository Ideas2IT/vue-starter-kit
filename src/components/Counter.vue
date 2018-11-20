<template>
  <div>
    <div class="count mb-5">Count: {{ count }}</div>
    <b-button @click="increment" variant="primary" class="ml-1">
      Increment
    </b-button>
    <b-button @click="decrement" variant="danger" class="ml-1">
      Decrement
    </b-button>
    <b-button @click="reset" variant="warning" class="ml-1">
      Reset
    </b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

@Component
export default class Counter extends Vue {
  @Action private increment: any;
  @Action private decrement: any;
  @Action private reset: any;
  @Getter private count!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.count {
  font-size: 20px;
}
</style>
