import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAns, getInitialState } from '../../store/questions';
import UserAnswerForm from '../Forms/UserAnswerForm';
import OpenModalButton from '../OpenModalButton'

// import { getInitialState } from
const skiplist = []

export default function QuestionsPage({ }) {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.user.id)
    const questions = useSelector(state => state.questions)
    const [questiontoans, setQuestiontoans] = useState(0)

    // console.log(questions)
    let nextquestion
    let listques
    if (questions.unanswered) {
        nextquestion = Object.values(questions.unanswered)
        listques = Object.values(questions.answered)
        console.log(listques)
        // nextquestion = nextquestion.filter(x=>skiplist.includes(x.id))
        nextquestion = Math.floor(Math.random() * nextquestion.length) + 1

        // while(skiplist.includes(randomnum)) randomnum = Math.floor(Math.random() * nextquestion.length)+1
        nextquestion = questions.all[nextquestion]

    }
    // Objextnextquestion
    const ansTrue = async () => {
        return await dispatch(createAns({
            user_id: user,
            question_id: nextquestion.id,
            ans: 'True'
        })).catch(async () => {
            //error handling here})
            setErrors()
        })
    };
    const ansFalse = async () => {
        return await dispatch(createAns({
            user_id: user,
            question_id: nextquestion.id,
            ans: 'False'
        })).catch(async () => {
            //error handling here})
        })
    };
    // let rando
    // if (questions?.all_questions) rando =
    // const answerNo = async (e) => {
    //     return dispatch(createAns({
    //         user_id: user,
    //         question_id: 10,
    //         ans: 'False'
    //     })).catch(async () => { console.log('askdljfhaks') })
    // }

    // const answerYes = async (e) => {
    //     return dispatch(createAns({
    //         user_id: user,
    //         question_id: 10,
    //         ans: 'True'
    //     })).catch(async () => { console.log('askdljfhaks') })
    // }

    const skip = (e) => {
        setQuestiontoans(questiontoans + 1)
        skiplist.push(e)
    }

    useEffect(() => {
        dispatch(getInitialState())
    }, [])

    return (<>
        <div className='mainQuestion'>
            <div className='left'>
                <div>
                    {/* <h1>{Percentage_answered}</h1> */}
                    {/* <h3>Highest match possible</h3> */}
                    {/*line goes here*/}
                    <h4>You've answered {questions?.answered ? Object.values(questions.answered).length : ''} questions</h4>
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
                                Skipped Recently
                            </div>
                            <div>
                                {questiontoans}
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className='right'>
                <div id='top' className='Unanswered'>
                    <h3 className='questiontext'>
                        {/* {Object.values(questions.unanswered).length} */}
                        {nextquestion?.question_body}
                    </h3>
                    <div className='questionbox'>
                        <>
                            <button onClick={() => ansTrue()}>Yes</button>
                            <button onClick={() => ansFalse()}>No</button>
                        </>
                        <button onClick={() => skip(nextquestion?.id)}>Skip</button>

                    </div>
                </div>
                <div id='bottom'>
                    <h2>Answered Questions</h2>
                    {listques?.map((q) => 
                        <>
                            <>
                                {q.ques.question_body}
                            </>
                            <>

                                <p style={q.ans == 'True' ? { fontWeight: 'Bold' } : { textDecoration: 'line-through' }}>
                                    True
                                </p>
                                <p style={q.ans == 'True' ? { textDecoration: 'line-through' } : { fontWeight: 'Bold' }} >
                                    False
                                </p>
                            </>
                            < OpenModalButton
                                id='createreviewbutt'
                                buttonText="RE-ANSWER"
                                modalComponent={<UserAnswerForm q={[questions.answered[q.ques.id], q.ques]} />}
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
