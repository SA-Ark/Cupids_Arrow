const CREATE_ANSWERED_QUESTION = 'questions/CREATE_ANSWERED_QUESTION'
const INITIAL_QUESTION_STATE = 'questions/INITIAL_QUESTION_STATE'
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
    type: INITIAL_QUESTION_STATE,
    payload: ansObj
})

export const createAns = (e) => async (dispatch) => {
    const { question_id, user_id, ans } = e
    const response = await fetch(`api/questions/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
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
    const allquestions = await fetch('api/questions/allquestions', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const answered = await fetch('api/questions/answered', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log(answered)
    if (answered.ok && allquestions.ok) {
        const answered_data = await answered.json();
        const all = await allquestions.json()
        // const unanswered_data = await unanswered.json();
        if (answered_data.errors) {
            return;
        }
        console.log(all, answered_data)
        const ansObj = answered_data
        const dexObj = all
        dispatch(setInitialQuestionState([ansObj, dexObj]))
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

            newState.answered_questions[ans.id] = ans
            newState.unanswered_questions_ids = newState?.unanswered_questions_ids?.filter(question_Id => question_Id !== ans.question_id)

            return newState
        case INITIAL_QUESTION_STATE:
            const answered = action.payload
            const check = []
            newState.answered = answered[0]
            newState.all = answered[1]
            for (let o in answered[0]) check.push(+o)
            newState.unanswered = {}
            Object.values(newState.all).map(x=>{
               if (!check.includes(x.id)) newState.unanswered[x.id] = x
            })
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
