import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createLike } from '../../store/likes';

function UserCard({ answers, match, place }) {
    const history = useHistory()
    const dispatch = useDispatch()
    // const { id, first_name, gender, biography, city,
    //     state, age, weight, kids, relationship_goal,
    //     race, inebriants, religion } = match
        console.log(match, "11546941wtr4eh645e")
    ///DETERMINE BY STATE DIAGRAM
    const user = useSelector(state => state.user)
    // let myQuestions = answers.filter(x => x.user_id == myID)
    // let theirQuestions = answers.filter(x => x.user_id == id)

    // if (!myID) return null;

    const likeUser = async () => {
        return await dispatch(createLike(match.id, user.id)).catch(async(res)=>console.log(res))
    }

    return (
        <div id='red'>

            <div id='topprofileGreenCOL'>




                <div id='picheaderPink'>
                    <div id='pinkleftROW'>


                        <div id='pinkleftCOLleft'>

                            <div id='pinkleftCOLleft' classname='top'>
                                <div id='name'>

                                </div>
                                <div id='verified'>

                                </div>

                            </div>
                            <div id='pinkleftCOLleft' classname='bottom'>
                                <div id='age'>
                                    {match?.username}

                                </div>
                                <div id='city'>
                                {match?.city}

                                </div>
                                <div id='state'>
                                {match?.state}

                                </div>

                            </div>



                        </div>



                        <img id='pinkleftCOLrightMAtch%'>

                        </img>

                    </div>


                    <div id='pinkright'>
                        <div onClick={()=>{likeUser()}} id='button'>
                            like
                        </div>
                        <div id='button'>

                        </div>
                        <div id='button'>
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
                            <div class="profile-questions-circles">
                                <div class="profile-questions-userinfo-photos">
                                    <div class="profile-questions-userinfo-photos-photo">my image</div>
                                    <div class="profile-questions-userinfo-photos-photo">other persons image</div>
                                </div>
                                <div class="match-percent-pink-circle"></div>
                            </div>
                        </div>
                        <div id="questionsCard-ADF-RightColumn">
                            <div id='agree' class="profile-questions-entry-filters">
                                <div class="profile-questions-entry-filters-left">
                                    <div class="profile-questions-entry-filters-title"></div>
                                    <div class="profile-questions-entry-filters-icon"></div>
                                </div>
                                <div class="profile-questions-entry-filters-right">
                                    <div class="profile-questions-entry-filters-count"></div>
                                </div>
                            </div>
                            <div id='disagree' class="profile-questions-entry-filters">
                                <div class="profile-questions-entry-filters-left">
                                    <div class="profile-questions-entry-filters-title"></div>
                                    <div class="profile-questions-entry-filters-icon"></div>
                                </div>
                                <div class="profile-questions-entry-filters-right">
                                    <div class="profile-questions-entry-filters-count"></div>
                                </div>
                            </div>
                            <div id='findOut' class="profile-questions-entry-filters">
                                <div class="profile-questions-entry-filters-left">
                                    <div class="profile-questions-entry-filters-title"></div>
                                    <div class="profile-questions-entry-filters-icon"></div>
                                </div>
                                <div class="profile-questions-entry-filters-right">
                                    <div class="profile-questions-entry-filters-count"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                   {/* question percent and results card end*/}
                </div>

                <div id='bottomproRIGHTcol'>
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
    )

}

export default UserCard
