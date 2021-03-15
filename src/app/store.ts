import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chartsReducer from '../features/charts/list/chartListSlice'
export const store = configureStore({
  reducer: {
    charts: chartsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
