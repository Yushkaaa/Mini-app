# Carousel COMPONENT [KIT]

**Include it on the page.json**
```
...,
"usingComponents": {
  "Carousel": "[path to the component]/Carousel/Carousel"
},
...
```
### Dependencies
> none

### Usage

```html
  <Carousel-Synced items="{{ carouselImgs }}" days="{{ daysEn }}" />
```
```js
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
```
P.S. The `height` of the image will control the whole Carousel height

#### Available *modes*:
- none
