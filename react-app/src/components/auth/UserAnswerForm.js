import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createAns } from '../../store/session';


const UserAnswerForm = () => {
  const [errors, setErrors] = useState([]);
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const onSub = async (e) => {
    e.preventDefault();
    const data = await dispatch(createAns());

  };

  const updateAnswer = (e) => {
    setAnswer(e.target.value);
  };



  return (
    <form onSubmit={onSub}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='answer'>Answer</label>
        <input
          name='answer'
          type='text'
          placeholder='answer'
          value={answer}
          onChange={updateAnswer}
        />
        </div>
        <button type='submit'>Submit</button>
    </form>


  );
};

export default UserAnswerForm;
