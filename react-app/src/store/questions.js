const CREATE_ANSWERED_QUESTION = 'session/CREATE_ANSWERED_QUESTION'
const CREATE_QUESTION_STATE = 'session/CREATE_QUESTION_STATE'

const setAnswer = (ansObj) => ({
    type: CREATE_ANSWERED_QUESTION,
    payload: ansObj
})

const setInitialQuestionState = (ansObj) => ({
    type: CREATE_QUESTION_STATE,
    payload: ansObj
})

export const createAns = () => async (dispatch) => {
    const response = await fetch('api/questions', {
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
        dispatch(setAnswer(data))
    }
}

export const getInitialState = () => async (dispatch) =>{
    const unanswered = await fetch('api/questions/unanswered', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const answered = await fetch('api/questions/answered', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (unanswered.ok && answered.ok) {
        const answered_data = await answered.json();
        const unanswered_data = await unanswered.json();
        if (answered_data.errors || unanswered_data.errors) {
            return;
        }
    ansObj = {answered, unanswered}
        dispatch(setInitialQuestionState(ansObj))
}}



export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_ANSWERED_QUESTION:
            ans = action.payload
            // newState = newState[unanswered_questions].filter(x => x !== ans.id)
            // newState[answered_questions][ans.id] = ans
            newState.answered_questions.append(ans)
            newState.unanswered_questions_ids = newState.unanswered_questions_ids.filter(question_Id=> question_Id !== ans.question_id)

            return newState
        case CREATE_QUESTION_STATE:
            answered = action.payload.answered
            unanswered = action.payload.unanswered
            newState.answered_questions = answered
            newState.unanswered_questions_ids = unanswered

            return newState
        default:
            return newState;
    }
}
