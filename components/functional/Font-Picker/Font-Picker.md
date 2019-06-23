# Font-Picker COMPONENT [FUNCTIONAL]

**Include it on the page.json**
```
...,
"usingComponents": {
  "Font-Picker": "[path to the components]/functional/Font-Picker/Font-Picker"
},
...
```
### Dependencies
> none

### Usage
```js
data: {
  ...,
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
  custom: ''
  ...
}

```

```js
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

```

```html
<Font-Picker
  slot="font-picker"
  edit="{{ true }}"
  categories="{{ availableCategory }}"
  fonts="{{ availableFonts }}"
  font="{{ chosenFont }}"
  category="{{ chosenCategory }}"
  custom="{{ custom }}"
  bind:changeCustom="handleChangeCustom"
  bind:changeFont="handleChangeFont"
  bind:changeCategory="handleChangeCategory"
  style="display: block; width: 100%;"
/>
```

