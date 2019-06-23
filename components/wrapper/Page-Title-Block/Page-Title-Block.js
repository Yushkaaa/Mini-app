Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
  },
  methods: {
    openTimeManagement() {
      this.triggerEvent('openTimeManagement')
    }
  }
})
