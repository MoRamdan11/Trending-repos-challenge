const allPagesNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
];

const pageReducerDefault = [1, 2, 3, 4, 5, 6];

const pageNumberReducer = (state = pageReducerDefault, action) => {
  switch (action.type) {
    case "CHANGE_PAGINATION_UP": {
      return allPagesNumbers.slice(
        action.currentPage - 1,
        action.currentPage + 5
      );
    }

    case "CHANGE_PAGINATION_DOWN": {
      return allPagesNumbers.slice(action.currentPage - 6, action.currentPage);
    }

    case "RESET_PAGINATION": {
      return pageReducerDefault;
    }

    default:
      return state;
  }
};

export default pageNumberReducer;
