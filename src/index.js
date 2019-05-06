import {stream} from "m2"

export default {

    owner: () => stream( (emt, { hook } ) => {

        hook.add( () => {

            debugger;

        } );

    } )

}