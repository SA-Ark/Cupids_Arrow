import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import { createLike } from '../../store/likes';
import LikeButton from '../Buttons/LikeButton';
import { UnlikeButton } from '../Buttons/UnlikeButton'
import UpdateInfo from '../Forms/UpdateInfoForm';
import OpenModalButton from '../OpenModalButton'
import check from '../../assets/checkmark.png'
import { useEffect } from 'react';
import { fetchLikes } from '../../store/likes';
// import {MyImages}

export function UserCard(person) {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const { id } = useParams()
    const pictures = useSelector(state => state.images)

    // const { id, first_name, gender, biography, city,
    //     state, age, weight, kids, relationship_goal,
    //     race, inebriants, religion } = user
    // console.log(user, "11546941wtr4eh645e")
    ///DETERMINE BY STATE DIAGRAM
    // let myQuestions = answers.filter(x => x.user_id == myID)
    // let theirQuestions = answers.filter(x => x.user_id == id)

    // if (!myID) return null;
    let profilepic




    //SWAPPING BUTTON LOGIC FOR LIKE/UUNLIKE
    // const likeUser = async () => {
    //     return await dispatch(createLike(.id, user.id))
    //     .catch(async(res)=>console.log(res))
    // }
    useEffect(() => {
        //fetchLikes
        dispatch(fetchLikes())
    }, [id])

    return (




        <div id='picheaderPink'>
            <div id='pinkleftROW'>


                <div className='profile header blackish area'>
                    <div classNames='profile picture circle round'>
                        <img src={profilepic} />
                    </div>

                    <div id='city'>
                        <div id='pinkleftCOLleft' className='top'>
                            {person?.id ? person?.first_name : user?.first_name}
                            <div className='profile picture container round'>
                                <img src={check} />
                            </div>
                        </div>

                        <div className='details header profile text'>
                            <div className='profile user details'>
                                {person?.id ? person.username : user.username}
                            </div>
                            <div className='profile user details'>
                                {person?.id ? person.city : user.city}
                            </div>
                            <div className='profile user details'>
                                {person?.id ? person.state : user.state}
                            </div>

                            <div class='profile rightside buttons container '>
                            </div>
                        </div>
                    </div>
                    {person?.id ?
                        <>
                            <LikeButton userid={person?.id} />
                            <UnlikeButton userid={person?.id} />
                        </>
                        :
                        <>
                            <div id='pinkright'>
                                <div className='profile button edit round'>
                                    < OpenModalButton
                                        id='createreviewbutt'
                                        buttonText="Edit Profile"
                                        modalComponent={<UpdateInfo />} />
                                </div>
                                <div className='profile button like round'   >
                                    < OpenModalButton
                                        id='createreviewbutt'
                                        buttonText="Edit Profile"
                                        modalComponent={'<MyImages />'} />
                                </div>
                            </div>
                        </>
                    }


                </div>

                <div className='bottom half details boxes text'>







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











            </div>

        </div >

    )
}

export default UserCard
