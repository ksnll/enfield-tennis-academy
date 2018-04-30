import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import ScoreboardContainer from './components/ScoreboardContainer';
import gameReducer from './game/reducers';
import rootSaga from './game/sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(gameReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <ScoreboardContainer />
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('app'));
