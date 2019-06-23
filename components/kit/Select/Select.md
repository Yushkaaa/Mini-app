# SELECT COMPONENT [KIT]

**Include it on the page.json**
```
...,
"usingComponents": {
  "Select": "[path to the component]/Select/Select"
},
...
```
### Dependencies
> **Wrapper-Input** KIT component

### Usage

#### Available *modes*:
- **selector** (custom values)
  - **values** : Array
  - **value**  : String (values[value])
  - **label** : String
  - **Triggering** : changeSelect

- **time** (time picker)
  - **type**: simple / fromTo
    - if type === *fromTo*
      - **valueFrom**: String [00:02]
      - **valueTo**: String [23:58]
  - **label** : String
  - **Triggering** : changeSelect

- **date** (date picker)
  - **value**  : String [2018-01-03]
  - **label** : String
  - **Triggering** : changeSelect
