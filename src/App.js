import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configureStore, { sagaMiddleware } from './store';
import rootSaga from './sagas';

import Header from './components/Header';
import InterventionsList from './containers/InterventionsList';
import Intervention from './containers/Intervention';
import InterventionForm from './containers/InterventionForm';


const store = configureStore();
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router >
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact>
              <InterventionsList />
            </Route>
            <Route path="/new" exact>
              <InterventionForm />
            </Route>
            <Route path="/:interventionId" exact>
              <Intervention />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
