import React from "react";
import { connect } from "react-redux";
import {
  changePage,
  changePageUp,
  changePageDown,
} from "../../Redux/actions/currentStates";
import {
  changePaginationUp,
  changePaginationDown,
  resetPagination,
} from "../../Redux/actions/pagesNumbers";
import "./pagination.css";

const Pagination = ({ pagesNumbers, currentPage, dispatch }) => {
  const handlePageChange = (e) => {
    document.getElementById("repos").scrollIntoView({ behavior: "smooth" });
    const val = parseInt(e.target.value);
    dispatch(changePage(val));
    if (val === 1 || val === 34) {
      dispatch(resetPagination());
    } else if (val === pagesNumbers[pagesNumbers.length - 1]) {
      dispatch(changePaginationUp(val));
    } else if (val === pagesNumbers[0]) {
      dispatch(changePaginationDown(val));
    }
  };

  const handleNextPageClick = () => {
    document.getElementById("repos").scrollIntoView({ behavior: "smooth" });
    dispatch(changePageUp());
    if (currentPage === pagesNumbers[pagesNumbers.length - 1]) {
      dispatch(changePaginationUp(currentPage));
    }
  };

  const handleBelowPageClick = () => {
    document.getElementById("repos").scrollIntoView();
    dispatch(changePageDown());
    if (currentPage === pagesNumbers[0]) {
      dispatch(changePaginationDown(currentPage));
    }
  };

  return (
    <div className="pagination-container" id="pagination">
      <div className="pagination">
        <button
          onClick={handleBelowPageClick}
          className={currentPage === 1 ? "disabled-btn" : "pagination-btn"}
          disabled={currentPage === 1}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        {pagesNumbers[0] !== 1 && (
          <button value={1} onClick={handlePageChange} className="page-number">
            1
          </button>
        )}
        {pagesNumbers[0] !== 1 && <span className="dots">.....</span>}
        {pagesNumbers.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              value={pageNumber}
              onClick={handlePageChange}
              className={
                currentPage === pageNumber ? "active-page" : "page-number"
              }
            >
              {pageNumber}
            </button>
          );
        })}
        {pagesNumbers[pagesNumbers.length - 1] !== 34 && (
          <span className="dots">.....</span>
        )}
        {pagesNumbers[pagesNumbers.length - 1] !== 34 && (
          <button
            value={34}
            onClick={handlePageChange}
            className={
              currentPage === 34 ? "page-number active-page" : "page-number"
            }
          >
            34
          </button>
        )}
        <button
          onClick={handleNextPageClick}
          className={currentPage === 34 ? "disabled-btn" : "pagination-btn"}
          disabled={currentPage === 34}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pagesNumbers: state.pagesNumbers,
    currentPage: state.currentStates.currentPage,
  };
};

export default connect(mapStateToProps)(Pagination);
