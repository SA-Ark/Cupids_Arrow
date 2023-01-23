import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchDetails } from '../../store/details';
// import { createLike } from '../../store/likes';
import LikeButton from '../Buttons/LikeButton';
import { UnlikeButton } from '../Buttons/UnlikeButton'
import UpdateInfo from '../Forms/UpdateInfoForm';
import OpenModalButton from '../OpenModalButton'

export function UserCard({ person }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const details = useSelector(state => state.details)
    console.log(details, 'DETAILS??')
    const user = details[2]?.user
    console.log(user, 'thi sis user')
    const image = details[2]?.images?.['image_id: 9']?.image_url
    console.log(image, 'images?')

    // const [current, setcurrent] = useState([])
    // const { id, first_name, gender, biography, city,
    //     state, age, weight, kids, relationship_goal,
    //     race, inebriants, religion } = user
    // console.log(user, "11546941wtr4eh645e")
    ///DETERMINE BY STATE DIAGRAM
    // let myQuestions = answers.filter(x => x.user_id == myID)
    // let theirQuestions = answers.filter(x => x.user_id == id)

    // if (!myID) return null;


    //SWAPPING BUTTON LOGIC FOR LIKE/UUNLIKE
    // const likeUser = async () => {
    //     return await dispatch(createLike(.id, user.id))
    //     .catch(async(res)=>console.log(res))
    // }

    useEffect(async () => {
        // console.log(person)
        // setcurrent([])
        const newcurrent = await dispatch(fetchDetails(2))
        // setcurrent(newcurrent)
        // console.log(current, 'meow')

    }, [dispatch])

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('/api/users/10');
    //         const responseData = await response.json();
    //         setcurrent(responseData.users);
    //         console.log(current)
    //     }

    //     fetchData();

    // }, []);

    console.log(user, 'USERRRRRRRRRRRRRRRRRR')

    return (
        < div id='red' >
            {user?.first_name}

            < div id='topprofileGreenCOL' >




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
                                    {person?.id ? person?.username : user?.username}

                                </div>
                                <div id='city'>
                                    {/* {person?.id?.city} */}
                                    {person?.id ? person?.city : user?.city}

                                </div>
                                <div id='state'>
                                    {/* {person?.id?.state} */}
                                    {person?.id ? person?.state : user?.state}

                                </div>

                            </div>
                        </div>



                        <div id='pinkleftCOLrightMAtch%'>
                            -O%
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
                                <div id='button'>
                                    < OpenModalButton
                                        id='createreviewbutt'
                                        buttonText="Edit Profile"
                                        modalComponent={<UpdateInfo />} />
                                </div>
                                <button type='button' id='button' onClick={() => history.push('/myimages')}>
                                    My Images
                                </button>
                            </div>
                        </>
                    }

                </div>

                <div id='picsectionID'>
                    <img src={image}></img>
                    <img>
                    </img>
                    <img>
                    </img>
                </div>
                <div id='tiny '>

                </div>
            </div >


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

        </div >

    )
}

export default UserCard
