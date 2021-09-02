export const changePaginationUp = (currentPage) => {
  return {
    type: "CHANGE_PAGINATION_UP",
    currentPage,
  };
};

export const changePaginationDown = (currentPage) => {
  return {
    type: "CHANGE_PAGINATION_DOWN",
    currentPage,
  };
};

export const resetPagination = () => {
  return {
    type: "RESET_PAGINATION",
  };
};
