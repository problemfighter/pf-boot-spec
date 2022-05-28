import React from "react";
import PFBSReactComponent from "../common/spec-common-things";

export type BoxSize = 'Small' | 'Large' | 'ExtraLarge'

export interface DialogProps {
    title?: string
    children?: any
    onClose?: () => void;
    onLoad?: () => void;
    header?: any
    boxSize?: BoxSize
}


export default class DialogSpec<P extends DialogProps, S> extends PFBSReactComponent<P, S> {}