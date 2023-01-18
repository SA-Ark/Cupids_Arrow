import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useDispatch, NavLink } from 'react-router-dom';

export default function QuestionsPage({ }) {


    return (<>
        <div className='mainQuestion'>
            <div className='left'>
                <div>
                    <h1>{Percentage_answered}</h1>
                    <h3>Highest match possible</h3>
                    {/*line goes here*/}
                    <h4>You've answered { } questions</h4>
                    <div className='question_type'>
                        <div>
                            <div>
                                PUBLIC
                            </div>
                            <div>
                                {public_number}
                            </div>
                        </div>
                        <div>
                            <div>
                                IMPORTANT
                            </div>
                            <div>
                                {IMPORTANT_number}
                            </div>
                        </div>
                        <div>
                            <div>
                                EXPLAINED
                            </div>
                            <div>
                                {EXPLAINED_number}
                            </div>
                        </div>
                        <div>
                            <div>
                                PRIVATE
                            </div>
                            <div>
                                {PRIVATE_number}
                            </div>
                        </div>
                        <div>
                            <div>
                                SKIPPED
                            </div>
                            <div>
                                {SKIPPED_number}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='Unanswered'>
                    <div className='questiontext'>
                        {questionhere}
                    </div>
                    <div className='questionbox'>
                        <button>Skip</button>
                        <button>Answer</button>
                    </div>
                </div>
                <h2>Answered Questions</h2>
                {loopthrough}
                <div className='answered'>
                    <div className='questiontext'>
                        {questionhere}
                    </div>
                    {/*line goes here*/}
                    {loopthrough - questions}
                    <div>{looped - questions - goes - here}</div>
                    <button>RE-ANSWER</button>
                </div>
            </div>


        </div>
    </>)
}
