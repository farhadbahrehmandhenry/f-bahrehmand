var initialState = {
  currentItem: {channel: 1, item: 'introduce myself'}
}

const currentItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'updateCurrentItem':
      return {...state, currentItem: action.payload};
    default:
      return state;
  }
}

export default currentItemReducer;