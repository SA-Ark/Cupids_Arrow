// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const CREATE_ANSWERED_QUESTION = 'session/CREATE_ANSWERED_QUESTION'
const TEST = 'session/TEST'
// const CREATE_ANSWERED_QUESTION = 'session/CREATE_ANSWERED_QUESTION'

const setTest = (e) => ({
  type: TEST,
  payload: e
})

export const tester = (e) => async (dispatch) => {
  const res = await fetch('/api/users/devtest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      e
    )
  })
  if (res.ok) {
    const data = await res.json();
    if (data.errors) {
      return;
    }
    dispatch(setTest(data))
  }
}

const setAnswer = (ansObj) => ({
  type: CREATE_ANSWERED_QUESTION,
  payload: ansObj
})

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})


export const createAns = () => async (dispatch) => {
  const response = await fetch('api/questions', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(setAnswer(data))
  }
}

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signUp = (username, first_name, last_name, email, password, relationship_status, city, state) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      first_name,
      last_name,
      email,
      password,
      relationship_status,
      city,
      state
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}
const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case CREATE_ANSWERED_QUESTION:
      return { ans: action.payload.ans }
    case TEST:
      let i = { test: action.payload }
      console.log(i)
      return i
    default:
      return state;
  }
}
