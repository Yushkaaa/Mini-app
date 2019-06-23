Page({
  data: {
    carouselImgs: [
      {
        url: '../../assets/img/carousel-img-1.png',
        id: 0
      },
      {
        url: '../../assets/img/carousel-img-2.png',
        id: 1
      },
      {
        url: '../../assets/img/carousel-img-1.png',
        id: 2
      },
      {
        url: '../../assets/img/carousel-img-2.png',
        id: 3
      },
      {
        url: '../../assets/img/carousel-img-1.png',
        id: 4
      },
      {
        url: '../../assets/img/carousel-img-2.png',
        id: 5
      },
      {
        url: '../../assets/img/carousel-img-1.png',
        id: 6
      }
    ],
    daysEn: [
      { 'id': 0, 'name': 'Mon', 'active': false },
      { 'id': 1, 'name': 'Tue', 'active': false },
      { 'id': 2, 'name': 'Wed', 'active': false },
      { 'id': 3, 'name': 'Thu', 'active': false },
      { 'id': 4, 'name': 'Fri', 'active': false },
      { 'id': 5, 'name': 'Sat', 'active': false },
      { 'id': 6, 'name': 'Sun', 'active': false }
    ],
    daysCh: [
      { 'id': 0, 'name': '周一', 'active': false },
      { 'id': 1, 'name': '周二', 'active': false },
      { 'id': 2, 'name': '周三', 'active': false },
      { 'id': 3, 'name': '周四', 'active': false },
      { 'id': 4, 'name': '周五', 'active': false },
      { 'id': 5, 'name': '周六', 'active': false },
      { 'id': 6, 'name': '周日', 'active': false }
    ],
    availableCategory: [
      { name: 'Other', edit: true },
      { name: 'Happy Hour' },
      { name: 'Daily Special' },
      { name: 'Breakfast Menu' },
      { name: 'Brunch Menu' },
      { name: 'Lunch Set' },
      { name: 'Dinner Set' },
      { name: 'Business Menu' },
      { name: 'Afterwork Menu' },
      { name: 'Season Special' },
      { name: 'Daily Special' }
    ],
    availableFonts: [
      {
        id: 0,
        color: '#000000',
        size: '20px',
        url: 'https://sungd.github.io',
        family: 'Pacifico',
      },
      {
        id: 1,
        color: '#000000',
        size: '20px',
        url: '../../../assets/fonts',
        family: 'Comfortaa-Light',
      },
      {
        id: 2,
        color: '#000000',
        size: '20px',
        url: '../../../assets/fonts',
        family: 'CaviarDreams_Bold',
      },
      {
        id: 3,
        color: '#de8324',
        size: '30px',
        url: '../../../assets/fonts',
        family: 'Rubik-Black',
      }
    ],
    chosenFont: 0,
    chosenCategory: 0,
    custom: '',
    titleFont: {
      id: 0,
      color: '#000000',
      size: '20px',
      url: 'https://sungd.github.io',
      family: 'Pacifico',
    }
  },
  handleChangeCustom({detail: {value}}){
    this.setData({
      custom: value
    })
  },
  handleChangeFont({detail: {font}}) {
    this.setData({
      chosenFont: font
    })
  },
  handleChangeCategory({detail: {category}}) {
    this.setData({
      chosenCategory: category
    })
  },
  handleOpenTimeManagement() {
    console.log(' handleOpenTimeManagement ')
  }
})
