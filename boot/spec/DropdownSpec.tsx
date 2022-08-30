import React from "react";
import PFBSReactComponent, {PFUIState} from "./common/spec-common-things";

export interface DropdownProps {
    itemList: Array<any>
    wrapperPlaceholder: any
    itemLoopCallBack?: (item: any, key: any) => any;
    wrapperTagName?: string
    itemTagName?: string
    wrapperClassName?: string
    wrapperId?: string
    itemClassName?: string
    itemId?: string
    itemOnClick?: (clickedItem: any, index: any, itemList: any) => any;
}


export default class DropdownSpec<P extends DropdownProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}