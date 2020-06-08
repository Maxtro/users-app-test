import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './users.module.css'

const Users = ({ users, totalPages, currentPage, setCurrentPage, setCurrentUser }) => {

    const List = () => {

        const clearCurrentPageData = () => {
            setCurrentUser()
        }

        return (
            <div>
                {
                    users.map(user => {
                        return(
                            <div className={style.user} key={user.id}>
                                <div><b>{user.first_name}</b> {user.last_name}</div>
                                <div>
                                    <NavLink to={`/user/${user.id}`}>
                                        <button onClick={clearCurrentPageData} className={style.button}>Подробнее</button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const pages = []
    for(let i=1; i <= totalPages; i++){
        pages.push(i)
    }
        
        return <>
            <div>
                <div style={{ textAlign: "center" }}>
                    {
                        pages.map(page => {
                            return <span key={page}>
                                    <span 
                                        onClick={() => {setCurrentPage(page)}} 
                                        className={ currentPage === page ? 
                                        style.selected : style.pagenator } >
                                        { page }
                                    </span>&nbsp;
                                    </span>
                        })
                    }
                </div>
                <List users={users} />
                <div style={{ textAlign: 'center' }}>
                    <NavLink to={'/add-user'}>
                        <button className={`${style.button_add} ${style.button}`}>Добавить</button>
                    </NavLink>
                </div>
                
            </div>
        </>
    }

export default Users