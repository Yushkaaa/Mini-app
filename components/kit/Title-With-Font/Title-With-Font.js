Component({
  properties: {
    font: {
      type: Object,
      default: []
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    loadFont(family, url) {
      wx.loadFontFace({
        family: family,
        source: `url('${url}/${family}.ttf')`,
      })
    }
  },
  attached() {
    if (this.data.font) {
      this.loadFont(this.data.font.family, this.data.font.url)
    }
  }
})
