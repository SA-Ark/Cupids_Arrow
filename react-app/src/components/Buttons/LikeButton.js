import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createLike, fetchUnliked } from '../../store/likes';




export default function LikeButton(userid) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState([])
    let id = userid



    async function like() {
        setErrors([])
        return await dispatch(createLike(userid)).then(() => dispatch(fetchUnliked()))
            .then(() => dispatch(fetchUnliked()))
            .then(() => history.push('/discover'))
            .catch(async (res) => {
                if (!res.ok) setErrors([])
            })
    }

    return (
        <>
            {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
            ))}
            <button type='button' onClick={like}>♥Like♥</button>
        </>
    )
};