import { stream } from "m2"

export default ( { some } ) =>
  stream( emt => {

    console.log( some );

    emt({});
  } );