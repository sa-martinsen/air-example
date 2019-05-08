import {stream} from "m2"

import graph from "./graph"

export default {

    graph,
    owner: () => stream( (emt, { hook } ) => {

        emt([{}]);

        hook.add( ( { key, event } ) => {
         
	        event.log();

        } );

    } )

}