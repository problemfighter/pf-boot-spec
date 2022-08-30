import React from "react";
import {CommonAttributes} from "./common/common-attrs";
import PFBSReactComponent, {PFUIState} from "./common/spec-common-things";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class RowSpec<P extends RowProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}