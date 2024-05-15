import React, { useReducer, useState } from 'react';

const initialState = {
  name: '',
  lastName: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [data, setData] = useState([])

  const handleInputChange = (field, value) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field,
      value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempArr = [...data]
    tempArr.push(state)
    setData(tempArr)
    console.log("state", state, initialState);
    dispatch({ type: 'RESET_FORM' });
  };
  console.log("data", data);

  return (
    <form onSubmit={handleSubmit} className='mt-20 flex space-x-2'>

      <input
        type="text"
        value={state.name}
        className='border'
        onChange={(e) => handleInputChange('name', e.target.value)}
      />

      <input
        type="text"
        value={state.lastName}
        className='border'
        onChange={(e) => handleInputChange('lastName', e.target.value)}
      />


      <button type="submit" className='bg-green-600 rounded h-9 px-3 text-white'>Submit</button>
    </form>
  );
};

export default UseReducerHook;
