import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserDetails from './UserDetails'
import { getCurrentUser, getEditMode } from '../Redux/selectors'
import { actions } from '../Redux/reducer'

const UserDataForm = reduxForm({form: 'editUser'})(UserDetails)

const UserDetailsContainer = (props) => {

  let userId = props.match.params.id
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.setUserId(userId))
    dispatch(actions.loadCurrentUser())
  },[dispatch, userId])

  const onSubmit = () => {
    dispatch(actions.updateUser())
    dispatch(actions.setUserId(userId))
    dispatch(actions.loadCurrentUser())
    props.setEditMode(false)
  }

    return <UserDataForm 
        currentUser = {props.currentUser} onSubmit={onSubmit} 
        editMode={props.editMode} setEditMode={props.setEditMode}
        deleteUser={props.deleteUser}
    />
}

let mapStateToProps = (state) => {
    
    return {
      currentUser: getCurrentUser(state),
      editMode: getEditMode(state)
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
      setEditMode: (editMode) => {
          dispatch(actions.setEditMode(editMode))
      },
      deleteUser: () => {
        dispatch(actions.deleteUser())
      } 
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
) (UserDetailsContainer)