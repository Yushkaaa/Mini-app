Component({
  properties: {
    lang: {
      type: String,
      default: 'en'
    },
    item: {
      type: Object,
      default: {}
    }
  },
  data: {
    title: '',
    content: ''
  },
  methods: {
    imageTapped(options) {
      wx.previewImage({
        urls: [options.currentTarget.id],
        current: options.currentTarget.id
      })
    },
    parseLastFullStop(str) {
      return str.split(' .').join('.')
    }
  },
  attached() {
    if (this.data.item) {
      const { title, content } = this.data.item
      this.setData({
        title: `${title.trim()}.`,
        content: this.parseLastFullStop(content.trim())
      })
    }
  }
})