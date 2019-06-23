# Icons-Container [KIT/CONTAINER]

**Include it on the page.json**
```
...,
"usingComponents": {
  "Icons": "/components/kit/Icons-Container/Icons-Container"
},
...
```
### Usage
```
<Icons
 icons="{{ icons }}"
/>
```

#### Props:
- **icons** Array
  - **id** : Number
  - **img**  : String
  - **onTap** : Function

#### Props example:
```
icons: [
 {
   id: 1,
   img: '/assets/helpers/analytics.svg',
   onTap: () => {
     console.log('onTap 1')
   }
 },
 {
   id: 2,
   img: '/assets/helpers/gallery.svg',
   onTap: () => {
     console.log('onTap 2')
   }
 }
]
```
