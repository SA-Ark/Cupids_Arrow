import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Redirect } from 'react-router-dom';
import { getImages, deleteImage } from '../../store/images';
import MyImageForm from '../Forms/MyImageForm'
import EditImageForm from '../Forms/EditImageForm';
import OpenModalButton from '../OpenModalButton'

import './MyImages.css'
const MyImages = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const allimages = useSelector(state => state.images)
  const [del, setDel] = useState(true) //maybe hand state to delete?
  const [errors, setErrors] = useState([])

  let myimgs = Object.values(allimages)
  console.log(myimgs)
  const deleteImg = async (id) => dispatch(deleteImage(id))
    .then(setDel(!del))
    .catch(async (res) => {
      const response = await res.json()
      if (response.errors) setErrors([...response])
    })

  useEffect(() => {
    dispatch(getImages())
  }, []);
  myimgs.length ? myimgs = myimgs.filter(x => x.user_id == user.id) : myimgs = null
  // console.log(myimgs)

  return (

    <div id='outerpiccont'>
      <div id='piccontleft'>
        hey
        {myimgs?.map(img => (
          <>
            <div style={{ height: '20vw', width: '20vw' }}>
              <img src={`${img.image_url}`} />
            </div>

            <div>
              < OpenModalButton
                id='createreviewbutt'
                buttonText="Edit"
                modalComponent={<EditImageForm id={img.id} />}
              />
            </div>
            <div onClick={() => deleteImg(img.id)}>
              {/* <div onClick={()=>dispatch(deleteImage(img.id))}> */}
              DELETE THIS
            </div>
          </>

        ))}



      </div>
      <div id='piccontright'>
        < OpenModalButton
          id='createimagebutton'
          buttonText="Create New Iage"
          modalComponent={<MyImageForm />}
        />


      </div>
    </div>





  )

}

export default MyImages;
