import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLike } from '../../store/likes';
// import { createAns, getInitialState } from '../../store/questions';
// import UserAnswerForm from '../Forms/UserAnswerForm';
// import OpenModalButton from '../OpenModalButton'

export default function DiscoverPage() {
    const dispatch = useDispatch()

    const login_user = useSelector(state => state.user.id)

    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState([]);
    // const [currentUser, setCurrentUser] = useState(users[0])

    const fetchusers = async () => {
        const response = await fetch('/api/discover');
        const responseData = await response.json();
        setUsers(responseData.users);
    }

    const liking = async () => {
        console.log('likingggggggggggggggggggg')
        setErrors([])
        //needed to ensure that it doesnt stay on rerender
        // skiplist.push(nextquestion.id)
        // setCurrentUser()
        return await dispatch(createLike(users[0].id, login_user))
        // .catch(async () => {
        //     //error handling here})
        //     setErrors()
        // })
        // .then(fetchusers())

    };

    useEffect(async () => {
        fetchusers()
        // fetchData();
    }, [dispatch]);
    console.log(users, users[0]?.id)


    return (<>
        <h1>Discover Page</h1>

        <div className='main-container'>
            <div>Current User Id is {users[0]?.id}</div>
            <div>First name: {users[0]?.['first name']}</div>
            <div>Last name: {users[0]?.['last name']}</div>
            <button onClick={() => liking()}>Like this user</button>
        </div>

    </>)
}
