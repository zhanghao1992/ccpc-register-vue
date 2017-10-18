<template>
  <view-box>
    <h1 class="title">查询参赛选手位置</h1>
    <div class="chosoe-box">
      <group title="参赛时间">
        <selector title="" :options="dayList" v-model="dayValue"></selector>
      </group>

      <group title="参赛地点">
        <selector title="" :options="addList" v-model="addValue"></selector>
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
      this.$http('/api/common/getCityList', {
        params: {
          t: new Date().getTime(),
          cityCode: 101
        }
      }).then(json => {
        if (json.data.code === 0) {
          this.dayList = json.data.response.dayList.map((item, index) => {
            return {
              key: index,
              value: item
            }
          })
          this.addList = json.data.response.placeList.map((item, index) => {
            return {
              key: index,
              value: item
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  data () {
    return {
      dayValue: 0,
      addValue: 0,
      dayList: [],
      addList: []
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
