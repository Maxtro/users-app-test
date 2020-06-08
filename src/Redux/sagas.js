import { put, takeEvery, select } from 'redux-saga/effects'
import {LOAD_USERS, LOAD_CURRENT_USER, UPDATE_USER, DELETE_USER, ADD_USER, actions} from './reducer'
import { Api } from './Api'
import { getPage, getUserId, getFormData, getAddForm } from './selectors'

export function* watchLoadUsers(){
   yield takeEvery(LOAD_USERS, workLoadUsers)
   yield takeEvery(LOAD_CURRENT_USER, workLoadCurrentUser)
   yield takeEvery(UPDATE_USER, workUpdateUser)
   yield takeEvery(DELETE_USER, workDeleteUser)
   yield takeEvery(ADD_USER, workAddUser)

}

function* workLoadUsers(){
    let page = yield select(getPage)
    const usersData = yield Api.loadUsers(page)
    yield put(actions.setTotalPages(usersData.data.total_pages))
    yield put(actions.setUsers(usersData.data.data))
}


function* workLoadCurrentUser(){
    let userId = yield select(getUserId)
    try{
        const userData = yield Api.loadCurrentUser(userId)
        yield put(actions.setCurrentUser(userData.data.data))
    }catch(error){
        console.log(error)
    }
}

function* workUpdateUser(){
    let userId = yield select(getUserId)
    let formData = yield select(getFormData)
    try{
        yield Api.updateUser(userId, formData.values)
    }catch(error){
        console.log(error)
    }
}

function* workDeleteUser(){
    let userId = yield select(getUserId)
    try{
        yield Api.deleteUser(userId)
    }catch(error){
        console.log(error)
    }
}

function* workAddUser(){
    let formAddData = yield select(getAddForm)
    try{
        yield Api.addUser(formAddData.values)
    }catch(error){
        console.log(error)
    }
}