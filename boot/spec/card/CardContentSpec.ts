import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";


export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardContentSpec<P extends CardContentProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}