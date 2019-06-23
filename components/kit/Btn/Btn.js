Component({
  properties: {
    mode: {
      type: String,
      default: 'simple' // simple, floating, withImage
    },
    text: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
      default: ''
    }
  },

  methods: {
    onTap() {
      this.triggerEvent('onTap')
    }
  }
})