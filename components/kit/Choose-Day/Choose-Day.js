Component({
  properties: {
    days: {
      type: Object,
      default: []
    },
    active: {
      type: Array,
      default: []
    },
    lang: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: ''
    }
  },
  data: {},
  methods: {
    setActive({ currentTarget: { dataset: { id, name, active, lang } } }) {
      this.triggerEvent('chooseDay', { id, name, active, lang })
    }
  }
})