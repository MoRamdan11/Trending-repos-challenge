export const changePage = (newPage) => {
  return {
    type: "CHANGE_PAGE",
    newPage,
  };
};

export const changePageUp = () => {
  return {
    type: "CHANGE_PAGE_UP",
  };
};

export const changePageDown = () => {
  return {
    type: "CHANGE_PAGE_DOWN",
  };
};
