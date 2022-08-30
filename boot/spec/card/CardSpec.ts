import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardSpec<P extends CardProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}