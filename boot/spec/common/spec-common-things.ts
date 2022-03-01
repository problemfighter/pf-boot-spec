import {Component} from 'react';


export interface PFUIState { }

export default class PFBSReactComponent<P, S extends PFUIState> extends Component<P, S> {}