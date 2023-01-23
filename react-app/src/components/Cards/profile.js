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
import '../../css/profile.css'
// import {MyImages}

export function UserCard({person}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const { id } = useParams()
    const pictures = useSelector(state => state.images)
    console.log(person, 'prooof')

    // const { id } = person?.person
    // person = person.user[0]

    // person = person[0]
    // const { id, first_name, gender, biography, city,
    //     state, age, weight, kids, relationship_goal,w
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
    // // }
    // useEffect(() => {
    //     //fetchLikes
    //     dispatch(fetchLikes())
    // }, [id])
    // console.log(person, "PERSASSASSSOnnn")
    return  (
        <div className='page'>
        <div className='profileHub'>
            <div className='profile-hub-user-wrapper'>
                <div className='blckAreaContainer'>
                    <div className='imageContainer'>
                        <div className='innerImageCont'>
                            <img className='profileimage' src={profilepic} />
                            {/* <img src={profilepic} /> */}
                        </div>
                    </div>
                    <div className='nameandlocal'>
                        <div className='userNameand'>
                            <h1 className='nameContainer'>
                                {person?.id ? person?.['first name'] : user?.['first_name']}
                            </h1>
                            <div className='checkContainer'>
                                <img className='checkmark' src={check} />
                            </div>
                        </div>
                        <div className='userLocation'>
                            <h2 className='location'>
                            {person?.id ? person.city : user.city}, {person?.id ? person.state : user.state}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div className='botcontainmer'>

                        {/* <img src={profilepic} /> */}



                            {/* {person?.id ? person?.first_name : user?.first_name} */}

                                {/* <img src={check} /> */}




                                {/* {person?.id ? person.username : user.username} */}

                                {/* {person?.id ? person.city : user.city}

                                {person?.id ? person.state : user.state} */}

                    {person?.id ?
                        <div className='buttoncontainersz'>
                            <LikeButton className='likeanddislikebutton' userid={person?.id} />
                            <UnlikeButton className='likeanddislikebutton' userid={person?.id} />
                        </div>
                        :
                        <>
                            <div id='pinkright'>
                                <div className='profilebuttoneditround'>
                                    < OpenModalButton
                                        id='createreviewbutt'
                                        buttonText="Edit Profile"
                                        modalComponent={<UpdateInfo />} />
                                </div>
                                <div className='profilebuttonlikeround'   >
                                    < OpenModalButton
                                        id='createreviewbutt'
                                        buttonText="Edit Image"
                                        modalComponent={'<MyImages />'} />
                                </div>
                            </div>
                        </>
                    }








                    <div className='bottomproLEFTcol'>
                        {/* for loop through filled out cards to display start*/}
                        <div className="sumamryCard">

                                <h3 className="summaryCardTitle">My Summary</h3>

                            <div className="summaryCardWhiteBoxColumn">
                                <div className="summaryCardWhiteContent">
                                Music Lover Looking to Write the Next Verse
                                Me + You +… JK, You Dont Have to Do Any Math to Send Me a Message!
                                Gamer Chick Hitting Restart and Looking for a High Score in Co-Op Mode
                                Country Girl Who Loves to Get Down on the Farm
                                </div>

                            </div>
                        </div>



                        <div className="sumamryCard">

                                <h3 className="summaryCardTitle">More About Me</h3>

                            <div className="summaryCardWhiteBoxColumn">
                                <div className="summaryCardWhiteContent">
                                Fitness Lover Looking to Find My Swole Mate
Tired of Online Dating? Lets Be Each Others Reason for Signing Off
World Traveler Looking for a Lady Who Likes to Explore
Math Nerd Looking for Someone to Add to My Life and Multiply the Fun
Life is Great, But Maybe It Can Be Better With You?
Hopeless Romantic? Nope. HOPEFUL Romantic Positively Searching for My Match!
                                </div>

                            </div>
                        </div>


                        <div className="sumamryCard">

                                <h3 className="summaryCardTitle">Things I Like</h3>

                            <div className="summaryCardWhiteBoxColumn">
                                <div className="summaryCardWhiteContent">
                                Well Never Know If Were a Great Match Unless You Click that Message Me Button
Fun and Adventurous Guy: Take a Chance and Send Me a Message!
Art-Loving Women: Lets Paint a Picture of Life Together
Book Worm Looking to Write the Next Chapter
Movie Lover Looking for My Co-Star for a Real Life Romantic Comedy
Man Who Loves the Outdoors and Hiking: Lets Build a Path Together
                                </div>

                            </div>
                        </div>


                        <div className="sumamryCard">

                                <h3 className="summaryCardTitle">Hobbies</h3>

                            <div className="summaryCardWhiteBoxColumn">
                                <div className="summaryCardWhiteContent">
                                Fun and Quirky Lady Who Can Definitely Promise You Laughs
Proud Dog Mom Looking for a Partner In Crime
Casting Call for Movie Buffs! Send Me Your Favorite Movie Quote
You Cant Spell Online Dating Without a Bunch of Different Letters
Quirky Women Looking for the Mashed to My Potatoes
Accomplished Man Whos More Fun Than a 200 Foot Water Slide
                                </div>

                            </div>
                        </div>
                    </div>

                    </div>


        </div>
        </div>
    )
}

export default UserCard
