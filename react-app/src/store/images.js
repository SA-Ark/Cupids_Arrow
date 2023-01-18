const CREATE_IMAGE = 'session/set_image'


const set_image = (ansObj) => ({
    type: CREATE_IMAGE,
    payload: ansObj
})


export const createImage = (id, img_id) => async (dispatch) => {
    const response = await fetch(`api/${id}/images/${img_id}`, {
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

export const updateImage = (img_id) => async (dispatch) => {
    const response = await fetch(`api/profile/images/${img_id}`, {
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




export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_IMAGE:
            let img = action.ansObj
            newState[img.id] = img
            return newState
        default:
            return state;
    }
}
