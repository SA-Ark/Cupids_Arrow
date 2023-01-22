const CREATE_DETAILS = 'session/CREATE_DETAILS'
const UPDATE_DETAILS = 'session/UPDATE_DETAILS'
const FETCH_DETAILS = 'session/FETCH_DETAILS'
const DELETE_DETAILS = 'session/DELETE_DETAILS'

const create_details = (ansObj) => ({
    type: CREATE_DETAILS,
    payload: ansObj
})


const del_details = (ansObj) => ({
    type: DELETE_DETAILS,
    payload: ansObj
})


const fetch_details = (ansObj) => ({
    type: FETCH_DETAILS,
    payload: ansObj
})


export const fetchDetails = (id) => async (dispatch) => {
    const response = await fetch(`api/profile/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(fetch_details(data))
        return data
    }
}


export const createDetails = () => async (dispatch) => {
    const response = await fetch(`api/profile/details`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(create_details(data))
    }
}

export const updateDetails = () => async (dispatch) => {
    const response = await fetch(`api/profile/details`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT'
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(create_details(data))
    }
}


export const deleteDetails = () => async (dispatch) => {
    const response = await fetch(`api/profile/details`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(del_details(data))
    }
}




const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_DETAILS:
            const detail = action.payload
            newState[detail.name] = detail.value
            return newState
        case DELETE_DETAILS:
            const del_detail = action.payload
            newState[del_detail] = null
            return newState
        case FETCH_DETAILS:
            const details = action.payload
            for (let detail of details) {

                newState[detail.name] = detail.value
            }
            return newState
        default:
            return state;
    }
}
