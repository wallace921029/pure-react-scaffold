import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './modules/counter-slice'

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer
  }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
