import {stream} from "m2"
import adaptive from "./adaptive"
import kit from "./kit"
import customPathname from "./custom-pathname"

export default {

    owner() {
        return stream( (emt, { hook } ) => {

            emt([{}]);

            hook.add( ( { key, event } ) => {

                event.log();

            } );

        } );

    },
    lazy() {
        return stream( (emt) => {
            setTimeout( () => {
                emt([{lazydata: 777}]);
            }, 5000 );
        } );
    },
    adaptive,
    kit,
    ["custom-pathname"]: customPathname

}