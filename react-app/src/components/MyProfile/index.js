import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Redirect } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import SpotCard from '../Cards/profile'
import UpdateInfo from '../Forms/UpdateInfoForm';

export default function MyProfile({ answers, match, place }) {
    const history = useHistory()
    const dispatch = useDispatch()
    // const { id, first_name, gender, biography, city,
    //     state, age, weight, kids, relationship_goal,
    //     race, inebriants, religion } = match
    ///DETERMINE BY STATE DIAGRAM
    // const myID = useSelector(state => state.current.user.id)
    // let myQuestions = answers.filter(x => x.user_id == myID)
    // let theirQuestions = answers.filter(x => x.user_id == id)

    // if (!myID) return null;

    // return (<>
    //     <h1>yo mama</h1>
    // </>)


    return (
        <>
            <div className=''>
                <div>pref</div>
                <div onClick={() => <Redirect to='/myimages' />}>img</div>
            </div>

            {/* <SpotCard/> */}

            <h1>THIS IS MyProfile</h1>
            <div id='red'>

                <div id='topprofileGreenCOL'>




                    <div id='picheaderPink'>
                        <div id='pinkleftROW'>


                            <div id='pinkleftCOLleft'>

                                <div id='pinkleftCOLleft' className='top'>
                                    <div id='name'>

                                    </div>
                                    <div id='verified'>

                                    </div>

                                </div>
                                <div id='pinkleftCOLleft' className='bottom'>
                                    <div id='age'>

                                    </div>
                                    <div id='city'>

                                    </div>
                                    <div id='state'>

                                    </div>

                                </div>



                            </div>

                        </div>

                    </div>

                    <div id='picsectionID'>
                        <img>
                        </img>
                        <img>
                        </img>
                        <img>
                        </img>
                    </div>
                    <div id='tiny '>

                    </div>
                </div>
                {/* box to answer questions under image box: yes, no, skip. start*/}
                <div id="sumamryCard">
                    <div id="summaryCardBlackBar">
                        <h3 id="questionsCardTitle1"></h3>
                        <h3 id="questionsCardiIcon"></h3>
                        <h3 id="questionsCardTitle2"></h3>
                    </div>
                    <div id="summaryCardWhiteBoxColumn">
                        <div id="questionCardContentTop">
                            <div id='leftSlider'></div>
                            <div id='rightPercentage'></div>
                        </div>
                        <div id="questionCardcontentBottom">
                            {/* <div id='answerMoreQuestions'>
                                 code for dinamic questions start
                                <h3>ANSWER MORE QUESTIONS</h3>
                                <div id='questionDisplay'></div>
                                <div id='questionButtons'>
                                    <div id='questionButtonsTop'>
                                        <button id='questionButtonsYes'></button>
                                        <button id='questionButtonsNo'></button>
                                    </div>
                                    <div id='questionButtonsBottom'>
                                        <button id='questionButtonsSkip'></button>
                                    </div>
                                </div>
                                 code for dinamic questions end
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* box to answer questions under image box: yes, no, skip. end*/}
                <div id='bottomprofilePP'>



                    <div id='bottomproLEFTcol'>
                        {/* for loop through filled out cards to display start*/}
                        <div id="sumamryCard">
                            <div id="summaryCardBlackBar">
                                <h3 id="summaryCardTitle"></h3>
                            </div>
                            <div id="summaryCardWhiteBoxColumn">
                                <div id="summaryCardWhiteContent"></div>
                                <div id="summaryCardWhiteBoxmessage"></div>
                            </div>
                        </div>
                        {/* for loop through filled out cards to display end*/}
                        {/* question percent and results card start*/}
                        <div id="sumamryCard">
                            <div id="summaryCardBlackBar">
                                <h3 id="summaryCardTitle"></h3>
                            </div>
                            <div id="questionsCardWhiteBoxRow">
                                <div id="questionsCardPicture%Left">
                                    <div className="profile-questions-circles">
                                        <div className="profile-questions-userinfo-photos">
                                            <div className="profile-questions-userinfo-photos-photo">my image</div>
                                            <div className="profile-questions-userinfo-photos-photo">other persons image</div>
                                        </div>
                                        <div className="match-percent-pink-circle"></div>
                                    </div>
                                </div>
                                <div id="questionsCard-ADF-RightColumn">
                                    <div id='agree' className="profile-questions-entry-filters">
                                        <div className="profile-questions-entry-filters-left">
                                            <div className="profile-questions-entry-filters-title"></div>
                                            <div className="profile-questions-entry-filters-icon"></div>
                                        </div>
                                        <div className="profile-questions-entry-filters-right">
                                            <div className="profile-questions-entry-filters-count"></div>
                                        </div>
                                    </div>
                                    <div id='disagree' className="profile-questions-entry-filters">
                                        <div className="profile-questions-entry-filters-left">
                                            <div className="profile-questions-entry-filters-title"></div>
                                            <div className="profile-questions-entry-filters-icon"></div>
                                        </div>
                                        <div className="profile-questions-entry-filters-right">
                                            <div className="profile-questions-entry-filters-count"></div>
                                        </div>
                                    </div>
                                    <div id='findOut' className="profile-questions-entry-filters">
                                        <div className="profile-questions-entry-filters-left">
                                            <div className="profile-questions-entry-filters-title"></div>
                                            <div className="profile-questions-entry-filters-icon"></div>
                                        </div>
                                        <div className="profile-questions-entry-filters-right">
                                            <div className="profile-questions-entry-filters-count"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* question percent and results card end*/}
                    </div>

                    <div id='bottomproRIGHTcol'>
                        <OpenModalButton id='anything' buttonText='Update Info' modalComponent={<UpdateInfo/>}/>
                        <div id="sumamryCard" className='details'>
                            <div id="summaryCardBlackBar">
                                <h3 id="summaryCardTitle"></h3>
                            </div>
                            <div id="summaryCardWhiteBoxColumn">
                                <div id='details-info-row-column'>
                                    <div id="details-icon"></div>
                                    <div id="details-icon-info"></div>
                                </div>
                                <div id='details-info-row-column'>
                                    <div id="details-icon"></div>
                                    <div id="details-icon-info"></div>
                                </div>
                                <div id='details-info-row-column'>
                                    <div id="details-icon"></div>
                                    <div id="details-icon-info"></div>
                                </div>
                                <div id='details-info-row-column'>
                                    <div id="details-icon"></div>
                                    <div id="details-icon-info"></div>
                                </div>
                                <div id='details-info-row-column'>
                                    <div id="details-icon"></div>
                                    <div id="details-icon-info"></div>
                                </div>
                                <div id='details-info-row-column'>
                                    <div id="details-icon"></div>
                                    <div id="details-icon-info"></div>
                                </div>
                            </div>
                        </div>

                        <div id="sumamryCard">
                            <div id="summaryCardBlackBar">
                                <h3 id="summaryCardTitle"></h3>
                            </div>
                            <div id="summaryCardWhiteBoxColumn">
                                <div id="summaryCardWhiteContentRow">
                                    <div id="summaryCardWhiteContentRowLeft">
                                        <div id='last-active-icon'></div>
                                        <div id='last-active-title'></div>
                                    </div>
                                    <div id="summaryCardWhiteContentRowRight"></div>
                                </div>
                                <div id="summaryCardWhiteContentRow">
                                    <div id="summaryCardWhiteContentRowLeft">
                                        <div id='reply-time-icon'></div>
                                        <div id='reply-time-title'></div>
                                    </div>
                                    <div id="summaryCardWhiteContentRowRight"></div>
                                </div>
                                <div id="summaryCardWhiteContentRow">
                                    <div id="summaryCardWhiteContentRowLeft">
                                        <div id='reply-likely-icon'></div>
                                        <div id='reply-likely-title'></div>
                                    </div>
                                    <div id="summaryCardWhiteContentRowRight"></div>
                                </div>
                                <div id="summaryCardWhiteContentRow">
                                    <div id="summaryCardWhiteContentRowLeft">
                                        <div id='sends-first-icon'></div>
                                        <div id='sends-first-title'></div>
                                    </div>
                                    <div id="summaryCardWhiteContentRowRight"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div id='questionsMATHarea'>

                </div>

            </div>
        </>
    )

}

// export default SpotCard
