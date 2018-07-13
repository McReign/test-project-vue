<template>
    <div>
      <el-row>
        <el-tabs v-model="activeName" :stretch="true">
          <el-tab-pane label="Расходы" name="cost">
            <template v-if="getFilteredCards('costs').length !== 0">
              <card v-for="(item, index) in getFilteredCards('costs')" v-bind="item" :key="index"></card>
            </template>
            <template v-else>
              <div class="empty-text">Данных нет. Вы можете их добавить!</div>
            </template>
          </el-tab-pane>
          <el-tab-pane label="Зачисления" name="admission">
            <template v-if="getFilteredCards('admissions').length !== 0">
              <card v-for="(item, index) in getFilteredCards('admissions')" v-bind="item" :key="index"></card>
            </template>
            <template v-else>
              <div class="empty-text">Данных нет. Вы можете их добавить!</div>
            </template>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'CardsList',
  data () {
    return {
      activeName: 'cost'
    }
  },
  components: {
    Card
  },
  methods: {
    getFilteredCards: function (type) {
      return this.$store.getters['usersState/getCardsByType'](
        {login: this.$HotUtils.parseJwt(this.$store.state.currentUserState.token).login, type: type}
      )
    }
  }
}
</script>

<style scoped>
.empty-text {
  display: flex;
  justify-content: center;
  padding-top: 16px;
  font-size: 18px;
}
</style>
