# Font-Picker COMPONENT [KIT]

**Include it on the page.json**
```
...,
"usingComponents": {
  "Title-With-Font": "[path to the components]/kit/Title-With-Font/Title-With-Font"
},
...
```
### Dependencies
> none

### Usage
```js
data: {
  ...,
  titleFont: {
    id: 0,
    color: '#000000',
    size: '20px',
    url: 'https://sungd.github.io',
    family: 'Pacifico',
  }
  ...
}

```

```html
<Title-With-Font slot="title-with-font"
                 font="{{ titleFont }}"
                 text="Some test title with Font"
/>
```

