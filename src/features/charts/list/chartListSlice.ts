import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../../app/store';
import api from '../../../core/net';

interface ChartListState {
    playlists: Playlist[]
}
const initialState: ChartListState = {
    playlists: []
}

export const chartsSlice = createSlice({
    name: 'top100Charts',
    initialState,
    reducers: {
        saveCharts: (state, charts : PayloadAction<Playlist[]>) => {
            state.playlists = charts.payload
        },
    }
})
export const {saveCharts} = chartsSlice.actions;

export const getCharts = (isTop100: boolean): AppThunk => async dispatch  => {
    const queryString = isTop100 ? '?isTop100=true' : '?isTop100=false'

    const res = await api('/api/charts' + queryString)
    dispatch(saveCharts(res))
}

export const selectCharts = (state: RootState) => state.charts.playlists;

export default chartsSlice.reducer;
