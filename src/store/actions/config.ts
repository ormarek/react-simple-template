import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

const actionPrefix = 'CONFIG';

export const initializeApp = createAction(`${actionPrefix}/initializeApp`);

export const promise = createAsyncThunk(`${actionPrefix}/promise`, (shouldResolve: boolean | undefined = true, thunkAPI) => {
  return new Promise((resolve, reject) => setTimeout(shouldResolve ? resolve : reject, 2500));
})
