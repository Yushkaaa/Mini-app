# Carousel COMPONENT [WRAPPER]

**Include it on the page.json**
```
...,
"usingComponents": {
  "RecEvent-Carousel-Sync": "/components/wrapper/RecEvent-Carousel-Sync/RecEvent-Carousel-Sync"
},
...
```
### Dependencies
> none

### Usage

```html
  <RecEvent-Carousel-Sync items="{{ items }}" lang="en" />
```
```js
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
```
P.S. The `height` of the image will control the whole Carousel height

#### Available *modes*:
- none
