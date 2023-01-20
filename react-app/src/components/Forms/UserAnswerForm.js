import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateAns } from '../../store/questions';


const UserAnswerForm = ({ q }) => {
  const user = useSelector(state => state.user.id)
  const ori_ans = useSelector(state => state.question)
  const new_ans = q[0].ans !== 'True' ? 'True' : 'False'
  const [errors, setErrors] = useState([]);
  const [answer, setAnswer] = useState(new_ans);
  const dispatch = useDispatch();


  const onSub = async (e) => {
    e.preventDefault()
    return await dispatch(updateAns({
      ans: answer,
      question_id: q[1].id,
      user_id: user
    })).catch(async () => {
      //error handling here})
      // setErrors()
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
        <>
          <div>
            {q[1].question_body}
          </div>
          <>
            <p style={q[0].ans == 'True' ? { fontWeight: 'Bold' } : { textDecoration: 'line-through' }}>
              Yes
            </p>
            <p style={q[0].ans == 'True' ? { textDecoration: 'line-through' } : { fontWeight: 'Bold' }} >
              No
            </p>
          </>
        </>
        <div>
          Current Answer: {q[0].ans !== 'True' ? 'No' : 'Yes'}
        </div>

      </div>
      <button type='submit'>Change?</button>
    </form>


  );
};

export default UserAnswerForm;
