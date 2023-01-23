import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateAns } from '../../store/questions';
import OpenModalButton from '../OpenModalButton'
import { useModal } from '../../context/Modal';
import { createImage } from '../../store/images';


const MyImageForm = ({ q }) => {
  const [errors, setErrors] = useState([]);
  const [image_url, setImage_url] = useState('');
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const onSub = async (e) => {
    e.preventDefault()
    setErrors([])

    return await dispatch(createImage(image_url))
    .then(closeModal)
    .catch(async (res) => {
      const response = await res.json()
      if (response.errors) setErrors([...response])
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
      <button type='submit'>Submit</button>
    </form>


  );
};

export default MyImageForm;
