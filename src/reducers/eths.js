export default (state = '', action) => {
  switch (action.type) {
    case 'GET_ETHS_SUM':
      return action.value;

    default:
      return state;
  }
};


