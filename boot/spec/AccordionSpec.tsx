import {CommonAttributes} from "./common/common-attrs";
import React from "react";
import PFBSReactComponent from "./common/spec-common-things";


export interface AccordionHeader extends CommonAttributes {
    content: React.ReactNode
}

export interface AccordionBody extends CommonAttributes {
    content: React.ReactNode
}

export interface AccordionItem {
    isOpen?: boolean
    header: AccordionHeader
    body: AccordionBody
}

export interface AccordionProps extends CommonAttributes {
    isSingleExpand?: boolean
    isFlush?: boolean
    items: Array<AccordionItem>
}

export default class AccordionSpec<P extends AccordionProps, S> extends PFBSReactComponent<P, S> {

}