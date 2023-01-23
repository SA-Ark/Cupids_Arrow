import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLike, deleteLike } from '../../store/likes';
import { getMatches } from '../../store/matches';
import { fetchUnliked } from '../../store/likes';
import UserCard from '../Cards/profile';
// import { createAns, getInitialState } from '../../store/questions';
// import UserAnswerForm from '../Forms/UserAnswerForm';
// import OpenModalButton from '../OpenModalButton'
import UserCard from '../Cards/profile';


export default function DiscoverPage() {
    const dispatch = useDispatch()
    const likesObj = useSelector(state => state.likes)
<<<<<<< HEAD
    const user = useSelector(state => state.user)
=======
    // console.log(likesObj, 'this is likesObj')
    const login_user = useSelector(state => state.user)
    const [index, setIndex] = useState(0);
>>>>>>> 70d24052daf5fc52b6750977fc10096c08b80905
    const [users, setUsers] = useState([]);
    const [unliked, setUnliked] = useState();
    const [errors, setErrors] = useState([]);
    console.log(likesObj, '!&!&!&!&!&!&&!&!&!&!')
    // const [currentUser, setCurrentUser] = useState(users[0])


    const fetchUnliked = async () => {
        const response = await fetch('/api/users/notlikes');
        const responseData = await response.json();

        setUnliked(responseData.users[0]);
    }


    useEffect(async ()=>{
        await dispatch(fetchUnliked())
    }, [])

    // console.log(responseData, 'this is notlikes resdata')
    // console.log(Array.from(responseData), 'RES DATA ARR')
    // console.log(responseData.users[0], 'res data at 0')

    const fetchusers = async () => {
        const response = await fetch('/api/discover');
        const responseData = await response.json();
        console.log(responseData, 'this is responseData')
        console.log(Object.values(responseData.userslikes), 'this is responseData userslikes')
        setUsers(Object.values(responseData.userslikes));
        // setMatch(users[i]);
    }

    const fetchlikes = async () => {
        const response = await fetch('/api/profile/likes');
        if (response.ok) {
            const responseData = await response.json();
            setUsers(responseData.users_likes);
        }
        else setErrors([])
    }

    // const fetchUser = async () => {
    //     const response = await fetch(`/api/users/${users[index]}`);
    //     if (response.ok) {
    //         const responseData = await response.json();
    //         setUserObj(responseData);
    //         console.log(userObj)
    //     }
    //     else setErrors([])
    // }

    // console.log(match, 'THIS IS MATCH')


    const deleteLikes = async () => {
        setErrors([])
        await dispatch(deleteLike(2, login_user))
            .then(fetchusers())
            .catch(async (res) => {
                if (res.errors) {
                    setErrors([...res.errors])
                }
            })
    }

    // console.log(users, 'THIS IS USERS')
    const liking = async () => {
        // console.log('likingggggggggggggggggggg')
        // needed to ensure that it doesnt stay on rerender
        // skiplist.push(nextquestion.id)
        // setCurrentUser()
        // , login_user
        // setErrors([])
        console.log(unliked?.id, 'unliked')
        await dispatch(createLike(unliked?.id))
            .then(fetchUnliked()).then(setIndex(index+1))
            .catch(async (res) => {
                if (res.errors) {
                    setErrors([...res.errors])
                }
            })
    };

    useEffect(() => {
        dispatch(fetchUnliked())
        // fetchusers()
        // fetchlikes()
=======
        await dispatch(getMatches())
        fetchusers()
        fetchlikes()
>>>>>>> 70d24052daf5fc52b6750977fc10096c08b80905
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
            <h1>Discover Page</h1>
            {person && <UserCard person={person[0]} />}
            {/* {
                <div className='main-container'>
                    <div>Current User Id is {unliked?.id}</div>
                    <div>First name: {unliked?.['first name']}</div>
                    <div>Last name: {unliked?.['last name']}</div>
                    <>
                    </>
                    </div>
                    <button onClick={() => {
                        liking();
                        // i++
                        // setMatch(users[i]);
                    }}> Like this user </button>
                } */}

            <div>

            </div>
        </>)
}
