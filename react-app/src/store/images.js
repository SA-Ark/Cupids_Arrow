const CREATE_IMAGE = 'image/SET_IMAGE'
const DELETE_IMAGE = 'image/DELETE_IMAGE'
const GET_IMAGES = 'image/GET_IMAGES'

const set_image = (ansObj) => ({
    type: CREATE_IMAGE,
    payload: ansObj
})

const del_image = (ansObj) => ({
    type: DELETE_IMAGE,
    payload: ansObj
})

const get_images = (imagesObj) => ({
    type: GET_IMAGES,
    imagesObj
})

export const getImages = () => async (dispatch) => {
    const response = await fetch(`api/profile/images`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(get_images(data))
    }
}


export const createImage = (image_url) => async (dispatch) => {
    const response = await fetch(`api/profile/images`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_url,
            preview: true,
        })
    });
    

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
        console.log(data)
        dispatch(set_image(data))
    }

}

export const updateImage = (id) => async (dispatch) => {
    console.log(id)
    const response = await fetch(`api/profile/images/${+id.id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body:{
            preview: true
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

export const deleteImage = (id) => async (dispatch) => {
    const response = await fetch(`api/profile/images/${id}`, {
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
        case DELETE_IMAGE:
            let image = action.payload
            delete newState[image.id]
            return newState
        case GET_IMAGES:
            let images = action.imagesObj
            // console.log(images)
            for (let img of images.images){
                newState[img.id] = img
            }
            return newState

        default:
            return state;
    }
}
