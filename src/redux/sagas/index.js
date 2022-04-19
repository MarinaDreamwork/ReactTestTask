import { put, takeEvery, call } from 'redux-saga/effects';
import { getImages } from '../../api/index';
import { setImages } from '../actions/actionCreator';
import { GET_IMAGES, SET_IMAGES_ERROR } from '../constants';

export function* workerSaga() {
  try {
    const data  = yield call(getImages);
    yield put(setImages(data));
  } catch {
    yield put({type: SET_IMAGES_ERROR, payload: 'Error fetching images'});
  }
 
}

export function* watchClickSaga() {
  yield takeEvery(GET_IMAGES, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}


