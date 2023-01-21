import { useEffect, useState, useCallback } from 'react';
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
    let [numAnswered, setNumAnswered] = useState(questions?.answered?.length)
    const [skipping, setSkipping]= useState(0)


    // console.log(questions)
    let [nextquestion, setNextquestion] = useState({})

        let listques
        let unanswered

        let unansweredQ = []
        console.log(questions.unanswered, "QUESTIONS")
    if (questions.unanswered && Object.values(questions.unanswered).length) {
        console.log(Object.values(questions.unanswered), "UNANS")
        // nextquestion = Object.values(questions.unanswered)
        listques = Object.values(questions.answered)
        console.log(listques, "LIST QUEST")
        unanswered = Object.values(questions.unanswered)
        for (let question of unanswered){

            unansweredQ.push({"question_body": question.question_body, "id": question.id})
        }
        // console.log(unansweredQ)

        // nextquestion = nextquestion.filter(x=>skiplist.includes(x.id))
        // nextquestion = Math.floor(Math.random() * nextquestion.length) + 1

        // while(skiplist.includes(randomnum)) randomnum = Math.floor(Math.random() * nextquestion.length)+1
        // nextquestion = questions.all[nextquestion]
        //  const index = Math.floor(Math.random() * Object.values(questions.unanswered).length)
        // nextquestion = unansweredQ.filter(x=>skiplist.includes(x.id))[-1]
        nextquestion = unansweredQ.slice(-1)
        // console.log(nextquestion, "THIS ONE WTF")
        // console.log(nextquestion[0].question_body)
        // console.log(nextquestion, "NEXT Q")
        numAnswered = Object.values(questions.answered).length

    }

    // Objextnextquestion
    const ansTrue = async () => {
        setNumAnswered(numAnswered+1)
        // setQuestiontoans(questiontoans + 1)
        // unanswered.pop()
        // nextquestion = unansweredQ.slice(-1)
        unansweredQ = unansweredQ.slice(0, unansweredQ.length -1)
        const thisQ = nextquestion
        // setNextquestion(unansweredQ.slice(-1))
        // console.log("DESIRED NEXT Q", unansweredQ.slice(-1) )
        nextquestion = unansweredQ.slice(-1)
        // console.log(nextquestion, "current next q")
        skiplist.push(thisQ[0].id)
        return await dispatch(createAns({
            user_id: user,
            question_id: thisQ[0].id,
            ans: 'True'
        })).catch(async () => {
            //error handling here})
            setErrors()
        })

    };
    const ansFalse = async () => {
        setNumAnswered(numAnswered+1)

        // console.log(unansweredQ.slice(-1), "UN 1")
        unansweredQ = unansweredQ.slice(0, unansweredQ.length -1)

        // console.log(unansweredQ.slice(-1), "UN 2")

        // console.log(nextquestion, "FALSE ANS 1 ")
        const thisQ = nextquestion
        console.log("DESIRED NEXT Q", unansweredQ.slice(-1) )
        nextquestion = unansweredQ.slice(-1)
        console.log(nextquestion, "current next q")
        skiplist.push(thisQ[0].id)
        return await dispatch(createAns({
            user_id: user,
            question_id: thisQ[0].id,
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
        // setQuestiontoans(questiontoans + 1)
        // const skipped = unansweredQ.slice(-1)

        skiplist.push(nextquestion[0].id)

        nextquestion = unansweredQ.slice(-1)
        console.log(nextquestion, "SKIP")
        // unanswered.unshift(skipped)
        console.log(skiplist, "skiplist")
        setSkipping(skipping + 1)

    }


    useEffect(() => {
        dispatch(getInitialState())
    }, [dispatch, numAnswered])

    return (<>
        <div className='mainQuestion'>
            <div className='left'>
                <div>
                    {/* <h1>{Percentage_answered}</h1> */}
                    {/* <h3>Highest match possible</h3> */}
                    {/*line goes here*/}
                    <h4>You've answered {questions?.answered ? Object.values(questions.answered).length : ''} questions</h4>
                    <h4>You've answered {questions?.answered ? numAnswered : ""} questions</h4>
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
                        {nextquestion && nextquestion[0]?.question_body}

                    </h3>
                    <div className='questionbox'>
                        <>
                            <button onClick={() => ansTrue()}>Yes</button>
                            <button onClick={() => ansFalse()}>No</button>
                        </>
                        {/* <button onClick={() => skip(nextquestion[0]?.id)}>Skip</button> */}
                        <button onClick={() => skip(nextquestion)}>Skip</button>

                    </div>
                </div>
                <div id='bottom'>
                    <h2>Answered Questions</h2>
                    {listques?.map((q) =>
                        <>
                            <>
                                {q.ques?.question_body}
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
                                modalComponent={<UserAnswerForm q={[questions.answered[q.ques?.id], q.ques]} />}
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
