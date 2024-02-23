import { createSlice } from '@reduxjs/toolkit'
import { cartItems as items } from '../cart-items.js'

const initialState = {
  items: items,
  totalItems: items.reduce((total, item) => total + item.amount, 0),
  totalAmount: items.reduce((total, item) => total + item.price * item.amount, 0)
}

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.amount, 0)
}

const calculateTotalItems = (items) => {
  return items.reduce((total, item) => total + item.amount, 0)
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      state.items.splice(index, 1)
      state.totalItems = calculateTotalItems(state.items)
      state.totalAmount = calculateTotalAmount(state.items)
    },
    emptyCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.totalAmount = 0
    },
    increaseQty: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)

      state.items[index].amount += 1
      state.totalItems = calculateTotalItems(state.items)
      state.totalAmount = calculateTotalAmount(state.items)
    },
    decreaseQty: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      if (state.items[index].amount === 1) {
        state.items.splice(index, 1)
        state.totalItems = calculateTotalItems(state.items)
        state.totalAmount = calculateTotalAmount(state.items)
        return
      }

      if (state.items[index].amount > 0) {
        state.items[index].amount -= 1
        state.totalItems = calculateTotalItems(state.items)
        state.totalAmount = calculateTotalAmount(state.items)
      }
    }
  }
})

export const { emptyCart, increaseQty, decreaseQty, removeItem } = cart.actions

export default cart.reducer
