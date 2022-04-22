import React, { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, serPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={() => { serPortionNumber(portionNumber - 1) }}>prev</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span
                            onClick={(e) => {
                                onPageChanged(p);
                            }}
                            className={currentPage === p && s.selectedPage}
                        >
                            {" "}
                            {p}
                        </span>
                    );
                })}
            {
                portionCount > portionNumber &&
                <button onClick={() => serPortionNumber(portionNumber + 1)}>next</button>
            }
        </div>

    )
}

export default Paginator