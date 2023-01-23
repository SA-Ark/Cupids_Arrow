import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAns, getInitialState } from '../../store/questions';
import UserAnswerForm from '../Forms/UserAnswerForm';
import OpenModalButton from '../OpenModalButton'

// import { getInitialState } from

let skiplist = []
export default function QuestionsPage(user) {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([]);
    const [skipping, setSkipping] = useState(0)
    // const user = useSelector(state => state.user)
    const questions = useSelector(state => state.questions)
    // const {errors}

    let nextquestion
    let answeredQ
    let unansweredQ
    let allQ
    // console.log(questions,)
    if (questions?.unanswered && questions?.answered) {
        allQ = questions.all
        unansweredQ = Object.values(questions.unanswered)
        //to reset skip list so you never run out of questions while available
        if (skiplist.length >= unansweredQ) skiplist = []
        answeredQ = Object.values(questions.answered)
        //loop to find next
        for (let x of unansweredQ) {
            if (skiplist.includes(x.id)) continue
            else {
                nextquestion = x
            }
            // if (skiplist.length >= Object.keys(questions.all).length) {
            //     skiplist
        }
    }



    const ansTrue = async () => {
        // setErrors([])
        //needed to ensure that it doesnt stay on rerender
        skiplist.push(nextquestion.id)
        return await dispatch(createAns({
            user_id: user,
            question_id: nextquestion.id,
            answer: 'True'
        })).catch(async (res) => {
            setErrors()
        })

    };
    const ansFalse = async () => {
        // setErrors([])
        //needed to ensure that it doesnt stay on rerender
        skiplist.push(nextquestion.id)
        return await dispatch(createAns({
            user_id: user,
            question_id: nextquestion.id,
            answer: 'False'
        })).catch(async () => {
            //error handling here})
            setErrors()
        })

    };

    const skip = () => skiplist.push(nextquestion.id) && setSkipping(skipping + 1)

    useEffect(async () => {
        // skiplist
        await dispatch(getInitialState())
    }, [dispatch])


    skiplist.length + answeredQ?.length == allQ?.length ? skiplist = [] : skiplist = skiplist
    return (
        <>
            <div className='mainQuestion'>
                <div className='left'>
                    <div>
                        {/* <h1>{Percentage_answered}</h1> */}
                        {/* <h3>Highest match possible</h3> */}
                        {/*line goes here*/}
                        <h4>You've answered {questions?.answered ? Object.values(questions.answered).length : ""} questions</h4>
                        <h4>You've skipped {questions?.unanswered ? skipping : ''} questions today</h4>
                        <div id='' className='question_type'>
                            <div>
                                <div>
                                    PUBLIC
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                            <div>
                                <div>
                                    IMPORTANT
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                            <div>
                                <div>
                                    EXPLAINED
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                            <div>
                                <div>
                                    PRIVATE
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                            <div>
                                <div>
                                    Skipped Recently: {questions?.unanswered ? skipping : ''}
                                </div>
                                <div>
                                    {/* {questiontoans} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='right'>
                    <div id='top' className='Unanswered'>
                        <h3 className='questiontext'>
                            {/* {Object.values(questions.unanswered).length} */}
                            {/* {nextquestion?.question_body} */}
                            {nextquestion && nextquestion?.question_body}

                        </h3>
                        <div className='questionbox'>
                            {nextquestion?.question_body ? <>
                                <button onClick={ansTrue}>Yes</button>
                                <button onClick={ansFalse}>No</button>
                                <button onClick={skip}>Skip</button>
                            </> : <h2>Sorry! You answered everything</h2>}
                            {/* <button onClick={() => skip(nextquestion[0]?.id)}>Skip</button> */}

                        </div>
                    </div>
                    <div id='bottom'>
                        <h2>Answered Questions</h2>
                        {answeredQ?.map((q) =>
                            <>
                                <>
                                    {/* {user} */}
                                    {allQ[q.question_id].question_body}
                                </>
                                <>

                                    <p style={q.answer == 'True' ? { fontWeight: 'Bold' } : { textDecoration: 'line-through' }}>
                                        Yes
                                    </p>
                                    <p style={q.answer == 'True' ? { textDecoration: 'line-through' } : { fontWeight: 'Bold' }} >
                                        No
                                    </p>
                                </>
                                < OpenModalButton
                                    id='createreviewbutt'
                                    buttonText="Change Answer"
                                    modalComponent={<UserAnswerForm id={q.question_id} ans={q.answer} />}

                                />

                            </>

                        )}
                    </div>
                </div>


            </div>
        </>)
    // return (
    //     <p>Questions</p>
    // )
}

    // {Object.values(questions.answeredquestions).map(q => {
    //         (
    //             <div className='answered'>
    //                 <div className='questiontext'>
    //                     {q.body}
    //                 </div>
    //                 {/*line goes here*/}
    //                 {/* {loopthrough - questions}
    //             <div>{looped - questions - goes - here}</div> */}

    //                 <button>RE-ANSWER</button>
    //             </div>
    //         )
    //     })}
