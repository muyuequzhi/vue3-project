<script setup lang="ts">
import { ref } from 'vue'
import Tab from '../Tab/index.vue'
import Tab1 from './Tab1.vue'


import Chart1 from './Chart1.vue'
import Chart2 from './Chart2.vue'
import Chart3 from './Chart3.vue'
import Chart4 from './Chart4.vue'

const cardData = ref([
  {
    name: '本外币存款余额',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
  },
  {
    name: '本外币存款年日均',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
  },
  {
    name: '本外币贷款余额',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
  },
  {
    name: '本外币贷款年日均',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
  },
  {
    name: 'EVA',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
    textFlag: '1',
  },
  {
    name: '中收',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
    textFlag: '1',
  },
  {
    name: '授信额度',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
    hasText: true,
  },
  {
    name: '用信余额',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
    hasText: true,
  },
  {
    name: '成员企业开户数',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
  },
  {
    name: '结算活跃户数',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
  },
  {
    name: '有贷户数',
    date: '2024-05-21',
    money: '24,888.21',
    num: '+123',
  },
])

const tabVal = ref({
  tab1: '1',
  tab2: '1',
  tab3: '1',
  tab4: '1',
  tab5: '1',
  tab6: '1',
  tab7: '1',
  tab8: '1',
  tab9: '1',
  tab10: '1',
  tab11: '1',
  tab12: '1',
})
</script>
<template>
  <div class="container">
    <div class="card-box" style="padding: 0 12px;margin-bottom: 16px;">
      <div class="card-gap" v-for="item in cardData">
        <div class="card-item">
          <div class="card-top">
            <div class="card-title">{{ item.name }}</div>
            <div class="card-date">{{ item.date }}</div>

          </div>

          <div class="card-bottom">
            <div>
              <span class="card-num">{{ item.money }}</span>
              <span class="card-unit">万元</span>
            </div>
            <div v-if="item.hasText" style="position: relative;">
              <div style="font-size: 12px;">
                <span style="position: absolute;top: -34px;left: 0;">敞口</span>
                <span class="card-num1" style="margin-left: 0;">{{ item.num }}</span>
                <span class="card-unit1">万元</span>
              </div>
            </div>
            <div v-else class="card-num1-box">
              <span>{{ item.textFlag == '1' ? '同比' : '较年初' }} </span>
              <span class="red">
                <span class="card-num1">{{ item.num }} </span>
                <span class="icon">
                  <el-icon>
                    <Top />
                  </el-icon>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="module-box">
      <div class="module-item">
        <div class="module-title">
          存款情况
        </div>
        <div class="module-top">
          <div>近12个月/3年存款结构（单位：万元）</div>
          <div class="module-date">2024-05-21</div>
          <div style="flex: 1;">
            <Tab :list="[{ name: '存款趋势', value: '1' }, { name: '存款结构', value: '2' }]" v-model="tabVal.tab1"></Tab>
          </div>
        </div>
        <div class="card-box">
          <div class="card-gap">
            <div class="card-item">
              <div class="card-top">
                <div class="card-title">存款余额</div>
                <div class="card-date">2024-05-21</div>
              </div>

              <div class="card-bottom">
                <div>
                  <span class="card-num">24,888.21</span>
                  <span class="card-unit">万元</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-gap">
            <div class="card-item">
              <div class="card-top">
                <div class="card-title">存款平均定价</div>
                <div class="card-date">2024-05-21</div>

              </div>

              <div class="card-bottom">
                <div>
                  <span class="card-num">78.21</span>
                  <span class="card-unit">%</span>
                </div>

                <div class="card-num1-box">
                  <span>较年初</span>
                  <span class="red">
                    <span class="card-num1">+123 </span>
                    <span class="icon">
                      <el-icon>
                        <Top />
                      </el-icon>
                    </span>

                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div style="padding-right: 6px;">
          <div class="chart-top">
            <Tab v-model="tabVal.tab11"
              :list="[{ name: '本外币企业存款', value: '1' }, { name: '人民币企业存款', value: '2' }, { name: '人民币普通存款', value: '3' }]">
            </Tab>
            <Tab1 v-model="tabVal.tab12"></Tab1>
          </div>
          <Chart1 style="height: 240px;width: 100%;"></Chart1>
        </div>
      </div>
      <div class="module-item">
        <div class="module-title">
          存款情况
        </div>
        <div class="module-top">
          <div>近12个月/3年贷款趋势（单位：万元）</div>
          <div class="module-date">2024-05-21</div>

        </div>
        <div class="card-box">
          <div class="card-gap">
            <div class="card-item">
              <div class="card-top">
                <div class="card-title">贷款份额</div>
                <div class="card-date">2024-05-21</div>
              </div>

              <div class="card-bottom">
                <div>
                  <span class="card-num">24,888.21</span>
                  <span class="card-unit">万元</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-gap">
            <div class="card-item">
              <div class="card-top">
                <div class="card-title">贷款平均定价</div>
                <div class="card-date">2024-05-21</div>
              </div>
              <div class="card-bottom">
                <div>
                  <span class="card-num">78.21</span>
                  <span class="card-unit">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="padding-right: 6px;">
          <div class="chart-top">
            <Tab v-model="tabVal.tab2"
              :list="[{ name: '本外币企业贷款', value: '1' }, { name: '人民币企业贷款', value: '2' }, { name: '外币企业贷款', value: '3' }]">
            </Tab>
            <Tab1 v-model="tabVal.tab3"></Tab1>
          </div>
          <Chart1 style="height: 240px;width: 100%;"></Chart1>
        </div>
      </div>
      <div class="module-item">
        <div class="module-title">
          收益情况
        </div>
        <div class="module-top">
          <div>近12个月/3年营业收入及EVA趋势（单位：万元）</div>
          <div class="module-date">2024-05-21</div>
        </div>


        <div style="padding-right: 6px;">
          <div class="chart-top">
            <Tab v-model="tabVal.tab4"
              :list="[{ name: '全量', value: '1' }, { name: '存款', value: '2' }, { name: '贷款', value: '3' }]">
            </Tab>
            <Tab1 v-model="tabVal.tab5"></Tab1>
          </div>
          <Chart2 style="height: 240px;width: 100%;"></Chart2>
        </div>
      </div>
      <div class="module-item">
        <div class="module-title-space"></div>
        <div class="module-top">
          <div>近12个月/3年中收趋势（单位：万元）</div>
          <div class="module-date">2024-05-21</div>
        </div>


        <div style="padding-right: 6px;">
          <div class="chart-top">
            <Tab v-model="tabVal.tab6"
              :list="[{ name: '全量', value: '1' }, { name: '国际业务', value: '2' }, { name: '投行业务', value: '3' }]">
            </Tab>
            <Tab1 v-model="tabVal.tab7"></Tab1>
          </div>
          <Chart3 style="height: 240px;width: 100%;"></Chart3>
        </div>
      </div>
      <div class="module-item">
        <div class="module-title">
          结算情况
        </div>
        <div class="module-top">
          <div>近12个月/3年企业结算情况（单位：万元）</div>
          <div class="module-date">2024-05-21</div>
        </div>


        <div style="padding-right: 6px;">
          <div class="chart-top">
            <Tab v-model="tabVal.tab8"
              :list="[{ name: '全量', value: '1' }, { name: '企业网银渠道', value: '2' }, { name: '非企业网银渠道', value: '3' }]">
            </Tab>
            <Tab1 v-model="tabVal.tab9"></Tab1>
          </div>
          <Chart1 style="height: 240px;width: 100%;"></Chart1>
        </div>
      </div>
      <div class="module-item">
        <div class="module-title-space"></div>
        <div class="module-top">
          <div>近12个月/3年结算活跃户（单位：万元）</div>
          <div class="module-date">2024-05-21</div>
        </div>


        <div style="padding-right: 6px;">
          <div class="chart-top" style="justify-content: flex-end;">

            <Tab1 v-model="tabVal.tab10"></Tab1>
          </div>
          <Chart4 style="height: 240px;width: 100%;"></Chart4>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import url(./index.scss);

* {
  box-sizing: border-box;
}

.red {
  color: #FF4542;
}

.container {
  font-size: 14px;
}

.card-box {
  display: flex;
  flex-wrap: wrap;

}

.card-gap {
  width: 25%;
  padding-right: 6px;
  margin-bottom: 6px;
}

.card-item {
  box-shadow: 0px 0px 10px 0px rgba(77, 108, 160, 0.1), 0px 2px 6px 0px rgba(77, 108, 160, 0.2);
  border-radius: 8px;
  padding: 12px;
}

.card-item>div {
  margin-bottom: 8px;
}

.card-item>div:last-child {
  margin-bottom: 0;
}

// .card-bottom>div:nth-child(2) {
//   width: 38%;
//   text-align: left;
// }

.card-top {
  display: flex;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
}

.card-bottom>div {
  line-height: 28px;
  height: 28px;
}

.card-center {
  text-align: left;
}

.card-num1-box {
  font-size: 12px;
}

.card-title {
  font-weight: 600;
  font-size: 14px;
  position: relative;
  line-height: 24px;
  padding-left: 10px;
  margin-right: 5px;
}

.card-title::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 13px;
  background: #6679E5;
  border-radius: 2px;
  position: absolute;
  left: 0;
  top: 5px;
}

.card-date {
  font-size: 12px;
  color: #9199BD;
  line-height: 24px;
}

.card-unit {
  font-size: 14px;
  color: #9199BD;
  position: relative;
  top: -2px;
}

.card-unit1 {
  font-size: 12px;
  color: #9199BD;
}

.card-num {
  font-weight: 600;
  font-size: 20px;
  color: #242933;
  margin-right: 5px;
}

.card-num1 {
  display: inline-block;
  font-size: 12px;
  margin: 0 3px;
}

.icon {
  position: relative;
  top: 3px;
}
</style>