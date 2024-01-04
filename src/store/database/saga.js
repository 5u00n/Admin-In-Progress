// database/sagas.js
import { put, takeLatest, call, fork, take, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'; 
import { getFirebaseBackend } from '../../helpers/firebase_helper';
import { FETCH_DATA_REQUEST } from './actionTypes';

import {
  fetchDataSuccess,
  fetchDataFailure,
} from './actions';

/*function* fetchData() {
  try {
   // const dataSnapshot = yield firebase.database().ref('your_data_path').once('value');
    const data = yield call(getFirebaseBackend().fetchDataRequest,"data");
    //console.log("Sagas data ----------------------------------\n",data);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}
*/


function* fetchData(action) {
  try {
    const { path } = action.payload;
    //console.log("Sagas data  new ----------------------------------\n",path);
    const dataRef = yield call(getFirebaseBackend().fetchDataRef,path);

    const channel = yield call(createEventChannel, dataRef);

    while (true) {
      const data = yield take(channel);
      if(data!=null){
      //console.log("Sagas data  new ++ ----------------------------------\n",data);
      yield put(fetchDataSuccess(data));
      }else{
        break;
      }
    }
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function createEventChannel(dataRef) {
  return eventChannel((emit) => {
    const callback = (snapshot) => emit(snapshot.val());
    dataRef.on('value', callback);

    // Return unsubscribe function to clean up when the saga is canceled
    const unsubscribe = () => dataRef.off('value', callback);
    return unsubscribe;
  });
}

function* watchFetchData() {
  const task = yield takeLatest(FETCH_DATA_REQUEST, fetchData);

  // If you want to cancel the saga on some condition, you can use the following:
  // yield take(SOME_CONDITION_TO_CANCEL);
  // yield cancel(task);
}

export default function* databaseSaga() {
  yield fork(watchFetchData);
  // Add other sagas as needed
}