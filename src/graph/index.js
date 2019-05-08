import { stream } from "m2"
import { sort } from "nr-graph"
import Parser from "./parser"

export default ( { schema } ) => stream( (emt) => {

    schema.get("@$").at( (root) => {

        const graph = new Parser().parseData(root);
        const points = sort({ graph });

        emt([points]);

    } );

} );