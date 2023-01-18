// const CREATE_LIKES = 'session/CREATE_LIKES'
// const FETCH_LIKES = 'session/FETCH_LIKES'
// const DELETE_LIKES = 'session/DELETE_LIKES'

// const create_like = (ansObj) => ({
//     type: CREATE_LIKE,
//     payload: ansObj
// })


// const del_like = (ansObj) => ({
//     type: DELETE_LIKE,
//     payload: ansObj
// })


// const fetch_likes = (ansObj) => ({
//     type: FETCH_LIKES,
//     payload: ansObj
// })


// export const fetchlikes = () => async (dispatch) => {
//     const response = await fetch(`api/profile/likess`, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//         });
//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return;
//         }
//         dispatch(fetch_likes(data))
//     }
// }


// export const createLike = () => async (dispatch) => {
//     const response = await fetch(`api/profile/likess`, {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         method: 'POST'
//     });
//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return;
//         }
//         dispatch(create_likes(data))
//     }
// }

// export const updateLikes = () => async (dispatch) => {
//     const response = await fetch(`api/profile/likes`, {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         method: 'PUT'
//     });
//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return;
//         }
//         dispatch(create_like(data))
//     }
// }

// export const deleteLikes = (img_id) => async (dispatch) => {
//     const response = await fetch(`api/profile/likes`, {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         method: 'DELETE'
//     });
//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return;
//         }
//         dispatch(del_like(data))
//     }
// }




// const initialState = {};

// export default function reducer(state = initialState, action) {
//     let newState = { ...state }
//     switch (action.type) {
//         case CREATE_LIKE:
//             const new_preference = action.payload
//             newState[new_preference.itemName] = new_preference.value
//             return newState
//         case DELETE_LIKE:
//             const del_preference = action.payload
//             newState[del_preference.itemName] = null
//             return newState
//         case FETCH_LIKES:
//             const preferences = action.payload
//             for (let preference in preferences){
//                 newState[preference.itemName] = preference.value
//             }
//             return newState
//         default:
//             return state;
//     }
// }
