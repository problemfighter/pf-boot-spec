import React from "react";
import {FieldWrappingProps, InputCommonProps} from "./InputSpec";
import {CommonEvent} from "./common/common-attrs";
import PFBSReactComponent, {PFUIState} from "./common/spec-common-things";

export interface TextFieldProps extends FieldWrappingProps, InputCommonProps, CommonEvent {

}


export default class TextFieldSpec<P extends TextFieldProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}