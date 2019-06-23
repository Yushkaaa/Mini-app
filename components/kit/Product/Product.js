Component({
  properties: {
    product: {
      type: Object,
      default: {}
    },
    appId: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: 'en'
    },
    mode: {
      type: String,
      default: 'simple'
    }
  },
  methods: {
    onSelect() {
      const selected = this.data.product.select
      const { product: { mpId  } } = this.data
      const select = !selected
      this.triggerEvent('onSelect', { mpId, select })
    },
    goToMiniProgram() {
      const { appId } = this.data
      wx.navigateToMiniProgram({
        appId
      })
    }
  }
})
