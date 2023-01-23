import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../store/details';
import { getImages } from '../../store/images';
import { fetchLikes } from '../../store/likes';
import { getMatches } from '../../store/matches';
import { createAns, getInitialState } from '../../store/questions';
import { SmallProfile } from '../Cards/smallprofile';

export default function LikesPage() {
    const dispatch = useDispatch();
    const matches = useSelector(state => state.matches)
    const [match, setmatch] = useState([])
    const [users, setUsers] = useState([]);
    const [mylikes, setmylikes] = useState([]);
    const [likesme, setlikesme] = useState([]);

    const [tab, settab] = useState(true)

    const [isLoaded, setisloaded] = useState(false)
    // const [idlikes, setidlikes] = useState([])
    // const [idlikeme, setidlikeme] = useState([])

    // const [matched, setmatched] = useState([])

    // console.log(matches, 'likes here')


    useEffect(async () => {
        console.log('okaufdgf')

        // await dispatch(getMatches()).then()
        const response = await fetch('/api/users/likesme')
        const resData = await response.json();
        console.log(resData, 'Dataaaaaaaaaaaaaaaaaaaaa')

        setlikesme(resData)

        const response2 = await fetch('/api/users/likes')
        const resData2 = await response2.json();
        console.log(resData2)

        setmylikes(resData2)

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
        setisloaded(true)
    }, [dispatch, tab]);

    const liked = () => {
        settab(true)
    }

    const likes = () => {
        settab(false)
    }

    const mylikeslist = Object.keys(mylikes).map((id) => {
        return (<>
            <SmallProfile theuser={mylikes[id]} />
        </>)
    })

    const likesmelist = Object.keys(likesme).map((id) => {
        return (<>
            <SmallProfile theuser={likesme[id]} />
        </>)
    })

    return isLoaded && (<>
        <div>
            <button onClick={() => liked()}>You like</button>
            <button onClick={() => likes()}>Likes you</button>
        </div>
        {(tab == true) ? <div>
            <h2>test1</h2>
            {mylikeslist}
        </div> :
            <div>
                <h2>test2</h2>
                {likesmelist}
            </div>
        }
    </>)
}
