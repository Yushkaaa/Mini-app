# TITLE COMPONENT [KIT]

**Include it on the page.json**
```
...,
"usingComponents": {
  "Title": "[path to the component]/Title/Title"
},
...
```
### Usage
  The component has 5 props;'type', 'mode' 'text', 'iconUrl' 'needBorder' (boolean)

  To use the component, you need to select one type, one mode (How the text will be displayed), then write the text you'd like to be displayed (What will be displayed) 
  
  - The first step is to choose a 'type' (listed below)
  - The second step is to choose a 'mode' (listed below)
  - The third step is to add the text you want be to be displayed 'text'
  - The fourth step is to select wether or not to use a border 'needBorder' (optional)
  - The last step is to choose an icon image by adding the icon URL 'iconUrl' (optional)
  

**List of types**
 - Event
 - EventCard
 - EventDate
 - Highlight
 - Location
 - Map
 - InfoBox
 - PostBox
 - Category 
**List of mode**
 - Title
 - Sub-Title

**Usage for highlight title**
> with border bottom
```
<Title
  type="Highlight"
  mode="Title"
  text="Add highlight name here"
  needBorder="{{ true }}"
/>
```
> without border bottom
```
<Title
  type="Highlight"
  mode="Title"
  text="Add highlight name here (no border)"
/>

```

**Usage for InfoBox Title**

```
<Title
  type="InfoBox"
  mode="Title"
  text="Lorem ipsum dolor sit."
  iconUrl="/images/icon.png"
/>
```
On top of the `Location-Content`**[KIT]**
```
<Title type="Title-Subtitle"
       mode="Map"
       text="Devils Brewery"
       subText="洪山区光谷街风都柏林三期沿街门面1209"
       iconUrl="/assets/img/arrowRight.svg"
/>
```
`Subway`
```
<Title type="Title-Subtitle"
       mode="Subway"
       text="Wuhan Metro"
       subText="Optics Valley Square"
       number="2"
/>
```
`DIDI`
```
<Title type="Title-Subtitle"
       mode="Didi-taxi"
       text="Get DIDI"
       subText="8.8km away"
       iconUrl="/assets/img/didi.svg"
/>
```