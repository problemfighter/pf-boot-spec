import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";


export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement>, CommonAttributes {
    children?: any
}


export default class TableCellSpec<P extends TableCellProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}