import React from "react";
import PFBSReactComponent, {PFUIState} from "./common/spec-common-things";

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}


export default class LabelSpec<P extends LabelProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}