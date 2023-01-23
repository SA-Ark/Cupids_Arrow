import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAns, getInitialState } from '../../store/questions';
import UserAnswerForm from '../Forms/UserAnswerForm';
import OpenModalButton from '../OpenModalButton'
import '../../css/questions.css'

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
        <div className='page'>
            <div className='mainQuestion'>
                <div className='leftRightContainer'>
                <div className='left'>

                        <h2 className='percent'>{questions?.answered ? Math.ceil((Object.values(questions.answered).length/37)* 100) : ""}%</h2>
                        <h2 className='percentText'>Questions Done</h2>
                        <hr></hr>
                        {/* <h3>Highest match possible</h3> */}
                        {/*line goes here*/}
                        <h4 className='percentText'>You've answered {questions?.answered ? Object.values(questions.answered).length : ""} questions</h4>
                        <h4 className='percentText'>You've skipped {questions?.unanswered ? skipping : ''} questions today</h4>
                        <div id='' className='question_type'>
                            {/* <div>
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
                            </div> */}
                            <div>
                                <div className='percentText'>
                                    Skipped Recently: {questions?.unanswered ? skipping : ''}
                                </div>
                                <div>
                                    {/* {questiontoans} */}
                                </div>
                            </div>
                        </div>

                </div>




                <div className='right'>
                    <div id='top'>
                        <h2 className='unansweredTitle'>Unanswered Questions</h2>
                    <div className='Unanswered'>
                        <div className='questiobBoxTop'>

                        <h3 className='questiontext'>
                            {/* {Object.values(questions.unanswered).length} */}
                            {/* {nextquestion?.question_body} */}
                            {nextquestion && nextquestion?.question_body}

                        </h3>
                        </div>
                        <hr></hr>
                        <div className='questionbox'>
                            {nextquestion?.question_body ? <>
                                <button className='answerButton' onClick={ansTrue}>Yes</button>
                                <button className='answerButton' onClick={ansFalse}>No</button>
                                <button className='answerButton' onClick={skip}>Skip</button>
                            </> : <h2>Sorry! You answered everything</h2>}
                            {/* <button onClick={() => skip(nextquestion[0]?.id)}>Skip</button> */}

                        </div>
                    </div>
                    </div>

                    <div id='top'>
                        <h2>Answered Questions</h2>
                        {answeredQ?.map((q) =>

                                <div className='Unanswered'>
                                    <div className='questiobBoxTop'>
                                        <h3 className='questiontext'>
                                            {/* {user} */}
                                            {allQ[q.question_id].question_body}
                                        </h3>

                                    </div>

                                <div className='alreadyAnsweredAnswers'>
                                    <hr></hr>
                                    <p style={q.answer == 'True' ? { fontWeight: 'Bold' } : { textDecoration: 'line-through' }}>
                                        Yes
                                    </p>
                                    <p style={q.answer == 'True' ? { textDecoration: 'line-through' } : { fontWeight: 'Bold' }} >
                                        No
                                    </p>
                                </div>
                                <div className='questionbox'>

                                < OpenModalButton
                                    className='answerButton'
                                    id='createreviewbutt'
                                    buttonText="Change Answer"
                                    modalComponent={<UserAnswerForm id={q.question_id} ans={q.answer} />}

                                    />
                                    </div>
                                </div>
                        )}
                    </div>
                </div>

                </div>
            </div>
        </div>)
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
