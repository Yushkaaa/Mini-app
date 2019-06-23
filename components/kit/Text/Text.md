# TEXT COMPONENT [KIT]

**Include it on the page.json**
```
...,
"usingComponents": {
  "CustomText": "[path to the component]/Text/Text"
},
...
```
### Usage

  The component has 3 props;'type', 'text', 'needBorder' (boolean) and a slot for bold text 'slot="bold-text". 

  To use the component, you need to select one type (How the text will be displayed), write the text you need to display as bold, then write the text you'd like to be displayed (What will be displayed) 
  
  - The first step is to choose a 'type' (listed below)
  - The second step is to write the text you wish to be bold '<text slot='bold-text> "add text here" </text>'
  - The second step is to select wether or not to use a border 'needBorder' (optional)
  - Last but not least, to add the text you want be to be displayed 'text'
 
**List of types**
 - Title
 - Swiper
 - Opening-Times
 - Sub-Opening-Times
 - Bottom-Bar

**Border Usage**

To insert the bottom border, simply set the prop 'needBorder' to '{{ true }}' . 
It is applicable to any type.

Note: If not needed, no need to write 'needBorder={{ false }}, as the prop has 'false' as default value.

**Examples**

**Swiper Text**

<CustomText
    type='Swiper'
    text='swiper text here'
> 
  <text slot="bold-text"
> 
    "bold text here"
  </text> 
</CustomText>
**Highlight Text With Border** 

<CustomText
    type='Highlight'
    text='highlight text here'
> 
  <text slot="bold-text"
> 
    "bold text here"
  </text> 
</CustomText>

Note: Pay attention to the uppercase & lowercase.
