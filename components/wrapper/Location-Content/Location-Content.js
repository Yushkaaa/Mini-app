Component({
  properties: {
    locationData: {
      type: Object,
      default: {}
    },
    lang: {
      type: String,
      default: 'ch'
    },
    host: {
      type: String,
      default: 'location'
    },
    post_id: {
      type: Number,
      default: 0
    },
    location_id: {
      type: Number,
      default: 0
    },
    location_title: {
      type: String,
      default: ''
    },
    locationName: {
      type: String,
      default: ''
    },
    location: {
      type: Object,
      observer(newVal) {
        //Sets the marker to be the same as the location
        this.setData({
          location_markers: [{
            latitude: newVal['latitude'],
            longitude: newVal['longitude']
          }]
        })
        console.warn(this.data.location_markers);
      }
    },
    subwayData: {
      type: Object,
      observer: function (newVal, oldVal, changedPath) {
        let name_en, name_zh, lineNumber

        if (newVal['name']['en'] !== undefined) name_en = `${newVal['name']['en']}`
        if (newVal['name']['zh'] !== undefined) name_zh = `${newVal['name']['zh']}站`
        if (newVal['exit'] !== undefined && name_en !== undefined) name_en = name_en + ` Exit ${newVal['exit']}`
        if (newVal['exit'] !== undefined && name_en !== undefined) name_zh = name_zh + ` ${newVal['exit']}出口`
        if (name_en === undefined) name_en = name_zh
        if (name_zh === undefined) name_zh = name_en
        if (name_en === undefined) name_en = ''
        if (name_zh === undefined) name_zh = ''

        lineNumber = newVal['line_number']
        if (lineNumber === undefined) lineNumber = null

        this.setData({
          "page.dynamic.name.en": name_en,
          "page.dynamic.name.zh": name_zh,
          "lineNumber": lineNumber,
          "lineBackgroundStyle": `background-color: #${lineToColor(newVal['line_number'])};  border: 1px solid #${lineToColor(newVal['line_number'])};`
        })
      }
    }
  },
  data: {
    location_markers: undefined,
    lineNumber: undefined,
    lineBackgroundStyle: undefined,
    exit: undefined,
    page: {
      static: {
        "didi-box--title": {
          en: "Get Didi",
          zh: "叫出租车"
        },
        "distance-unit": {
          en: "km away",
          zh: "千米"
        },
        "metro-box--title": {
          en: "Wuhan Metro",
          zh: "武汉地铁"
        }
      },
      dynamic: {
        "name": {
          en: undefined,
          zh: undefined
        }
      }
    }
  },
  methods: {
    getTaxi() {
      this.triggerEvent('gettaxi')
    },

    openMap() {
      this.triggerEvent('openmap')
    },
    onViewMapTap() {
      if (this.data.host === 'location') this.triggerEvent('openmap')
      else if (this.data.host === 'event') {
        wx.navigateTo({
          url: `/pages/locations/show/show?id=${this.data.post_id}&location_id=${this.data.location_id}`,
        })
      }
    }
  },
  attached() {
    console.log(this.data)
  }
})
