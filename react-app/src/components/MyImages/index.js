import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Redirect } from 'react-router-dom';
import { getImages } from '../../store/images';
import MyImageForm from '../Forms/MyImageForm'
import OpenModalButton from '../OpenModalButton'

const MyImages = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  const allimages = useSelector(state=>state.images)
  const [preview, setPreview] = useState('')
  // const myimgs = Object.values(allimages).filter(x=>x.user_id==user.id)



useEffect(() => {
  dispatch(getImages())

}, []);

// console.log(myimgs)

  return (
    
      <div id='outerpiccont'>
        <div id='piccontleft'>
        



        </div>
        <div id='piccontright'>
      {/* < OpenModalButton
      id='createreviewbutt'
      buttonText="newimage"
      modalComponent={<MyImageForm />}
      /> */}
      

      </div>
      </div>
   




  )

}

export default MyImages;

