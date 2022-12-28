import { createSelector } from "@reduxjs/toolkit";
import { RootReducer } from "../reducers";

const configState = (state: RootReducer) => state.config;

export const appInitializedSelector = createSelector(configState, ({ appInitialized }) => appInitialized)
export const promiseSelector = createSelector(configState, ({ promise }) => promise)
