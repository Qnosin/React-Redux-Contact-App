import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import { TableActions,idActions } from '../store/store';
import { useNavigate } from 'react-router-dom';
import profilePic from '../image/person-profile.svg';
import {motion} from 'framer-motion';
import { useState } from 'react';
function Main({className}) {
   const [isdeleting,setIsDeleting] = useState(false);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let peopleData = useSelector((state) => state.table.peoples);

    const deleteHandle = (id) =>{
      dispatch(TableActions.delete(id))
      setIsDeleting(true);
    }
  return (
    <main className={className}>
        <motion.table animate={{scale:1}} initial={{scale:0}}  transition={{type:'tween'}}>
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
                <motion.tr animate={{y: 0,opacity:1}} initial={{y:200,opacity:0}} transition={{type: "spring", stiffness: 60}}>
                    <td><span className='on__small__screen'>id:</span>{people.id}</td>
                    <td><span className='on__small__screen'>name:</span>{people.name}</td>
                    <td><span className='on__small__screen'>email:</span>{people.email}</td>
                    <td><span className='on__small__screen'>phone:</span>{people.Phone}</td>
                    <td><button className='edit' onClick={()=> navigate(`/edit/${people.id}`)}>Edit</button></td>
                    <td><button className='delete'  onClick={()=> deleteHandle(people.id)}>Delete</button></td>
                </motion.tr>
                )
            })}
            </tbody>
        </motion.table>
        <motion.img animate={{scale:1}} transition={{type:'tween'}} initial={{scale:0}} className='profile-pic' src={profilePic} alt='profile'></motion.img>
    </main>
  )
}

export default Main