Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: 'en'
    },
  },
  methods: {
    parsedByLang(string) {
      const { lang } = this.data
      if (string !== '' && string !== null) {
        if (string.split('|')[0] === '') return string
        else return lang === 'en' ? string.split('|')[0] : string.split('|')[1]
      } else return ''
    },
  },
  attached() {
    console.log(this.data);
    if (this.data) {
      const { title } = this.data
      this.setData({
        eventTitle: this.parsedByLang(title)
      })
    }
  }
})
