import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import AddUser from './AddUser'
import { actions } from '../Redux/reducer'


const AddUserForm = reduxForm({form: 'addUser'})(AddUser)

const AddUserContainer = (props) => {

    const onSubmit = () => {
        props.addUser()
      }

    return <AddUserForm onSubmit={onSubmit}  />
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: () => {
            dispatch(actions.addUser())
        }
    }
}

export default connect(null, mapDispatchToProps)(AddUserContainer)