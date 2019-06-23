import {
  getWeekTitle,
  getTimeTitle,
  fromToHumanTime
} from '../../../utils/helpers/humanTimestamp'

Component({
  properties: {
    items: {
      type: Array,
      default: []
    },
    lang: {
      type: String,
      default: 'en'
    }
  },
  data: {
    parsedImgs: [],
    interval: 1000,
    duration: 500,
    current: 0,
    location: '',
    title: '',
    timeWord: '',
    category: '',
    repeated: '',
    deleteFromDom: false
  },
  methods: {
    parsedByLang(string) {
      const { lang } = this.data
      if (string !== '' && string !== null) {
        if (string.split('|')[0] === '') return string
        else return lang === 'en' ? string.split('|')[0] : string.split('|')[1]
      } else return ''
    },
    carouselSwiped({ detail }) {
      const { current } = detail
      this.updateData(current)
    },
    updateData(current) {
      const { items, lang } = this.data
      const currentEvent = items[current]
      const {
        title,
        location_name,
        description,
        startDate,
        endDate,
        days
      } = currentEvent
      const deleteFromDom = getTimeTitle(
        new Date(startDate).getTime(),
        new Date(endDate).getTime(),
        lang
      ) === 'past'
      this.setData({
        current,
        title: this.parsedByLang(title),
        location: this.parsedByLang(location_name),
        description: this.parsedByLang(description),
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
    },
    chooseActive({ currentTarget: { dataset } }) {
      this.setData({
        current: dataset.id
      })
    },
    imgLoaded({ detail: { height }, currentTarget: { dataset: { id } } }) {
      const { items, parsedImgs } = this.data
      items.map(value => {
        if (value.id === id) {
          const imgData = {
            height,
            url: value.url,
            id
          }
          parsedImgs.push(imgData)
        }
      })
      this.setData({
        parsedImgs
      })
    }
  },
  attached() {
    const current = 0
    this.updateData(current)
  }
})
