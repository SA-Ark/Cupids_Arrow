import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteLike } from '../../store/likes';

export const UnlikeButton = async (userid) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState([])
    setErrors([])

    const unlike = async () => {
        setErrors([])
        return await dispatch(deleteLike(userid))
            .catch(async (res) => {
                const response = await res.json()
                if (response.errors) setErrors([...response])
            })
    }
    errors.length ? (<div>
        {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
        ))}
    </div>) : <button type='button' onClick={unlike}>Pass✄</button>;

}


// .catch(async (res) => {
    //             if (res.errors) {
    //                 setErrors([...res.errors])
    //             }
    //         })