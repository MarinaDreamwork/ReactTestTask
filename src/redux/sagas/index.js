import { takeEvery } from 'redux-saga/effects';
import { getImages } from '../../api/index';
import { GET_IMAGES } from '../constants';

export function* workerSaga() {
  const data = yield getImages();
  console.log('data', data);
}

export function* watchClickSaga() {
  yield takeEvery(GET_IMAGES, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}


