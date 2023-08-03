import React, {useState} from 'react';
import s from './Paginator.module.css'

type PaginatorPropsType = {
    totalUsersCount: number
    currentPage: number
    portionSize?: number
    pageSize: number
    setCurrentPage: (page: number) => void
}
export const Paginator = ({
                              totalUsersCount,
                              portionSize = 10,
                              pageSize,
                              setCurrentPage,
                              currentPage
                          }: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            <ul className={s.pages}>
                {
                    portionNumber > 1 &&
                    <button className={s.pagBtn + ' ' + s.prev} onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>Prev</button>
                }
                {
                    pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                        .map(page => {
                            return <li key={page} className={page === currentPage ? s.currentPage : ''}>
                                <button onClick={() => setCurrentPage(page)} type='button'>{page}</button>
                            </li>
                        })
                }
                {
                    portionCount > portionNumber &&
                    <button className={s.pagBtn + ' ' + s.next} onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>Next</button>
                }
            </ul>
        </div>
    );
};

