import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateAnsThunk, deleteAnsThunk } from '../../store/questions';
import { useModal } from '../../context/Modal';


const UserAnswerForm = ({ id, ans }) => {
  console.log(ans, '@#@#@#', id)
  const user = useSelector(state => state.user.id)
  const questionstate = useSelector(state => state.questions)
  const questionAns = questionstate.answered[id]
  const questionBody = questionstate.all[id]
  const { closeModal } = useModal()
  // const new_ans = q[0].ans !== 'True' ? 'True' : 'False'
  const [errors, setErrors] = useState([]);
  // const [answer, setAnswer] = useState(new_ans);
  const dispatch = useDispatch();
  let answer
  let act = true
  // console.log(questionAns,questionBody)
  const onSub = async (e) => {
    e.preventDefault()
    setErrors([])
    if(act){
      ans == 'True'? answer = 'False' : answer = 'True'
    }
    if (!act) {
      return await dispatch(deleteAnsThunk(id))
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json()
          if (data.errors) setErrors([data.message]);
        }
        )
    }
    else {
      return await dispatch(updateAnsThunk({
        answer,
        question_id: id,
      }))
        .then(closeModal)
        .catch(async (res) => {
          // console.log(res)
          const data = await res.json()
          if (data.message) setErrors([data.message]);
        });
    }
  };

  return (
    <form onSubmit={onSub}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <>
          <div>
            {questionBody.question_body}
          </div>
          <>
            <p style={questionAns?.answer == 'True' ? { fontWeight: 'Bold' } : { textDecoration: 'line-through' }}>
              Yes
            </p>
            <p style={questionAns?.answer == 'True' ? { textDecoration: 'line-through' } : { fontWeight: 'Bold' }} >
              No
            </p>
          </>
        </>
        <div>
          Current Answer: {questionAns?.answer == 'True' ? 'Yes' : 'No'}
        </div>
      </div>
      <div>
        <button type='submit' onMouseOver={() => act = true}>Change Answer?</button>
      </div>
      <div>
        <button type='submit' onMouseOver={() => act = false}>Unanswer</button>
      </div>
      {/* <button type='button' onMouseOver={() => console.log(act)} /> */}
    </form>


  );
};

export default UserAnswerForm;
