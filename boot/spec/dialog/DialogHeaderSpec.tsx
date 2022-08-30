import React from "react";
import PFBSReactComponent, {PFUIState} from "../common/spec-common-things";

export interface DialogHeaderProps {
    children?: any
}


export default class DialogHeaderSpec<P extends DialogHeaderProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}