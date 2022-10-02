const ACTIONS = {
  LOAD_ACCOUNT: 'LOAD_ACCOUNT'
}

const loadAccount = () => async (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'LOAD_ACCOUNT',
      payload: {
        role: 'CLIENT',
        status: {
          isLoading: false,
          message: 'Load success!',
          isSuccess: true
        } 
      }
    })
  }, 1000);
}

export {
  ACTIONS,
  loadAccount
}