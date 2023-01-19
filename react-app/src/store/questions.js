const CREATE_ANSWERED_QUESTION = 'questions/CREATE_ANSWERED_QUESTION'
const CREATE_QUESTION_STATE = 'questions/CREATE_QUESTION_STATE'
const UPDATE_ANSWERED_QUESTION = 'questions/UPDATE_ANSWERED_QUESTION'

const setAnswer = (ansObj) => ({
    type: CREATE_ANSWERED_QUESTION,
    payload: ansObj
})

const updateAnswer = (ansObj) => ({
    type: UPDATE_ANSWERED_QUESTION,
    payload: ansObj
})

const setInitialQuestionState = (ansObj) => ({
    type: CREATE_QUESTION_STATE,
    payload: ansObj
})

export const createAns = (e) => async (dispatch) => {
    const { question_id, user_id, ans } = e
    const response = await fetch('api/questions', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            user_id,
            question_id,
            ans
        })
    });
    console.log(response, 'responseeeee')
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(setAnswer(data))
    }
}

export const updateAns = (id) => async (dispatch) => {
    const response = await fetch(`api/questions/${id}`, {
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
        dispatch(updateAnswer(data))
    }
}

export const getInitialState = () => async (dispatch) => {
    // const unanswered = await fetch('api/questions/unanswered', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    const answered = await fetch('api/questions/answered', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (answered.ok) {
        const answered_data = await answered.json();
        // const unanswered_data = await unanswered.json();
        if (answered_data.errors) {
            return;
        }
        const ansObj = answered_data
        dispatch(setInitialQuestionState(ansObj))
    }
}


const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_ANSWERED_QUESTION:
            const ans = action.payload
            // newState = newState[unanswered_questions].filter(x => x !== ans.id)
            // newState[answered_questions][ans.id] = ans
            newState.answered_questions.append(ans)
            newState.unanswered_questions_ids = newState.unanswered_questions_ids.filter(question_Id => question_Id !== ans.question_id)

            return newState
        case CREATE_QUESTION_STATE:
            const answered = action.payload
            // const unanswered = action.payload.unanswered
            newState = answered
            // newState.unanswered_questions_ids = unanswered

            return newState
        case UPDATE_ANSWERED_QUESTION:
            const Q = action.payload
            const question_Id = action.payload.question_Id
            newState = newState.answered_questions.filter(question => question.id !== question_Id)
            newState.append(Q)
            return newState
        default:
            return newState;
    }
}
