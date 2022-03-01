import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent from "../common/spec-common-things";


export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardHeaderSpec<P extends CardHeaderProps, S> extends PFBSReactComponent<P, S> {}