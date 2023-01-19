import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAns, getInitialState } from '../../store/questions';
import UserAnswerForm from '../Forms/UserAnswerForm';
// import { getInitialState } from

export default function QuestionsPage({ }) {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.id)
    const questions = useSelector(state => state.questions)

    const questionss = async (e) => {
        e.preventDefault();
        const data = await dispatch(getInitialState());

    };
    // let rando
    // if (questions?.all_questions) rando = 
    const skip = async (e) => {
        return dispatch(createAns({
            user_id: user,
            question_id: 3,
            ans: 'False'
        })).catch(async () => { console.log('askdljfhaks') })
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
                    <div className='questiontext'>
                        {/* {questionhere} */}
                    </div>
                    <div className='questionbox'>
                        <button onClick={() => skip()}>Skip</button>
                        <button>Answer</button>

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