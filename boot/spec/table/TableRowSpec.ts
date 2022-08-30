import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";


export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement>, CommonAttributes {
    children?: any
}


export default class TableRowSpec<P extends TableRowProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}