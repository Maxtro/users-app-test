import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field } from 'redux-form'
import style from './users.module.css'

const UserDetails = ({currentUser, handleSubmit, editMode, setEditMode, deleteUser}) => {

    const onEdit = () => {
        setEditMode(true)
    }

    const UserData = () => {

        const onDeleteUser = () => {
            deleteUser()
        }

        return (
            <>
            <div>
                <img src={currentUser.avatar} style={{ borderRadius: 10 }} alt={''} />
                {/* <input type={'file'} /> */}
            </div>
            <div>
                <b>{currentUser.first_name}</b>
                <div>{currentUser.last_name}</div>
                <div style={{ fontSize:13 }}>{currentUser.email}</div>
                <p></p>
                <div> <button onClick={onEdit}>Редактировать</button></div>
                <p></p>
                <div> 
                    <NavLink to={'/'}>
                    <button onClick={onDeleteUser}>Удалить</button>
                    </NavLink>
                </div>
                
            </div>
        </>
        )
    }

    const UserDataForm = () => {
        return <>
            <div><img src={currentUser.avatar} style={{ borderRadius: 10 }} alt={''} /></div>
            <form onSubmit={handleSubmit}>
                <Field placeholder={currentUser.first_name} component={'input'} type={'text'} name={'first_name'} />
                <Field placeholder={currentUser.last_name} component={'input'} type={'text'} name={'last_name'} />
                <Field placeholder={currentUser.email} component={'input'} type={'text'} name={'email'} />
                <p></p>
                <div> <button type='submit'>Сохранить</button></div>
            </form>
        </>
    }

    return <>
                <div className={style.user}>
                    {
                        currentUser ? 
                        editMode ? <UserDataForm />  : <UserData />
                        : null
                    }
                </div>
                <NavLink to={'/'}>
                    <div className={style.link}>Назад</div>
                </NavLink>
            </>
}

export default UserDetails