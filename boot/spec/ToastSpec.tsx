import React from "react";
import PFBSReactComponent from "./common/spec-common-things";

export type DisplayPosition = 'topCenter' | 'topLeft' | 'topRight' | 'bottomCenter' | 'bottomLeft' | 'bottomRight'
export type MessageType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
    displayPosition?: DisplayPosition
    messageType: MessageType
    message: string
    closeTimer?: number
    onClose?: () => void;
}


export default class ToastSpec<P extends ToastProps, S> extends PFBSReactComponent<P, S> {}