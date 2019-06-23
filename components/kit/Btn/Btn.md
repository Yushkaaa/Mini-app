# BUTTON COMPONENT [KIT]

**Include it on the page.json**
```
...,
"usingComponents": {
  "CustomButton": "[path to the component]/Button/Button"
},
...
```

### Usage

**withImage**
```
<CustomButton bind:onTap="showVisaForm"
              mode="withImage"
              src="./../../../images/edit-regular.svg"
              title="Title"
              disabled="{{ false }}"
/>
```

**simple**
```
<CustomButton bind:onTap="showVisaForm"
              mode="simple"
              title="Title"
              disabled="{{ false }}"
/>
```
**Floating**
```
<Btn bind:onTap="changeMode"
      mode="floating"
      text="Done"
      data-mode="sendUrl"
      class="floating"
      disabled="{{ true }}"
/>
```