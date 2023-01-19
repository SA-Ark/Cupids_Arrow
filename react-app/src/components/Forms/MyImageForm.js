import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateAns } from '../../store/questions';
import OpenModalButton from '../OpenModalButton'
import { useModal } from '../../context/Modal';
import { createImage } from '../../store/images';


const MyImageForm = ({ q }) => {
  const user = useSelector(state => state.user.id)
  const [errors, setErrors] = useState([]);
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const onSub = async (e) => {

    return await dispatch(createImage(url)).catch(async () => {
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
          Please prvide the URL for your image:
        </div>
        <div>
          <input
            type='url'
          //  name='username'
            placeholder='URL'
            onChange={(e)=> setUrl(e.target.value)}
            value={url}
          />
        </div>
      </div>
      <button type='submit'>Change?</button>
    </form>


  );
};

export default MyImageForm;
