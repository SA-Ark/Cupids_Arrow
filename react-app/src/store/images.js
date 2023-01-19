const CREATE_IMAGE = 'image/SET_IMAGE'
const DELETE_IMAGE = 'image/DELETE_IMAGE'

const set_image = (ansObj) => ({
    type: CREATE_IMAGE,
    payload: ansObj
})

const del_image = (ansObj) => ({
    type: DELETE_IMAGE,
    payload: ansObj
})


export const createImage = () => async (dispatch) => {
    const response = await fetch(`api/profile/images`, {
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
        dispatch(set_image(data))
    }
}

export const updateImage = () => async (dispatch) => {
    const response = await fetch(`api/profile/images/`, {
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
        dispatch(set_image(data))
    }
}

export const deleteImage = () => async (dispatch) => {
    const response = await fetch(`api/profile/images/`, {
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
        dispatch(del_image(data))
    }
}




const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_IMAGE:
            let img = action.payload
            newState[img.id] = img
            return newState
        default:
            return state;
    }
}
