Component({
  properties: {
    icons: {
      type: Array,
      default: []
    }
  },
  methods: {
    onTap({currentTarget: {dataset: {id}}}) {
      const icon = this.data.icons.find(icon => icon.id === id);
      if (icon && typeof icon.onTap === 'function') {
        icon.onTap();
      }
    }
  }
})
