import React from "react";
import PFBSReactComponent from "../common/spec-common-things";

export interface DialogProps {
    title?: string
    children?: any
    onClose?: () => void;
    onLoad?: () => void;
    header?: any
}


export default class DialogSpec<P extends DialogProps, S> extends PFBSReactComponent<P, S> {}