import React from 'react'
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { TableActions } from '../store/store';
import {useNavigate} from 'react-router-dom';

function UpdateFormPage({className}) {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const { id } = useParams();
    const TablesWithData = useSelector((state) => state.table.peoples)
    const TableWithOurData = TablesWithData.filter((people) =>{
        return people.id === Number(id)
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        let name = e.target.name.value
        let email = e.target.email.value
        let phone = e.target.phone.value
        let object = {
            id : Number(id),
            name : name,
            email : email,
            Phone : phone,
        }
        dispatch(TableActions.Update(object))
        navigate('/')
    }
  return (
    <div className={className}>
    <form onSubmit={(e)=>handleSubmit(e)}>
        {TableWithOurData.map((data) =>{
            return(
                <>
                <label htmlFor='name'>Name:</label>
                <input required type='text' name='name'  defaultValue={data.name} placeholder={data.name}></input>
                <label htmlFor='email'>email:</label>
                <input required type='email' name='email' defaultValue={data.email} placeholder={data.email}></input>
                <label htmlFor='phone'>phone:</label>
                <input required type='tel' name='phone' defaultValue={data.Phone} placeholder={data.Phone}></input>
                <input type='submit' value='Update'></input>
                </>
            )
        })}
    </form>
</div>
  )
}

export default UpdateFormPage