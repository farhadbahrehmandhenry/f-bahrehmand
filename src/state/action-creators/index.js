const actions = {
  turnOn: () => {
    return (dispatch) => {
      dispatch({
        type: 'on'
      })
    }
  },
  turnOff: () => {
    return (dispatch) => {
      dispatch({
        type: 'off'
      })
    }
  },
  onGoing: () => {
    return (dispatch) => {
      dispatch({
        type: 'onGoing'
      })
    }
  },
  switchChannel: (channel) => {
    return (dispatch) => {
      dispatch({
        type: 'switchChannel',
        payload: channel
      })
    }
  },
  updateCurrentItem: (items) => {
    return (dispatch) => {
      dispatch({
        type: 'updateCurrentItem',
        payload: items
      })
    }
  },
}

export default actions;