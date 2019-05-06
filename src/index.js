import {stream} from "m2"

export default {

    owner: () => stream( (emt, { hook } ) => {

        emt([{}]);

        hook.add( ( { key } ) => {

            debugger;

        } );

    } )

}