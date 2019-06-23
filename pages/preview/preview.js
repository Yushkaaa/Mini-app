Page({
  data: {
    PRODUCT: {
      mode: 'index',
      url: '',
      selected: '',
      lang: 'en',
      selectedCommerceId: '',
      commerces: {
        'daMai': {
          id: 'daMai',
          name: 'Da Mai | 大麦',
          img: '/assets/img/logo-03.svg',
          products: [],
          selectedProducts: []
        },
        'weiDian': {
          id: 'weiDian',
          name: 'Wei Dian | 微店',
          img: '/assets/img/logo-04.svg',
          products: [],
          selectedProducts: []
        }
      }
    }
  },
  selectCommerce({ currentTarget:{ dataset: { commerce }} }) {
    const hasProducts = Array.isArray(commerce.products) && commerce.products.length
    const { PRODUCT, PRODUCT: { commerces } } = this.data
    let newProducts = []
    if (hasProducts) {
      const oldProducts =  PRODUCT['commerces'][commerce.id].products
      const { selectedProducts } = PRODUCT['commerces'][commerce.id]

      newProducts = oldProducts.map((value, key) => {
        const selectedId = selectedProducts[key]
        if (value.mpId == selectedId && selectedId !== undefined) {
          return { ...value, select: true }
        } else return { ...value, select: false }
      })
      this.setData({
        PRODUCT: {
          ...PRODUCT,
          commerces: {
            ...commerces,
            [commerce.id]: {
              ...commerces[commerce.id],
              products: newProducts
            }
          }
        }
      })
    }
    this.setData({
      PRODUCT: {
        ...PRODUCT,
        selectedCommerceId: commerce.id,
        mode: hasProducts ? 'select' : 'edit',
      }
    })
  },
  changeMode({ currentTarget: { dataset: { mode } } }) {
    const {
      PRODUCT,
      PRODUCT: {
        selectedCommerceId
      }
    } = this.data
    if (mode === 'sendUrl') {
      wx.request({
        url: 'http://47.98.135.81/gen_product',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          // weidian example
          // url: 'https://weidian.com/item.html?itemID=2674088491&spider_token=230a'
          // damai example
          //url: https://piao.damai.cn/173444.html?spm=a2oeg.home.card_0.ditem_1.591b23e1S4nNJt&clicktitle=%E6%BC%94%E5%94%B1%E4%BC%9A
          url: this.data.PRODUCT.url
        },
        fail:(res) => {
          console.error(res)
        },
        success:({ data }) => {
          console.warn(PRODUCT.commerces[selectedCommerceId])
          this.setData({
            PRODUCT: {
              ...PRODUCT,
              mode: 'select',
              commerces: {
                ...PRODUCT.commerces,
                [selectedCommerceId]: {
                  ...PRODUCT.commerces[selectedCommerceId],
                  products: [
                    ...PRODUCT.commerces[selectedCommerceId].products,
                    { ...data, selected: false }
                  ]
                }
              }
            }
          })
        }
      })
    } else if (mode === 'sendProducts') {
      const { products } = PRODUCT.commerces[selectedCommerceId]
      const showCase = products.map(value => value.select ? `${value.mpId}` : '')
      wx.showModal({
        title: 'selected products',
        content: showCase.toString(),
        success:(res) => {
          if (res.confirm) {
            this.setData({
              PRODUCT: {
                ...PRODUCT,
                mode: 'index'
              }
            })
          } else if (res.cancel) {
            console.log('Canceled')
          }
        }
      })
    }
  },
  onChangeUrl({ detail: { value } }) {
    const { PRODUCT } = this.data
    this.setData({
      PRODUCT: {
        ...PRODUCT,
        url: value
      }
    })
  },
  onSelectProduct({ detail: { mpId, select } }) {
    const {
      PRODUCT,
      PRODUCT: {
        selectedCommerceId,
        commerces: {
          [selectedCommerceId]: {
            products,
            selectedProducts
          }
        }
      }
    } = this.data
    console.warn('!', selectedProducts)
    const index = selectedProducts.indexOf(mpId)
    const newSelectedProducts = [ ...selectedProducts ]

    const newProducts = products.map(value => {
      if (value.mpId == mpId) {
        return {
          ...value,
          select
        }
      } else return value
    })

    if (index !== -1 && !select) newSelectedProducts.splice(index, 1)
    else if (index === -1 && select) newSelectedProducts.push(mpId)

    this.setData({
      PRODUCT: {
        ...PRODUCT,
        commerces: {
          ...PRODUCT.commerces,
          [selectedCommerceId]: {
            ...PRODUCT.commerces[selectedCommerceId],
            products: newProducts,
            selectedProducts: newSelectedProducts
          }
        }
      }
    })
  },
  goTo({ currentTarget: { dataset: { location } } }) {
    const { PRODUCT } = this.data
    this.setData({
      PRODUCT: {
        ...PRODUCT,
        mode: location
      }
    })
  }
})
