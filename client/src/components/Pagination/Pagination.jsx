import React,{useState}from "react";
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
const Pagination = (totalItems, currPage, itemsPerPage) => {
  const [totalPage, settotalPage] = useState(totalItems/itemsPerPage)
  const renderPaginationButtons=()=>{
    
  }
  return (
    <div className="page-container">
      <div className="page-wrapper">
        <button><BsChevronLeft/></button>
        {}
        <button><BsChevronRight /></button>
      </div>
    </div>
  );
};

export default Pagination;
