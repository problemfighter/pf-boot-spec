import React from "react";
import PFBSReactComponent from "../common/spec-common-things";

export interface DialogContentProps {
    children?: any
}


export default class DialogContentSpec<P extends DialogContentProps, S> extends PFBSReactComponent<P, S> {}