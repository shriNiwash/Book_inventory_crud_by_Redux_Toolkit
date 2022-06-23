import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Components/counter/Counterslice';


export const store = configureStore({
  reducer: {users:CounterReducer},
  devTools: true,
})

export default store;