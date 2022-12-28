import React from 'react';
import { useSelector } from 'react-redux';
import {
  appInitializedSelector, initializeApp, promise,
  promiseSelector, useAppDispatch,
} from '../../store';

import './Home.css';

export const Home = () => {
  const dispatch = useAppDispatch();
  const isAppInitialized = useSelector(appInitializedSelector);
  const getPromise = useSelector(promiseSelector);

  return (
    <div className="home">
      Hello world
      <div className="row">
        <div>{`App initialized: ${isAppInitialized}`}</div>
        <button onClick={() => dispatch(initializeApp())}>Initialize app</button>
      </div>
      <div className="row">
        <div>{`Promise: ${getPromise}`}</div>
        <button onClick={async () => await dispatch(promise())}>Promise {'->'} resolve</button>
        <button onClick={async () => await dispatch(promise(false))}>Promise {'->'} reject</button>
      </div>
    </div>
  );
}
