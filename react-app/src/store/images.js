const CREATE_IMAGE = 'image/SET_IMAGE'
const DELETE_IMAGE = 'image/DELETE_IMAGE'
const GET_IMAGES = 'image/GET_IMAGES'
const UPDATE_IMAGES = 'image/UPDATE_IMAGE'


const set_image = (ansObj) => ({
    type: CREATE_IMAGE,
    payload: ansObj
})

const del_image = (id) => ({
    type: DELETE_IMAGE,
    id
})

const get_images = (imagesObj) => ({
    type: GET_IMAGES,
    imagesObj
})

const update_images = (imagesObj) => ({
    type: UPDATE_IMAGES,
    payload: imagesObj
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
        return data
    }
}

export const getOtherImages = (id) => async (dispatch) => {
    console.log(id, "ID")
    const response = await fetch(`api/users/images/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {

        const data = await response.json();
        console.log(data, "DATA???")
        if (data.errors) {
            return;
        }
        dispatch(get_images(data))
        return data
    }
}

// export const getImagesById = (id) => async (dispatch) => {
//     const response = await fetch(`api/profile/images/${id}`, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return;
//         }
//         dispatch(get_images(data))
//     }
// }

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
    console.log(id.id)
    const response = await fetch(`api/profile/images/${id.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:{
            id
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        console.log(data, "DATA")
        dispatch(update_images(data))
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
        dispatch(del_image(id))
        return data
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
        case UPDATE_IMAGES:
            let imgUpdate = action.payload
            console.log(imgUpdate)
            const img1 = imgUpdate.img1
            const img2 = imgUpdate.img2
            newState[img1.id] = img1
            newState[img2.id] = img2

            return newState
        case DELETE_IMAGE:
            delete newState[action.id]
            return newState
        case GET_IMAGES:
            let images = Object.values(action.imagesObj)
            console.log(action)
            console.log(images, "ITERABLE", typeof images)
            console.log(images[0])
            for (let img of images) {
                newState[img.id] = img
            }
            return newState

        default:
            return state;
    }
}
