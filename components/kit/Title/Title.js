Component({
  properties: {
    type: {
      type: String,
      default: ''
    },
    mode:{
      type: String,
      default:''
    },
    text: {
      type: String,
      default: ''
    },
    iconUrl: {
      type: String,
      default: ''
    },
    needBorder: {
      type: Boolean,
      default: false
    },
    subText: {
      type: String,
      default: ''
    },
    number: {
      type: String,
      default: ''
    }
  },
  data: {
    metroLineColor: '444444'
  },
  methods: {
    lineToColor() {
      const unknownColor = '444444'
      const subwayColors = [
        { line: '1', color: '006699' },
        { line: '2', color: 'ff99cc' },
        { line: '3', color: 'd9b765' },
        { line: '4', color: '99cc33' },
        { line: '6', color: 'b41f84' },
        { line: '7', color: 'e87917' },
        { line: '8', color: '99aeac' },
        { line: '11', color: 'f8d322' },
        { line: 'Y', color: '99aeac' }
      ]
      const match = subwayColors.find(a => a.line === this.data.number) || {}
      if (match.color === undefined) match.color = unknownColor
      this.setData({
        metroLineColor: `#${match.color}`
      })
    }
  },
  attached() {
    if (this.data.number !== '') this.lineToColor()
  }
})