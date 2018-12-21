export default (state = '', action) => {
  switch (action.type) {
    case 'GET_TOKENS_SUM':
      return action.value;

    default:
      return state;
  }
};


