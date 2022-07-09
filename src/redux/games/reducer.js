import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	currentGame: null
}

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		setCurrentGame: (state, action) => {
			state.currentGame = action.payload
		}
	}
})

export const {setCurrentGame} = gamesSlice.actions
export const gamesReducer = gamesSlice.reducer