<template>
  <div>
    <VUserList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VUserList from '@/components/UserList.vue';

@Component({
  components: {
    VUserList,
  },
})
export default class User extends Vue {}
</script>
