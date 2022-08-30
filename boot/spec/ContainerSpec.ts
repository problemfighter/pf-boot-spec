import {VariousSize} from "./common/common-type";
import {CommonAttributes} from "./common/common-attrs";
import PFBSReactComponent, {PFUIState} from "./common/spec-common-things";

export type ContainerType = VariousSize | "fluid"

export interface ContainerProps extends CommonAttributes {
    type?: ContainerType
    children?: any
}


export default class ContainerSpec<P extends ContainerProps, S extends PFUIState> extends PFBSReactComponent<P, S> {}