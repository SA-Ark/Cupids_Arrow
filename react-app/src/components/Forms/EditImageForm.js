import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { updateImage } from '../../store/images';


const EditImageForm = (id) => {
  // const user = useSelector(state => state.user.id)
  // const img = useSelector(state=>state.images[id])
  const [errors, setErrors] = useState([]);
  const [preview, setPreview] = useState(false);
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const onSub = async (e) => {
    e.preventDefault()
  

    return await dispatch(updateImage(id))
    .then(closeModal)
    .catch(async () => {
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
         Make Preview?
        </div>
        <div>
          <input
            type='checkbox'
          //  name='username'
            placeholder='preview'
            onChange={(e)=> setPreview(e.target.value)}
            value={preview}
          />
        </div>
      </div>
      <button type='submit'>Change?</button>
    </form>


  );
};

export default EditImageForm;
