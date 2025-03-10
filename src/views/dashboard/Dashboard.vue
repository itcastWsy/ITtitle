<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const charDom = ref<HTMLDivElement>()
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(charDom.value)
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  })
})
</script>

<template>
  <div class="dash-page">
    <div class="char" ref="charDom" style="width: 600px; height: 600px"></div>
  </div>
</template>

<style lang="scss" scoped></style>
