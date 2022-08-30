import React from "react";
import {PrimeColor} from "./common/common-type";
import PFBSReactComponent, {PFUIState} from "./common/spec-common-things";

export interface LoadingIndicatorProps {
    viewColor?: PrimeColor
}


export default class LoadingIndicatorSpec<P extends LoadingIndicatorProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}