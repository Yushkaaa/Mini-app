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
  <Carousel images="{{ carouselImgs }}" />
```
```js
carouselImgs: [
  {
    url: '../../../assets/img/carousel-img-1.png',
    id: 0
  },
  {
    url: '../../../assets/img/carousel-img-2.png',
    id: 1
  }
],
```
P.S. The `height` of the image will control the whole Carousel height

#### Available *modes*:
- none
