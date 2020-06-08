export const LOAD_USERS = 'USERS/LOAD_USERS'
const SET_USERS_DATA = 'USERS/SET_USERS_DATA'
export const SET_TOTAL_PAGE = 'USERS/SET_TOTAL_PAGE'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
export const LOAD_CURRENT_USER = 'USERS/LOAD_CURRENT_USER'
const SET_CURRENT_USER = 'USERS/SET_CURRENT_USER'
const SET_USER_ID = 'USERS/SET_USER_ID'
export const UPDATE_USER = 'USERS/UPDATE_USER'
const SET_EDIT_MODE = 'USERS/SET_EDIT_MODE'
export const DELETE_USER = 'USERS/DELETE_USER'
export const ADD_USER = 'USERS/ADD_USER'

let initialState = {
    users: [],
    currentUser: {},
    userId: 1,
    editMode: false,
    total_pages: 0,
    page: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS_DATA: {
            return { ...state, users: action.users }
        }

        case SET_TOTAL_PAGE: {
            return { ...state, total_pages: action.totalPages }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, page: action.currentPage }
        }
        
        case SET_CURRENT_USER: {
            return { ...state, currentUser: action.currentUser }
        }

        case SET_USER_ID: {
            return { ...state, userId: action.userId }
        }

        case SET_EDIT_MODE: {
            return { ...state, editMode: action.editMode }
        }

        default:
            return state
    }
}

export const actions = {
    loadUsers: () => ({ type: LOAD_USERS }),
    setUsers: (users) => ({ type: SET_USERS_DATA, users}),
    setTotalPages: (totalPages) => ({ type: SET_TOTAL_PAGE, totalPages }),
    setCurrentPage: (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage }),
    loadCurrentUser: () => ({ type: LOAD_CURRENT_USER }),
    setCurrentUser: (currentUser) => ({ type: SET_CURRENT_USER, currentUser }),
    setUserId: (userId) => ({ type: SET_USER_ID, userId }),
    updateUser: () => ({ type: UPDATE_USER }),
    setEditMode: (editMode) => ({ type: SET_EDIT_MODE, editMode }),
    deleteUser: () => ({ type: DELETE_USER }),
    addUser: () => ({ type: ADD_USER })
}

export default reducer
