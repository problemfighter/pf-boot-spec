import {CommonAttributes} from "../common/common-attrs";
import {Color} from "../common/common-type";
import PFBSReactComponent from "../common/spec-common-things";

export type SortDirection = 'asc' | 'desc'

export interface DynamicTableHeadColumn extends CommonAttributes {
    displayName?: string
    fieldName?: string
    isSortAble?: boolean
    isActionColumn?: boolean
}

export interface DynamicTableHeadProps {
    currentSortFieldName?: string
    columns: Array<DynamicTableHeadColumn>
    color?: Color
    onClickSort?: (event: any, sortDirection: SortDirection, fieldName?: string) => void;
}


export default class DynamicTableHeadSpec<P extends DynamicTableHeadProps, S> extends PFBSReactComponent<P, S> {}