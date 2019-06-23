import {
  getWeekTitle,
  getTimeTitle,
  fromToHumanTime
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
    timeWord: '',
    category: '',
    repeated: '',
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
        const {
          lang,
          event: {
            title,
            location_name,
            description,
            startDate,
            endDate,
            category,
            days
          }
        } = this.data
        const deleteFromDom = getTimeTitle(
          new Date(startDate).getTime(),
          new Date(endDate).getTime(),
          lang
        ) === 'past'
        this.setData({
          title: this.parsedByLang(title),
          location: this.parsedByLang(location_name),
          description: this.parsedByLang(description),
          category: this.parsedByLang(category),
          repeated: getWeekTitle(days, lang),
          timeWord: getTimeTitle(
            new Date(startDate).getTime(),
            new Date(endDate).getTime(),
            lang
          ),
          fromTo: fromToHumanTime(
            new Date(startDate).getTime(),
            new Date(endDate).getTime(),
            lang
          ),
          deleteFromDom
        })
      }
    }
  }
})
