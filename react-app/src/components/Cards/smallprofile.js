import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UpdateInfo from '../Forms/UpdateInfoForm';
import OpenModalButton from '../OpenModalButton';



export const SmallProfile = (user) => {
    let first_name = user['first name']
    let last_name = user['last name']
    let city = user.city
    let state = user.state
    let id = user.id

    // const user = useSelector(state => state.user)
    const history = useHistory()

    const allimages = useSelector(state => state.images)
    let likedPersonsImgs = Object.values(allimages)
    let firstImage = likedPersonsImgs[0].image_url


    return (

        <>

        <div className='profileContainer' onClick={()=>history.push(`api/profile/likes/${id}`)}>
            <div className='profileBox'>
                <div className='imageContainer'>

                </div>
                <div className='userInfoContainer'>
                    <div className='userName'>
                        {first_name} {last_name}
                    </div>
                    <div className='userLocation'>
                        {city}, {state}
                    </div>
                </div>
                <div className='heartIcon'></div>
            </div>
        </div>

        </>

        // <div id='picheaderPink'>
        //     <div id='pinkleftROW'>
        //         <div id='pinkleftCOLleft'>

        //             <div id='pinkleftCOLleft' classname='top'>
        //                 <div id='name'>

        //                 </div>
        //                 <div id='verified'>

        //                 </div>

        //             </div>
        //             <div id='pinkleftCOLleft' classname='bottom'>
        //                 <div id='age'>
        //                     {likedUser?.username}

        //                 </div>
        //                 <div id='city'>
        //                     {likedUser?.city}

        //                 </div>
        //                 <div id='state'>
        //                     {likedUser?.state}

        //                 </div>

        //             </div>



        //         </div>



        //         <img id='pinkleftCOLrightMAtch%'>

        //         </img>

        //     </div>


        //     <div id='pinkright'>
        //         <div onClick={() => history.push('/myimages')} id='button'>
        //             My Images
        //         </div>
        //         < OpenModalButton
        //             id='createreviewbutt'
        //             buttonText="Edit Profile"
        //             modalComponent={<UpdateInfo />}

        //         />
        //     </div>
        // </div>

    )
}
