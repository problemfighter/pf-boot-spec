import React from "react";
import {CommonAttributes} from "./common/common-attrs";
import PFBSReactComponent, {PFUIState} from "./common/spec-common-things";

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
    span?: number
    spanSmall?: number
    spanMedium?: number
    spanLarge?: number
    spanExtraLarge?: number
    spanTooExtraLarge?: number
}


export default class ColumnSpec<P extends ColumnProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}