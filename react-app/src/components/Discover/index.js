import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLike, deleteLikes } from '../../store/likes';
import { getMatches } from '../../store/matches';
import { fetchUnliked } from '../../store/likes';
import UserCard from '../Cards/profile';
// import { createAns, getInitialState } from '../../store/questions';
// import UserAnswerForm from '../Forms/UserAnswerForm';
// import OpenModalButton from '../OpenModalButton'
export default function DiscoverPage() {
    const dispatch = useDispatch()
    const likesObj = useSelector(state => state.likes)
    const user = useSelector(state => state.user)
    const [users, setUsers] = useState([]);
    const [match, setMatch] = useState()
    const [errors, setErrors] = useState([]);
    console.log(likesObj, '!&!&!&!&!&!&&!&!&!&!')
    // const [currentUser, setCurrentUser] = useState(users[0])

    // const fetchusers = async () => {
    //     const response = await fetch('/api/discover');
    //     const responseData = await response.json();
    //     // console.log(responseData, 'this is responseData')
    //     setUsers(responseData.users);
    //     // setMatch(users[i]);
    // }
    // const fetchlikes = async () => {
    //     const response = await fetch('/api/profile/likes');
    //     if (response.ok) {
    //         const responseData = await response.json();
    //         setUsers(responseData.users_likes);
    //     }
    //     else setErrors([])
    // }

    // console.log(match, 'THIS IS MATCH')
    // const deleteLike = async () => {
    //     setErrors([])
    //     await dispatch(deleteLikes(users[i].id, login_user))
    //         .then(fetchusers())
    //         .catch(async (res) => {
    //             if (res.errors) {
    //                 setErrors([...res.errors])
    //             }
    //         })

    // }
    // const liking = async () => {
    //     // console.log('likingggggggggggggggggggg')
    //     //needed to ensure that it doesnt stay on rerender
    //     // skiplist.push(nextquestion.id)
    //     // setCurrentUser()
    //     setErrors([])
    //     await dispatch(createLike(users[i].id, login_user))
    //         // .then(fetchusers())
    //         .catch(async (res) => {
    //             if (res.errors) {
    //                 setErrors([...res.errors])
    //             }
    //         })
    // };

    useEffect(() => {
        dispatch(fetchUnliked())
        // fetchusers()
        // fetchlikes()
    }, [dispatch]);
    // console.log(users)
    // print(users)
    // console.log(users)''
    let person
    if (likesObj?.nolike) {
        person = likesObj?.nolike?.users
    }
    // likesObj = likesObj?.nolikes[0]
    console.log(person, '&&&&&&&&&&&&&&&&&&')
    return (
        <>
            
            {person && <UserCard person={person[0]} />}
            {/* {
                <div className='main-container'>
                    <div>Current User Id is {users[i]?.id}</div>
                    <div>First name: {users[i]?.['first name']}</div>
                    <div>Last name: {users[i]?.['last name']}</div>
                    <>
                    </>
                    </div>
                    <button onClick={() => {
                        liking();
                        i++
                        setMatch(users[i]);
                    }}> Like this user </button>
                } */}

            <div>

            </div>
        </>)
}
