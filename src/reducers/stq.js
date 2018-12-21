export default (state = '', action) => {
  switch (action.type) {
    case 'ON_CHANGE_STQ':
      return action.value;

    default:
      return state;
  }
};


