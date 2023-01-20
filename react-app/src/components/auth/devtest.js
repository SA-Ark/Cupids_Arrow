import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, tester } from '../../store/session';

export default function Devtest() {
    console.log('Hey')
    const [url, setUrl] = useState('');

    const dispatch = useDispatch()

    const userId = useSelector(state => state.session.user.id);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let jsonbody = { user_id: userId, image_url: url, preview: true }
        const data = await dispatch(tester(jsonbody));
        if (data.errors) {
            console.log('okay')
            // setErrors(data);
        } else {
            console.log(data)
            return (<h1>Success!</h1>)
        }
    };

    const updateUrl = (e) => {
        setUrl(e.target.value);
    };

    if (!userId) {
        return <Redirect to='/' />;
    }

    // useEffect(() => {
    //     if (!userId) {
    //         return;
    //     }
    //     (async () => {
    //         const response = await fetch(`/api/users/${userId}`);
    //         const user = await response.json();
    //         setUser(user);
    //     })();
    // }, [userId]);


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    <div>
                        <input
                            name='url'
                            type='text'
                            placeholder='Url here'
                            value={url}
                            onChange={updateUrl}
                        />
                    </div>
                </ul>
                <button type='submit'>Submit!!!!!!</button>
            </form>
        </div>
    );
}
