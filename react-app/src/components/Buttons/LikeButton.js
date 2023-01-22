import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createLike } from '../../store/likes';




export default async function LikeButton(userid) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const like = async () => {
        setErrors([])
        await dispatch(createLike(userid))
            .catch(async (res) => {
                const response = await res.json()
                if (response.errors) setErrors([...response])
            })
    }

    errors.length ? (<div>
        {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
        ))}
    </div>) : <button type='button' onClick={like}>♥Like♥</button>;
};



// .catch(async (res) => {
    //             if (res.errors) {
    //                 setErrors([...res.errors])
    //             }
    //         })