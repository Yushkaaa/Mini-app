# WRAPPER-INPUT COMPONENT [KIT]

**Include it on the page.json**
```
...,
"usingComponents": {
  "Wrapper-Input": "[path to the component]/Wrapper-Input/Wrapper-Input"
},
...
```

### Usage

```
<Wrapper-Input
  wx:if="{{ condition if needed }}"
  label="Label"
>
  <input slot="input" type="text"/>
</Wrapper-Input>
```
