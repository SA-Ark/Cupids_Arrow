const CREATE_MATCH = 'match/CREATE_MATCH'
const DELETE_MATCH = 'match/DELETE_MATCH'

const set_match = (ansObj) => ({
    type: CREATE_MATCH,
    ansObj
})

const del_match = (ansObj) => ({
    type: DELETE_MATCH,
    payload: ansObj
})


export const getMatches = () => async (dispatch) => {
    const response = await fetch('/api/discover', {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(set_match(data))
        // setMatch(users[i]);
    }
}

/// is thuis mutual likes? vvvv

export const createMatch = (id) => async (dispatch) => {
    const response = await fetch(`api/profile/match/${id}`, {
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
        dispatch(set_match(data))
    }
}

export const deleteMatch = (id) => async (dispatch) => {
    const response = await fetch(`api/profile/match/${id}`, {
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
        dispatch(del_match(data))
    }
}






const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_MATCH:
            const person = action.ansObj
            // for (let c in person.users) newState[c]=person[c]
            // console.log(person)
            newState = person
            return newState
        case DELETE_MATCH:
            const del_person = action.payload
            delete newState[del_person.id]
            return newState
        default:
            return state;
    }
}
