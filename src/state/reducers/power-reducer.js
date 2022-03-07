var initialState = {
  isOn: 'off' 
}

const powerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'on':
      return {...state, isOn: 'on'};
    case 'off':
      return {...state, isOn: 'off'};
    case 'onGoing':
      return {...state, isOn: 'onGoing'};
    default:
      return state;
  }
}

export default powerReducer;