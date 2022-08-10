import { configureStore } from '@reduxjs/toolkit'
import annonceReducer from '../features/Annonces/annonceSlice'
export default configureStore({
  reducer: {
    //users:userReducer,
    annonce:annonceReducer,
    //comments:commentsReducer
  }
})