Component({
  options: {
    multipleSlots: true
  },
  properties: {
    values: {
      default: [],
      type: Array
    },
    value: {
      default: '',
      type: String
    },
    valueFrom: {
      default: '',
      type: String
    },
    valueTo: {
      default: '',
      type: String
    },
    dateFrom: {
      default: '',
      type: String
    },
    dateTo: {
      default: '',
      type: String
    },
    label: {
      default: 'Label',
      type: String
    },
    mode: {
      default: 'selector', // time | selector
      type: String
    },
    type: {
      default: 'simple', // fromTo | simple
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: {
    chosen: 0,
    date: '2018-01-01',
    time: '00:00',
    timeFrom: '00:01',
    timeTo: '23:59'
  },
  methods: {
    bindPickerChange: function(e) {
      this.setData({
        chosen: e.detail.value
      })
      const payload = {
        value: e.detail.value,
        valueText: this.data.values[e.detail.value],
        key: this.data.label,
        subKey: null
      }
      this.triggerEvent('changeSelect', payload)
    },
    bindDateChange: function(e) {
      this.setData({
        date: e.detail.value
      })
      const payload = {
        value: e.detail.value,
        valueText: e.detail.value,
        key: this.data.label,
        subKey: null
      }
      this.triggerEvent('changeSelect', payload)
    },
    bindTimeChange: function(e) {
      this.setData({
        time: e.detail.value
      })
      const payload = {
        value: e.detail.value,
        valueText: e.detail.value,
        key: this.data.label,
        subKey: null
      }
      this.triggerEvent('changeSelect', payload)
    },
    bindTimeChangeFrom: function(e) {
      this.setData({
        timeFrom: e.detail.value
      })
      const payload = {
        value: e.detail.value,
        valueText: e.detail.value,
        key: this.data.label,
        subKey: 'From'
      }
      this.triggerEvent('changeSelect', payload)
    },
    bindTimeChangeTo: function(e) {
      this.setData({
        timeTo: e.detail.value
      })
      const payload = {
        value: e.detail.value,
        valueText: e.detail.value,
        key: this.data.label,
        subKey: 'To'
      }
      this.triggerEvent('changeSelect', payload)
    }
  }
})
