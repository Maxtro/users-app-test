import React from 'react'
import { connect } from 'react-redux'
import { getUsers, getTotalPages, getCurrentPage } from '../Redux/selectors'
import Users from './Users'
import { actions } from '../Redux/reducer'


const UsersContainer = React.memo((props) => {
        return <Users {...props}/>
    }
)

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalPages: getTotalPages(state),
        currentPage: getCurrentPage(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPage: (currentPage) => {
            dispatch(actions.setCurrentPage(currentPage))
            dispatch(actions.loadUsers())
        },
        setCurrentUser: () => {
            let clearUserData = {}
            dispatch(actions.setCurrentUser(clearUserData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer) 