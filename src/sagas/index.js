import { takeLatest, all, put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../types';

function* getInterventions(_action) {
  const { data: interventions } = yield call(axios.get, '/interventions');

  yield put({ type: types.RECEIVE_INTERVENTIONS, interventions });
}


function* createIntervention({ history, payload }) {
  const result = yield call(axios.post, '/interventions', payload, { headers: { "Content-Type": "multipart/form-data" }  });

  const { interventionid: interventionId } = result.headers;

  yield* getInterventions();

  history.push(interventionId);
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_INTERVENTIONS, getInterventions),
    takeLatest(types.CREATE_INTERVENTION, createIntervention),
  ])
}
