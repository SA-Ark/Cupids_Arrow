const CREATE_ANSWERED_QUESTION = 'questions/CREATE_ANSWERED_QUESTION'
const INITIAL_QUESTION_STATE = 'questions/INITIAL_QUESTION_STATE'
const DELETE_ANS = 'questions/DELETE_ANS'


const setAnswer = (ansObj) => ({
    type: CREATE_ANSWERED_QUESTION,
    payload: ansObj
})

const deleteAns = (ansObj) => ({
    type: DELETE_ANS,
    payload: ansObj
})

const setInitialQuestionState = (ansObj) => ({
    type: INITIAL_QUESTION_STATE,
    payload: ansObj
})

export const createAns = (e) => async (dispatch) => {
    const { question_id, user_id, answer } = e
    console.log(answer)
    const response = await fetch(`api/questions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id,
            question_id,
            answer
        })
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
        dispatch(setAnswer(data))
    }
}

export const updateAnsThunk = (o) => async (dispatch) => {
    const { question_id, user_id, answer } = o
    // console.log(ans)
    const response = await fetch(`api/questions`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id,
            question_id,
            answer
        })
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(setAnswer(data))
    }
}

export const deleteAnsThunk = (id) => async (dispatch) => {
    console.log(id)
    const response = await fetch(`api/questions/${id}/delete/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },

    });
    if (response.ok) {
        const data = await response.json();
        console.log(response, data)
        // if (data.errors) {
        //     return;
        // }
        await dispatch(deleteAns(data.id))
        return data
    }
}

export const getInitialState = () => async (dispatch) => {
    const dexquestions = await fetch('api/questions/combo', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (dexquestions.ok) {
        const unanswered_data = await dexquestions.json();

        dispatch(setInitialQuestionState(unanswered_data))

        // const answeredQs = answered_data
        // const allQuestionsObj = all
    }
}


const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_ANSWERED_QUESTION:
            const ans = action.payload
            newState.answered[ans.question_id] = ans
            delete newState.unanswered[ans.id]
            return newState
        case INITIAL_QUESTION_STATE:
            return action.payload
        case DELETE_ANS:
            const ansID = action.payload
            delete newState.answered[ansID]
            newState.unanswered[ansID] = newState.all[ansID]
            return newState
        default:
            return newState;
    }
}
