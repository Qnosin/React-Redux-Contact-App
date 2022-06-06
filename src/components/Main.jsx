import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import { TableActions,idActions } from '../store/store';
import { useNavigate } from 'react-router-dom';
function Main({className}) {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let peopleData = useSelector((state) => state.table.peoples);

    const deleteHandle = (id) =>{
      dispatch(TableActions.delete(id))
    }
  return (
    <main className={className}>
        <table>
            <thead>
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                </tr>
            </thead>
            <tbody>
            {peopleData.map((people) =>{
                console.log(people)
                return (
                <tr>
                    <td><span className='on__small__screen'>id:</span>{people.id}</td>
                    <td><span className='on__small__screen'>name:</span>{people.name}</td>
                    <td><span className='on__small__screen'>email:</span>{people.email}</td>
                    <td><span className='on__small__screen'>phone:</span>{people.Phone}</td>
                    <td><button onClick={()=> navigate(`/edit/${people.id}`)}>Edit</button></td>
                    <td><button onClick={()=> deleteHandle(people.id)}>Delete</button></td>
                </tr>
                )
            })}
            </tbody>
        </table>
    </main>
  )
}

export default Main