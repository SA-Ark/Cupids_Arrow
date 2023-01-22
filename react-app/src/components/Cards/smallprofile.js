import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UpdateInfo from '../Forms/UpdateInfoForm';
import OpenModalButton from '../OpenModalButton';
export const mypage = () => {
    const user = useSelector(state => state.user)
    const history = useHistory()

    return (
        <div id='picheaderPink'>
            <div id='pinkleftROW'>
                <div id='pinkleftCOLleft'>

                    <div id='pinkleftCOLleft' classname='top'>
                        <div id='name'>
                        image goes here
                        </div>
                        <div id='verified'>

                        </div>

                    </div>
                    <div id='pinkleftCOLleft' classname='bottom'>
                        <div id='age'>
                            {user?.username}

                        </div>
                        <div id='city'>
                            {user?.city}

                        </div>
                        <div id='state'>
                            {user?.state}

                        </div>

                    </div>



                </div>



                <img id='pinkleftCOLrightMAtch%'>

                </img>

            </div>


            <div id='pinkright'>
                <div onClick={() => history.push('/myimages')} id='button'>
                    My Images
                </div>
                < OpenModalButton
                    id='createreviewbutt'
                    buttonText="Edit Profile"
                    modalComponent={<UpdateInfo />}

                />
            </div>
        </div>

    )
}