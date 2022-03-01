import React from "react";
import {CommonAttributes} from "./common/common-attrs";
import {FieldCommonProps, FieldWrappingProps} from "./InputSpec";
import PFBSReactComponent from "./common/spec-common-things";

export interface SelectProps extends FieldWrappingProps, CommonAttributes, FieldCommonProps {
    isMulti?: boolean
    isClearable?: boolean
    isSearchable?: boolean
    options: Array<any>;
    optionLabel: string;
    optionValue: string;
    onChange?: (event: any) => void;
}


export default class SelectSpec<P extends SelectProps, S> extends PFBSReactComponent<P, S> {}