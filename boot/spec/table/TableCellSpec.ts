import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent from "../common/spec-common-things";


export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement>, CommonAttributes {
    children?: any
}


export default class TableCellSpec<P extends TableCellProps, S> extends PFBSReactComponent<P, S> {}