import React from 'react';
import s from './Paginator.module.css'

type PaginatorPropsType = {
    pages: Array<number>
    onPageChange: (p: number) => void
    currentPage: number
}
export const Paginator = (props: PaginatorPropsType) => {
    return (
        <div>
            {props.pages.map(p => <span onClick={() => props.onPageChange(p)}
                                        className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>)}
        </div>
    );
};

