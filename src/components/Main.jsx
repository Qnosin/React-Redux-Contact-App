import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import { TableActions,idActions } from '../store/store';
function Main({className}) {
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
                    <td>{people.id}</td>
                    <td>{people.name}</td>
                    <td>{people.email}</td>
                    <td>{people.Phone}</td>
                    <td><button>Edit</button></td>
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