import React from "react";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";

export interface DialogFooterProps {
    children?: any
}


export default class DialogFooterSpec<P extends DialogFooterProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}