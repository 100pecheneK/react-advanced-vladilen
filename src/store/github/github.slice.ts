import {
  bindActionCreators,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { LocalStorage } from '../../utils/localstorage'
const FAV_KEY = 'FAV_KEY'

const favLocalStorage = new LocalStorage<string[]>(FAV_KEY, [])

interface GitHubState {
  favourites: string[]
}

const initialState: GitHubState = {
  favourites: favLocalStorage.get(),
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      favLocalStorage.set(state.favourites)
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(f => f !== action.payload)
      favLocalStorage.set(state.favourites)
    },
  },
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer

export const useGithubActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(githubActions, dispatch)
}
