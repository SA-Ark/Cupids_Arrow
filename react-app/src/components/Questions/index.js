import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAns, getInitialState } from '../../store/questions';
import UserAnswerForm from '../Forms/UserAnswerForm';
// import { getInitialState } from
const skiplist = []

export default function QuestionsPage({ }) {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.id)
    const questions = useSelector(state => state.questions)
    const [questiontoans, setQuestiontoans] = useState('')

    // console.log(questions)
    let nextquestion
    if (questions.unanswered) {
        nextquestion = Object.values(questions.unanswered)
        // nextquestion = nextquestion.filter(x=>skiplist.includes(x.id))
        nextquestion = Math.floor(Math.random() * nextquestion.length)+1

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
        })
    };
    // let rando
    // if (questions?.all_questions) rando =
    const answerNo = async (e) => {
        return dispatch(createAns({
            user_id: user,
            question_id: 10,
            ans: 'False'
        })).catch(async () => { console.log('askdljfhaks') })
    }

    const answerYes = async (e) => {
        return dispatch(createAns({
            user_id: user,
            question_id: 10,
            ans: 'True'
        })).catch(async () => { console.log('askdljfhaks') })
    }

    const skip = async (e) => {
        return "whatever"
        return dispatch(createAns({
            user_id: user,
            question_id: 9,
            ans: 'False'
        })).catch(async () => {
            //error handling here})
        })
    };
    // let rando
    // if (questions?.all_questions) rando =
    const skip = (e) => {
        setQuestiontoans(questions.all[e])
        skiplist.push(e)
        // console.log(skiplist)


        // return await dispatch(createAns({
        //     user_id: user,
        //     question_id: 3,
        //     ans: 'False'
        // })).catch(async () => { //error handling here})
        // })
    }

    useEffect(() => {
        dispatch(getInitialState())
    }, [])

    return (<>
        <div className='mainQuestion'>
            <div className='left'>
                <div>
                    {/* <h1>{Percentage_answered}</h1> */}
                    <h3>Highest match possible</h3>
                    {/*line goes here*/}
                    <h4>You've answered { } questions</h4>
                    <div className='question_type'>
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
                                SKIPPED
                            </div>
                            <div>
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='Unanswered'>
                    <h3 className='questiontext'>
                        {nextquestion?.question_body}
                    </h3>
                    <div className='questionbox'>
<<<<<<< HEAD
                        <button onClick={() => skip()}>Skip</button>
                        <button onClick={()=> answerYes()}>Yes</button>
                        <button onClick={()=> answerNo()}>No</button>

=======
                        <>
                            <button onClick={() => ansTrue()}>Yes</button>
                            <button onClick={() => ansFalse()}>No</button>
                        </>
                        <button onClick={() => skip(nextquestion?.id)}>Skip</button>
>>>>>>> 2d1fb9c64aa830e1964e138c930a7670883d86fd
                    </div>
                </div>
                <h2>Answered Questions</h2>
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
