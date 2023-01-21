// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UPDATE_USER = 'session/UPDATE_USER'


const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user
})




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
  const response = await fetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

//Do we pass these in?
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

export const editUser = (newInfo) => async (dispatch) => {
    const {
      username,
      first_name,
      last_name,
      email,
      password,
      relationship_status,
      city,
      state,
      biography,
      gender,
      sexual_orientation,
      income,
      kids,
      relationship_goal,
      race,
      height,
      weight,
      inebriates,
      religion} = newInfo

  const response = await fetch('/api/auth/edit/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newInfo
      // {
    //   username,
    //   first_name,
    //   last_name,
    //   email,
    //   password,
    //   relationship_status,
    //   city,
    //   state,
    //   biography,
    //   gender,
    //   sexual_orientation,
    //   income,
    //   kids,
    //   relationship_goal,
    //   race,
    //   height,
    //   weight,
    //   inebriates,
    //   religion
    // }
    )
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateUser(data))
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
      // return { user: action.payload }
      newState = action.payload
      return newState;
    case UPDATE_USER:
      // const currentUser = {...state.user}
      newState['user'] = action.payload
      return newState

    case REMOVE_USER:
      // return { user: null }
      newState = null
      return newState;
    default:
      return newState;
  }
}
