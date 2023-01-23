import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Redirect, useParams } from 'react-router-dom';
import { getImages, deleteImage } from '../../store/images';
import MyImageForm from '../Forms/MyImageForm'
import EditImageForm from '../Forms/EditImageForm';
import OpenModalButton from '../OpenModalButton';
import { fetchDetails } from '../../store/details';
import { getOtherImages } from '../../store/images';

import './MyImages.css'
const OtherImages = ({id}) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const allimages = useSelector(state => state.images)
  console.log(allimages, "ORIG IMAGES???")
  const [del, setDel] = useState(true) //maybe hand state to delete?
  const [errors, setErrors] = useState([])


  let myimgs = Object.values(allimages)
  console.log(myimgs, "IMAGES???")
  useEffect(async()=>{return await dispatch(fetchDetails(id)).then(dispatch(getOtherImages(id)))
  .catch(async (res) => {
    const response = await res.json()
    if (response.errors) setErrors([...response])
  })}, [id])


  useEffect(() => {
    dispatch(getImages())
  }, [id]);

  myimgs.length ? myimgs = myimgs.filter(img => img.user_id == id) : myimgs = null
  console.log(myimgs, "FINAL IMAGES???")





return (


      <div id='piccontleft'>

        {myimgs?.map(img => (
          <>
            <div style={{ height: '20vw', width: '20vw' }}>
              <img src={`${img.image_url}`} />
            </div>
            </>

            ))}

</div>
)}

export default OtherImages
