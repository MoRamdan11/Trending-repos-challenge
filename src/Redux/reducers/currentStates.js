const currentDefaultReducer = {
  currentPage: 1,
};

const currentReducer = (state = currentDefaultReducer, action) => {
  switch (action.type) {
    case "CHANGE_PAGE": {
      return { currentPage: action.newPage };
    }

    case "CHANGE_PAGE_UP": {
      return { currentPage: state.currentPage + 1 };
    }

    case "CHANGE_PAGE_DOWN": {
      return { currentPage: state.currentPage - 1 };
    }

    default:
      return state;
  }
};

export default currentReducer;
