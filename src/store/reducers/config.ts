import { createReducer } from '@reduxjs/toolkit';

import { initializeApp, promise } from '../actions';

export interface ConfigState {
  appInitialized: boolean;
  promise: 'none' | 'pending' | 'resolved' | 'rejected';
}

export const initialState: ConfigState = {
  appInitialized: false,
  promise: 'none',
};

export const configReducer = createReducer(
  initialState,
  builder => builder
    .addCase(initializeApp, state => {
      state.appInitialized = true;
    })
    .addCase(promise.pending, state => {
      state.promise = 'pending';
    })
    .addCase(promise.fulfilled, state => {
      state.promise = 'resolved';
    })
    .addCase(promise.rejected, state => {
      state.promise = 'rejected';
    })
);
