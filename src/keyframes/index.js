import { stream } from "m2"

export default () => stream( emt => {

    emt( [ {  } ] );

    setTimeout(() => emt( [ { a: true } ] ), 2000 );

    setTimeout(() => emt( [ { a: true, b: true } ] ), 4000 );

} );