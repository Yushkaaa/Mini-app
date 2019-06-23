Component({
  options:{
    multipleSlots: true
  },
  properties: {
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    needBorder: {
      type: Boolean,
      default: false
    }
  }
})