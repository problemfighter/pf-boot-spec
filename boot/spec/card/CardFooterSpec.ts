import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent from "../common/spec-common-things";


export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardFooterSpec<P extends CardFooterProps, S> extends PFBSReactComponent<P, S> {}