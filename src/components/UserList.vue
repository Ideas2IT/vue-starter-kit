<template>
  <div class="container-fluid">
    <div class="row mb-4 mt-4">
      <b-button @click="getUserList" variant="primary" class="ml-1">
        Get User List
      </b-button>
    </div>
    <div class="row" v-if="userList">
      <div class="col-md-3" v-for="user in userList" :key="user.id">
        <b-card :title="user.first_name" tag="article" class="mb-2">
          <p class="card-text">
            <b>{{user.email}}</b>
            {{user.gender}}
          </p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

@Component
export default class UserList extends Vue {
  @Action private getUserList: any;
  @Getter private userList!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.count {
  font-size: 20px;
}
</style>
