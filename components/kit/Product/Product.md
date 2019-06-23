Product# _template COMPONENT [KIT/CONTAINER]

**Include it on the page.json**
```
...,
"usingComponents": {
  "_template": "[path to the component]/_template/_template"
},
...
```
### Dependencies
> **blabla** KIT component

### Usage

```html
<Product lang="ch"
         appId="test"
         product="{{ testProduct }}"
/>

```
```js
testProduct: {
  img: 'http://pimg.dmcdn.cn/perform/project/1669/166951_n.jpg',
  title: '【呈现】超高人气日系爵士嘻哈 西原健一郎 出道十周年 最新专辑中国发行巡演',
  sourceApp: '淘宝',
  discountPrice: '180',
  originalPrice: '260'
}

```