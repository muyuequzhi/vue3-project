const baseOption = {
  grid: {
    bottom: 15,
    top: 57,
    right: 0,
    left: 0,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['1月', '3月', '6月', '9月', '12月'],
    axisTick: {
      show: false, // 隐藏x轴刻度线
    },
    axisLine: {
      show: false, // 隐藏x轴横线
    },
    axisLabel: {
      color: '#809FB8',
    },
  },
}

export { baseOption }
