const CREATE_ANSWERED_QUESTION = 'session/CREATE_ANSWERED_QUESTION'


const setAnswer = (ansObj) => ({
    type: CREATE_ANSWERED_QUESTION,
    payload: ansObj
})


export const createAns = () => async (dispatch) => {
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
        dispatch(setAnswer(data))
    }
}



export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_ANSWERED_QUESTION:
            ans = action.payload.ans
            newState = newState[unanswered_questions].filter(x => x !== ans.id)
            newState[answered_questions][ans.id] = ans
            return newState
        default:
            return state;
    }
}