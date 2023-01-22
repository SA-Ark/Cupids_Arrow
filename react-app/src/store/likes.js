const CREATE_LIKE = 'likes/CREATE_LIKES'
const FETCH_MY_LIKES = 'likes/FETCH_LIKES'
const DELETE_LIKE = 'likes/DELETE_LIKES'
const FETCH_LIKES = 'likes/FETCH_LIKES'
const FETCH_LIKED_BY = 'likes/FETCH_LIKED_BY'


const create_like = (ansObj) => ({
    type: CREATE_LIKE,
    payload: ansObj
})


const del_like = (ansObj) => ({
    type: DELETE_LIKE,
    payload: ansObj
})

const fetch_likes = (ansObj) => ({
    type: FETCH_MY_LIKES,
    payload: ansObj
})
// const fetchlikes = async () => {
//     const response = await fetch('/api/profile/likes');
//     if (response.ok) {
//         const responseData = await response.json();
//         setUsers(responseData.users_likes);
//     }
//     else setErrors([])
// }

export const fetchLikes = () => async (dispatch) => {
    const response = await fetch(`api/profile/likes`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return { 'errors': 'Sorry, something went wrong!' };
        }
        await dispatch(fetch_likes(data))
        return data
    }
}


export const createLike = (id) => async (dispatch) => {
    // console.log('arkoooooooooooooo?')
    const response = await fetch(`api/profile/likes/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: id,
            // liked_by_id: login_user,
        })
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return { 'errors': 'Sorry, something went wrong!' };
        }
        await dispatch(create_like(data))
        return data
    }
}


export const deleteLike = (id) => async (dispatch) => {
    const response = await fetch(`api/profile/likes/${id}/`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return { errors: 'something went wrong' }
        }
        await dispatch(del_like(data))
        return data
    }
}


const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_LIKE:
            let liked = action.payload
            console.log(liked.user_id, action.payload, 'TEST TEST TEST')
            newState[liked.user_id] = { 'liked_id': liked.user_id, 'liked_by_id': liked.current_user }
            return newState
        case DELETE_LIKE:
            const del_liked = action.payload
            delete newState[del_liked.id]
            return newState
        case FETCH_LIKES:
            const likedPeople = action.payload
            for (let liked of likedPeople) {
                newState[liked.id] = liked
            }
            return newState
        case FETCH_MY_LIKES:
            return { mylikes: action.payload }
        case FETCH_LIKED_BY:
            return { likedby: action.payload }
        default:
            return state;
    }
}
