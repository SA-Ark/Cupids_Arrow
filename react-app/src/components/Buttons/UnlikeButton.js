import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteLike } from '../../store/likes';
import { fetchUnliked } from '../../store/likes';
import { passOnPerson } from '../../store/likes';

export function UnlikeButton(userid) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState([])
    // setErrors([])

    const unlike = async () => {
        setErrors([])
        // return await dispatch(deleteLike(userid)).then(() =>
        return await dispatch(passOnPerson())
        // .then(() =>
        // dispatch(fetchUnliked()))
        .then(()=>
        history.push('/discover'))
            .catch(async (res) => {
                const response = await res.json()
                if (response.errors) setErrors([...response])
            })
    }



    return (<>
             {errors.map((error, ind) => (
                 <div key={ind}>{error}</div>
             ))}
             <button type='button' onClick={unlike}>Pass✄</button>
        </>)

}
