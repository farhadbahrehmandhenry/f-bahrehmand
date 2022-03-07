var initialState = {
  channel: 1,
  channelItems: ['introduce myself'],
  channelName: 'start'
}

const channelReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'switchChannel':
      return {
        ...state, 
        channel: action.payload.keyId, 
        channelItems: action.payload.items,
        channelName: action.payload.key
      };
    default:
      return state;
  }
}

export default channelReducer;