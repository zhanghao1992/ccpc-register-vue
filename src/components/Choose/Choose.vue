<template>
  <view-box>
    <h1 class="title">查询参赛选手位置</h1>
    <div class="chosoe-box">
      <group title="参赛时间">
        <selector title="" :options="list" v-model="value1"></selector>
      </group>

      <group title="参赛地点">
        <selector title="" :options="list" v-model="value2"></selector>
      </group>

      <x-button class="btn" type="primary">搜索</x-button>
    </div>
  </view-box>
</template>


<script>
import { ViewBox, Selector, Group, XButton } from 'vux'

export default {
  components: {
    ViewBox,
    Selector,
    Group,
    XButton
  },
  created () {
    this._getMatchApplySKU()
  },
  methods: {
    onChange (val) {
      console.log('val change', val)
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    },
    _getMatchApplySKU () {
      this.$http('/api/get_skider_list', {}).then(json => {
        if (json.code === 0) {
          console.log('http success')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  data () {
    return {
      value1: 0,
      value2: 0,
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}]
    }
  }
}
</script>

<style scoped lang="less">
@r: 20rem;
.title {
  text-align: center;
  font-size: 2rem;
  line-height: 12rem;
  color: #1AAD19;
}
.chosoe-box {
  margin-top: 3rem;
  .btn {
    margin-top: 7rem;
  }
}
</style>
