import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateAns } from '../../store/questions';
import OpenModalButton from '../OpenModalButton'
import { useModal } from '../../context/Modal';
import { updateImage } from '../../store/images';


const MyImageForm = (id) => {
  const user = useSelector(state => state.user.id)
  const img = useSelector(state=>state.images[id])
  const [errors, setErrors] = useState([]);
  const [image_url, setImage_url] = useState('');
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const onSub = async (e) => {
    e.preventDefault()
  

    return await dispatch(updateImage({
        preview: true
    })).catch(async () => {
      //error handling here})
      setErrors()
    })

  };

  return (
    <form onSubmit={onSub}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <div>
          Please prvide the image_url for your image:
        </div>
        <div>
          <input
            type='image_url'
          //  name='username'
            placeholder='image_url'
            onChange={(e)=> setImage_url(e.target.value)}
            value={image_url}
          />
        </div>
      </div>
      <button type='submit'>Change?</button>
    </form>


  );
};

export default MyImageForm;
