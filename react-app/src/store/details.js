// const CREATE_PREFERENCE = 'session/CREATE_PREFERENCE'
// const FETCH_PREFERENCE = 'session/FETCH_PREFERENCE'
// const DELETE_PREFERENCE = 'session/DELETE_PREFERENCE'

// const create_preference = (ansObj) => ({
//     type: CREATE_PREFERENCE,
//     payload: ansObj
// })


// const del_preference = (ansObj) => ({
//     type: DELETE_PREFERENCE,
//     payload: ansObj
// })


// const fetch_preference = (ansObj) => ({
//     type: FETCH_PREFERENCE,
//     payload: ansObj
// })


// export const fetchPreference = () => async (dispatch) => {
//     const response = await fetch(`api/profile/preferences`, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//         });
//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return;
//         }
//         dispatch(fetch_preference(data))
//     }
// }


// export const createPreference = () => async (dispatch) => {
//     const response = await fetch(`api/profile/preferences`, {
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
//         dispatch(create_preference(data))
//     }
// }

// export const updatePreference = () => async (dispatch) => {
//     const response = await fetch(`api/profile/preferences`, {
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
//         dispatch(create_preference(data))
//     }
// }

// export const deleteImage = (img_id) => async (dispatch) => {
//     const response = await fetch(`api/profile/preferences`, {
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
//         dispatch(del_preference(data))
//     }
// }




// const initialState = {};

// export default function reducer(state = initialState, action) {
//     let newState = { ...state }
//     switch (action.type) {
//         case CREATE_PREFERENCE:
//             const new_preference = action.payload
//             newState[new_preference.itemName] = new_preference.value
//             return newState
//         case DELETE_PREFERENCE:
//             const del_preference = action.payload
//             newState[del_preference.itemName] = null
//             return newState
//         case FETCH_PREFERENCE:
//             const preferences = action.payload
//             for (let preference in preferences){
//                 newState[preference.itemName] = preference.value
//             }
//             return newState
//         default:
//             return state;
//     }
// }
