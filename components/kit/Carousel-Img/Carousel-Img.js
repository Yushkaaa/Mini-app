Component({
  properties: {
    images: {
      type: Array,
      default: []
    }
  },
  data: {
    parsedImgs: [],
    indicatorDots: true,
    autoplay: false,
    interval: 1000,
    duration: 500,
    current: 0,
    currentImgIndex: -1
  },
  methods: {
    carouselSwiped({ detail }) {
      const { current } = detail
      this.setData({
        current
      })
    },
    imgLoaded({ detail: { height }, currentTarget: { dataset: { id } } }) {
      const { images, parsedImgs } = this.data
      images.map(value => {
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
