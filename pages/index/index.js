Page({
  data: {
    string: "Hello world!",
    boolean: true, 
    array: [1, 2, 3, 4, 5, 6],
    name: "Ekaterina",
    tapName: function(event) {
      console.log(event)
    }
  },
  


  goTo({ target: { dataset: { location } } }) {
    wx.navigateTo({
      url: `/pages/${location}/${location}`
    })
  },
 
  submit() {
    console.log(this.data)
    console.log(this)
  }
})
