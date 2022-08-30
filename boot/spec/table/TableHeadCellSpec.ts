import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";

export type SortDirection = 'asc' | 'desc'

export interface TableHeadCellProps extends React.HTMLAttributes<HTMLTableCellElement>, CommonAttributes {
    children?: any
    fieldName?: string
    currentSortFieldName?: string
    isSortAble?: boolean
    sortDirection?: SortDirection
    onClickSort?: (event: any, sortDirection: SortDirection, fieldName?: string) => void;
}


export default class TableHeadCellSpec<P extends TableHeadCellProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}