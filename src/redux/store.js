import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/reducer"
import {gamesReducer} from "./games/reducer";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
	cart: cartReducer,
	game: gamesReducer
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: 'game'
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)
