Component({
  properties: {
    items: {
      type: Array,
      default: []
    },
    days: {
      type: Array,
      default: []
    }
  },
  data: {
    parsedImgs: [],
    interval: 1000,
    duration: 500,
    current: 0
  },
  methods: {
    carouselSwiped({ detail }) {
      const { current } = detail
      this.setData({
        current
      })
    },
    chooseActive({ currentTarget: { dataset } }) {
      this.setData({
        current: dataset.id
      })
    },
    imgLoaded({ detail: { height }, currentTarget: { dataset: { id } } }) {
      const { items, parsedImgs } = this.data
      items.map(value => {
        if (value.id === id) {
          const imgData = {
            height,
            url: value.url,
            id
          }
          parsedImgs.push(imgData)
        }
      })
      this.setData({
        parsedImgs
      })
    }
  }
})
