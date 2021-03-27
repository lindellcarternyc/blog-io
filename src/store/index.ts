import { configureStore } from '@reduxjs/toolkit'

// import postsState from './reducer/posts.reducer'
import userState from './reducer/user.reducer'
import postsState from './features/posts/posts.slice'

const initStore = () => {
  const store = configureStore({
    reducer: {
      postsState,
      userState
    }
  })

  return store
}

const store = initStore()
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch