Page({
  data: {
    icons: [
      {
        id: 1,
        img: '/assets/icons/analytics.svg',
        onTap: () => {
          console.log('onTap 1')
        }
      },
      {
        id: 2,
        img: '/assets/icons/gallery.svg',
        onTap: () => {
          console.log('onTap 2')
        }
      }
    ],
    testProduct: {
      img: '/assets/img/carousel-img-1.png',
      title: '产品名称刮擦最有可能分为两行有可能分为两行',
      sourceApp: '淘宝',
      discountPrice: '180',
      originalPrice: '260'
    },
    testProduct2: {
      img: '/assets/img/carousel-img-2.png',
      title: '产品名称刮擦最有可能分为两行有可能分为两行',
      sourceApp: '淘宝',
      discountPrice: '10',
      originalPrice: '23'
    },
    items: [
      {
        category: 'Dining|美食',
        days: '0=Tuesday&1=Saturday',
        description: 'description|some ch',
        endDate: 'Fri Feb 01 2019 14:00:00 GMT+0800 (CST)',
        location_name: 'DX Pizza|DX chinese',
        poster: 'https://wuhansocial.com/wp-content/uploads/Locations/DX_Pizza/_20181025124027-e1540987321705.jpg',
        startDate: 'Tue Jan 01 2019 11:00:00 GMT+0800 (CST)',
        title: 'Event 1|东米西面每日折扣',
      },
      {
        category: 'Dining|美食',
        days: '0=Tuesday&1=Wednesday&2=Thursday',
        description: 'description|some ch',
        endDate: 'Fri Feb 01 2019 14:00:00 GMT+0800 (CST)',
        location_name: 'DX Pizza|DX chinese',
        poster: 'https://wuhansocial.com/wp-content/uploads/Locations/DX_Pizza/_20181025124027-e1540987321705.jpg',
        startDate: 'Tue Jan 01 2019 11:00:00 GMT+0800 (CST)',
        title: 'Event 2|东米西面每日折扣',
      }
    ],
    carouselImgs: [
      {
        url: '/assets/img/carousel-img-1.png',
        id: 0
      },
      {
        url: '/assets/img/carousel-img-2.png',
        id: 1
      },
      {
        url: '/assets/img/carousel-img-1.png',
        id: 2
      },
      {
        url: '/assets/img/carousel-img-2.png',
        id: 3
      },
      {
        url: '/assets/img/carousel-img-1.png',
        id: 4
      },
      {
        url: '/assets/img/carousel-img-2.png',
        id: 5
      },
      {
        url: '/assets/img/carousel-img-1.png',
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
    ]
  }
})
