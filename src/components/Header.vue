<template>
  <div class="header">
    <span @click="goLogin" class="go-login-btn">Контроль расходов</span>
    <div class="profile">
      <div class="username" v-if="showProfile">{{getUsername}}</div>
      <div class="role" v-if="showProfile">{{getRole}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  methods: {
    goLogin: function () {
      this.$router.push('/')
      this.$store.commit('currentUserState/login', {user: ''})
    }
  },
  computed: {
    getUsername: function () {
      if (this.showProfile) {
        return this.$HotUtils.parseJwt(this.$store.state.currentUserState.token).name
      }
    },
    getRole: function () {
      if (this.showProfile) {
        return this.$HotUtils.parseJwt(this.$store.state.currentUserState.token).role
      }
    },
    showProfile: function () {
      return !!this.$store.state.currentUserState.token
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: rgba(0,0,0,0.6);
    height: 60px;
    width: 100%;
    box-shadow: 0 2px 8px #f0f1f2;
    margin-bottom: 40px;
  }

  .go-login-btn {
    cursor: pointer;
  }

  .profile {
    position: absolute;
    right: 40px;
    font-size: 18px;
    cursor: pointer;
  }

  .role {
    font-size: 14px;
    color: rgba(0,0,0,0.4);
  }
</style>
