import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLike } from '../../store/likes';
// import { createAns, getInitialState } from '../../store/questions';
// import UserAnswerForm from '../Forms/UserAnswerForm';
// import OpenModalButton from '../OpenModalButton'

export default function DiscoverPage() {
    const dispatch = useDispatch()
    const likesObj = useSelector(state => state.likes)
    console.log(likesObj, 'this is likesObj')
    const login_user = useSelector(state => state.user.id)
    let i = 0
    const [users, setUsers] = useState([]);
    const [match, setMatch] = useState()
    const [errors, setErrors] = useState([]);
    // const [currentUser, setCurrentUser] = useState(users[0])

    const fetchusers = async () => {
        const response = await fetch('/api/discover');
        const responseData = await response.json();
        console.log(responseData, 'this is responseData')
        setUsers(responseData.users);
        // setMatch(users[i]);
    }
    console.log(match, 'THIS IS MATCH')

    const liking = async () => {
        console.log('likingggggggggggggggggggg')
        //needed to ensure that it doesnt stay on rerender
        // skiplist.push(nextquestion.id)
        // setCurrentUser()
        setErrors([])
        await dispatch(createLike(users[i].id, login_user)).then(fetchusers()).catch(async (res) => {
            if (res.errors) {
                setErrors([...res.errors])
            }
        })
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
    console.log(users)

    return (<>
        <h1>Discover Page</h1>
        {
            <div className='main-container'>
                <div>Current User Id is {users[i]?.id}</div>
                <div>First name: {users[i]?.['first name']}</div>
                <div>Last name: {users[i]?.['last name']}</div>
                <button onClick={() => {
                    liking();
                    i++
                    setMatch(users[i]);
                }}>Like this user</button>
            </div>
        }

    </>)
}
