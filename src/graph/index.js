import { stream } from "m2"
import { sort } from "nr-graph"
import Parser from "./parser"

export default ( { schema } ) => stream( (emt, {sweep}) => {

    sweep.add(schema.get("@$").at( (root) => {

        const graph = new Parser().parseData(root);
        const units = sort({ graph });
        
        emt([{
            units,
            lines: units.reduce( (acc, { parentId, id, x, y }) => {
                if(parentId) {
                    const { x: x2, y: y2 } = units.find( ({ id }) => id === parentId );
                    acc.push( { id, x1: x, y1: y, x2, y2 } );
                }
                return acc;
            }, [ ])
        }]);

    } ));

} );