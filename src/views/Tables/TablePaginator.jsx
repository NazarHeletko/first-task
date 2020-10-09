import React, {Component} from "react";
// react component for creating dynamic tables

import {
  Pagination, PaginationItem, PaginationLink
} from "reactstrap";

export default class TablePaginator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePageClick(e, pageNumber) {
    e.preventDefault();

    const { total, perPage } = this.props;
    const pages = Math.ceil(total / perPage);

    let newPageValue = Math.min(Math.max(1, Math.abs(Number(pageNumber))), pages);

    if (this.props.onChangePageCB) {
      this.props.onChangePageCB(newPageValue);
    }
  }

  handleNextClick(e) {
    const { page } = this.props;
    this.handlePageClick(e, page + 1);
  }

  handlePrevClick(e) {
    const { page } = this.props;
    this.handlePageClick(e, page - 1);
  }

  render() {
    const { total, perPage, page } = this.props;
    const pages = Math.ceil(total / perPage);

    const activeListPagesNear = 1;
    const unactiveListPagesVisible = 2;

    const activeLeft = Math.max(1, (page - activeListPagesNear));
    let activeRight = Math.min(pages, (page + activeListPagesNear));
    
    const dotsAfter = activeRight + 1 < pages;
    let showDots = false;

    let unactiveLeft = 0;
    if (dotsAfter) {
      unactiveLeft = Math.max(1, (pages - unactiveListPagesVisible + 1));
    } else {
      unactiveLeft = 1;
    }
    const unactiveRight = unactiveLeft + unactiveListPagesVisible - 1;

    if (dotsAfter) {
      showDots = activeRight + 1 < unactiveLeft;
    } else {
      showDots = activeLeft - 1 > unactiveRight;
    }

    const activeListPages = [];
    let unactiveListPages = [];
    
    for (let i = activeLeft; i <= activeRight; i++) {
      activeListPages.push(i);
    }
    for (let i = unactiveLeft; i <= unactiveRight; i++) {
      unactiveListPages.push(i);
    }
    unactiveListPages = unactiveListPages.filter(item => { return activeListPages.indexOf(item) === -1 });
    
    // console.log('page: ', page);
    // console.log('active: ', activeListPages);
    // console.log('unactive: ', unactiveListPages);
    // console.log('showDots: ', showDots);
    // console.log('dotsAfter: ', dotsAfter);

    const renderPages = (pageList) => {
      return (
        pageList.map((value, key) => {
            return (
              <PaginationItem active={value === page} key={key}>
                <PaginationLink onClick={(e) => { this.handlePageClick(e, value) }}>{value}</PaginationLink>
              </PaginationItem>
            )
          })
      )
    }

    return (  
      <Pagination listClassName="justify-content-center justify-content-md-end mb-md-0">
        <PaginationItem>
          <PaginationLink first onClick={(e) => { this.handlePageClick(e, 1) }}/>
        </PaginationItem>

        <PaginationItem disabled={ page === 1 }>
          <PaginationLink onClick={(e) => { this.handlePrevClick(e) }}>Previous</PaginationLink>
        </PaginationItem>
       
        {
          dotsAfter ? renderPages(activeListPages) : renderPages(unactiveListPages)
        }
        {
          showDots ? <PaginationItem disabled>
                      <PaginationLink>...</PaginationLink>
                    </PaginationItem> : null
        }
        {
          dotsAfter ? renderPages(unactiveListPages) : renderPages(activeListPages)
        }

        <PaginationItem disabled={page === pages}>
          <PaginationLink onClick={(e) => { this.handleNextClick(e) }}>Next</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink last onClick={(e) => { this.handlePageClick(e, pages) }}/>
        </PaginationItem>
      </Pagination>
    );
  }
}
