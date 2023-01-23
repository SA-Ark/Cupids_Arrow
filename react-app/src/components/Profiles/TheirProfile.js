//get user by id
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, NavLink, Redirect } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import UserCard from '../Cards/profile'
import UpdateInfo from '../Forms/UpdateInfoForm';
import { useParams } from 'react-router-dom';
import { fetchLikes } from '../../store/likes';


export default function TheirProfile() {
    const history = useHistory()
    const dispatch = useDispatch()
    const {id} = useParams()
    const [errors, setErrors] = useState([])


    const getLike = async (id) => dispatch(fetchLikes(id))
    .catch(async (res) => {
      const response = await res.json()
      if (response.errors) setErrors([...response])
    })


    // const { id, first_name, gender, biography, city,
    //     state, age, weight, kids, relationship_goal,
    //     race, inebriants, religion } = match
    ///DETERMINE BY STATE DIAGRAM
    const user = useSelector(state => state.details)


    // let myQuestions = answers.filter(x => x.user_id == myID)
    // let theirQuestions = answers.filter(x => x.user_id == id)

    // if (!myID) return null;

    // return (<>
    //     <h1>yo mama</h1>
    // </>)


    return user &&(
      <>
        <UserCard person={user[id]} />
      </>
    )
  }
