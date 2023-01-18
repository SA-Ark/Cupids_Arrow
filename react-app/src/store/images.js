const CREATE_IMAGE = 'session/set_image'


const set_image = (ansObj) => ({
    type: CREATE_IMAGE,
    ansObj
})


export const createImage = () => async (dispatch) => {
    const response = await fetch('api/questions', {
        headers: {
            'Content-Type': 'application/json'
        }
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