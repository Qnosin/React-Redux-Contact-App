import React from 'react'
import { TableActions,idActions } from '../store/store'
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate} from 'react-router-dom';
function FormPage({className}) {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let idState = useSelector((state) => state.id.id)

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(idActions.plus())
        let name = e.target.name.value
        let email =  e.target.email.value
        let phone = e.target.phone.value
        //add verification if the name exist
        let object = {
            id : idState ,
            name : name,
            email : email,
            Phone : phone,
        }
        dispatch(TableActions.add(object))
        navigate('/');
    }
  return (
    <section className={className}>
    <h1>Add New</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='name'>Name:</label>
        <input required name='name' type='text'></input>
        <label htmlFor='email'>email:</label>
        <input required name='email' type='email'></input>
        <label htmlFor='phone'>Phone:</label>
        <input required name='phone' type='tel'></input>
        <input type="submit" value='Add' className='Submit__btn' ></input>
    </form>
</section>
  )
}

export default FormPage