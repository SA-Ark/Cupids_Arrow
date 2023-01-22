import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../store/details';
import { getImages } from '../../store/images';
import { fetchLikes } from '../../store/likes';
import { getMatches } from '../../store/matches';
import { createAns, getInitialState } from '../../store/questions';

export default function LikesPage() {
    const dispatch = useDispatch();
    const matches = useSelector(state => state.matches)

    const [match, setmatch] = useState([])
    const [users, setUsers] = useState([]);
    const [mylikes, setmylikes] = useState([]);
    const [likeme, setlikeme] = useState([]);

    const [idlikes, setidlikes] = useState([])
    const [idlikeme, setidlikeme] = useState([])

    const [matched, setmatched] = useState([])

    // console.log(matches, 'likes here')


    useEffect(async () => {
        console.log('okaufdgf')

        await dispatch(getMatches()).then()
        const response = await fetch('/api/users/likesme')
        const resData = await response.json();
        console.log(resData, 'Dataaaaaaaaaaaaaaaaaaaaa')
        //     .then(setidlikes(Object.values(matches?.likes)))
        //     .then(setidlikeme(Object.values(matches?.isliked)))
        // console.log(idlikes, 'idlikes')
        // console.log(idlikeme, 'idlikeme')
        //     ()
        // const responses = await fetch('/api/users/');
        // const responseData = await responses.json();
        // console.log(responseData, 'resData')
        // setUsers(responseData.users)
        // let likesUsers = users.filter(user => {
        //     return idlikes.includes(user.id)
        // })
        // setlikeme(likesUsers)
        // let likedUsers = users.filter(user => {
        //     return idlikeme.includes(user.id)
        // })
        // setmylikes(likedUsers)

        // let commonArr = idlikes.filter(id => idlikeme.includes(id))
        // let commonList = users.filter(user => {
        //     return commonArr.includes(user.id)
        // })
        // setmatched(commonList)


        // console.log(likeme, 'likesUserssssssssss')
        // console.log(mylikes, 'likedUserssssssssss')
        // console.log(matched, 'matched')

        // dispatch()
        // fetchusers()
        // fetchlikes()
    }, [dispatch]);



    return (<>
        <div>
            <div>You like</div>

        </div>
    </>)
}
