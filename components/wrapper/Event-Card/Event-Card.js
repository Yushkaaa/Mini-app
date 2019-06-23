import {
  humanDate
} from '../../../utils/helpers/humanTimestamp'

Component({
  properties: {
    event: {
      type: Object,
      default: {}
    },
    page: {
      type: Object,
      default: {}
    },
    lang: {
      type: String,
      default: 'en'
    }
  },
  data: {
    location: '',
    title: '',
    deleteFromDom: false,
    date: {
      day: '',
      weekDay: ''
    }
  },
  methods: {
    parsedByLang(string) {
      const { lang } = this.data
      if (string !== '' && string !== null) {
        if (string.split('|')[0] === '') return string
        else return lang === 'en' ? string.split('|')[0] : string.split('|')[1]
      } else return ''
    }
  },
  attached() {
    if (this.data.event) {
      if (!this.data.event.poster || this.data.event.poster === 'none') {
        this.setData({
          deleteFromDom: true
        })
      } else {
        const { event: { title, location_name, description, startDate, poster } } = this.data
        this.setData({
          title: this.parsedByLang(title),
          location: this.parsedByLang(location_name),
          description: this.parsedByLang(description),
          date: humanDate(new Date(startDate), this.data.lang)
        })
      }
    }
  }
})
