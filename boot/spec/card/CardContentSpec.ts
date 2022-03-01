import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent from "../common/spec-common-things";


export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardContentSpec<P extends CardContentProps, S> extends PFBSReactComponent<P, S> {}