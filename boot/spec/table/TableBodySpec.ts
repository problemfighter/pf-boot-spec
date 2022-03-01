import {CommonAttributes} from "../common/common-attrs";
import PFBSReactComponent from "../common/spec-common-things";


export interface TableBodyProps extends CommonAttributes {
    children?: any
}


export default class TableBodySpec<P extends TableBodyProps, S> extends PFBSReactComponent<P, S> {}