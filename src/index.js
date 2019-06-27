import {stream} from "m2"

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
    }

}