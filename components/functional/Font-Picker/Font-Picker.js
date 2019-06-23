Component({
  properties: {
    edit: {
      type: Boolean,
      default: true
    },
    fonts: {
      type: Array,
      default: []
    },
    categories: {
      type: Array,
      default: []
    },
    font: {
      type: String,
      default: 0
    },
    category: {
      type: String,
      default: 0
    },
    custom: {
      type: String,
      default: ''
    }
  },
  methods: {
    bindPickerChange({detail: {value: font}}) {
      this.triggerEvent('changeFont', {font})
    },
    bindCategoryChange({detail: {value: category}}) {
      this.triggerEvent('changeCategory', {category})
    },
    inputTextArea({detail: {value}}) {
      this.triggerEvent('changeCustom', {value})
    },
    loadFont(family, url) {
      wx.loadFontFace({
        family: family,
        source: `url('${url}/${family}.ttf')`,
      })
    }
  },
  attached() {
    if (this.data.fonts) {
      this.data.fonts.map(font => {
        this.loadFont(font.family, font.url)
      })
    }
  }
})