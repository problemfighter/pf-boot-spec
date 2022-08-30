import React from "react";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";

export type BoxSize = 'Small' | 'Large' | 'ExtraLarge'  | 'Fullscreen'

export interface DialogProps {
    title?: string
    children?: any
    onClose?: () => void;
    onLoad?: () => void;
    header?: any
    boxSize?: BoxSize
    className?: string
    containerClassName?: string
    headerClassName?: string
}


export default class DialogSpec<P extends DialogProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}