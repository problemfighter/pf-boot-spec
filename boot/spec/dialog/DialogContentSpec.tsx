import React from "react";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";

export interface DialogContentProps {
    children?: any
}


export default class DialogContentSpec<P extends DialogContentProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}