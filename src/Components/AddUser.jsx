import React, { useState } from 'react'
import { Field } from 'redux-form'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import style from './users.module.css'

const AddUser = ({handleSubmit}) => {

    const[isRedirect, setRedirect] = useState(false)

    const inputComponent = ({ input, type }) => {
        return (
            <input name={input.name} type={type} onChange={event => handleChange(event, input)}/>
        )
      }

    const handleChange = (event, input) => {
        event.preventDefault();
        let imageFile = event.target.files[0];
        input.onChange(imageFile);
      }

    const redirectToMainPage = () => {
        setTimeout(() => {
            setRedirect(true)
        }, 1000)
    }

    if(isRedirect) return <Redirect to={'/'} />

    return <>
        <div className={style.user}>
            <form onSubmit={handleSubmit}>
                <Field placeholder={'First name'} component={'input'} type={'text'} name={'first_name'} />
                <Field placeholder={'Last name'} component={'input'} type={'text'} name={'last_name'} />
                <Field placeholder={'Email'} component={'input'} type={'text'} name={'email'} />
                <Field name="avatar" type="file" component={inputComponent} />
                <p></p>
                <div><button onClick={redirectToMainPage} type='submit'>Сохранить</button></div>
            </form>
        </div>
        <NavLink to={'/'}>
            <div className={style.link}>Назад</div>
        </NavLink>
    </>
}

export default AddUser