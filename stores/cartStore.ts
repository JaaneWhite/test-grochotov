// @ts-ignore
import {defineStore} from "pinia";
import {TypeCartItem} from "~/plugins/catalog";
import {catalogItems} from "~/plugins/catalog";


interface State {
    cartItems: TypeCartItem[]
}


// @ts-ignore
export const useCartStore = defineStore('cartStore', {

    state: (): State => {
        return {
            cartItems: [
                {
                    id: 123456,
                    articul: 'G2H1065',
                    name: 'Вытяжное устройство G2H',
                    shortName: 'G2H',
                    cartText: 'Вытяжное устройство для механической системы вентиляции',
                    description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    image: 'rectangle_72',
                    minPrice: 6848,
                    maxPrice: 56584,
                    price: 12644,
                    count: 1
                },
                {
                    id: 123457,
                    articul: 'G2H1065',
                    name: 'Вытяжное устройство BXC',
                    shortName: 'BXC',
                    cartText: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                    image: 'rectangle_74',
                    minPrice: 6848,
                    maxPrice: 56584,
                    price: 12644,
                    count: 2
                },
                {
                    id: 123458,
                    articul: 'G2H1065',
                    name: 'Вытяжное устройство GHN',
                    shortName: 'GHN',
                    cartText: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    description: 'Вытяжное устройство с датчиком присутствия',
                    image: 'rectangle_76',
                    minPrice: 6848,
                    maxPrice: 56584,
                    price: 12644,
                    count: 1
                },
            ]
        }
    },

    getters: {
      totalCount: (state: { cartItems: any[]; }) => {
          let totalCount = 0
          // @ts-ignore
          state.cartItems.forEach(item => {
              totalCount = totalCount + item.count
          })
          return totalCount
      },
      totalPrice: (state: { cartItems: any[]; }) => {
          let totalPrice = 0
            // @ts-ignore
          state.cartItems.forEach(item => {
              totalPrice = totalPrice + item.count * item.price
          })
          return totalPrice
        },
    },

    actions: {
        deleteItem(state: { cartItems: any[]; }, itemId: number) {
            let idx = state.cartItems.indexOf((item: { id: number; }) => item.id === itemId)
            state.cartItems.splice(idx,1)
        }
    }

})

