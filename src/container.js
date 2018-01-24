import {transformEveryFromData} from "air-stream"
import {Loader, Error} from "m2"

/**
 * Органайзер списка
 * @param scheme
 * @param stream
 * @param {Array<String>} signature
 */
export default function container({scheme, stream, signature}) {

    //коллекция компонентов
    const plugs = scheme.constructor = [

        /**
         * Плагин, который определяет сигнатуру для поиска
         */
        function ({scheme, ...data}) {
            signature.map( prop => scheme[prop] = data[prop] )
        },

        /**
         * Плагин, который должен инициировать загрузку компонентов
         * в тот момент
         */
        function ({scheme}) {
            Loader.load();
            new Error("deps is not loading");
        }
        
    ];

    //управление элементами
    scheme.item = stream.map( transformEveryFromData( ({data, type}) => {
        if(type === "reinit") {

            const scheme = {};

            //сборка текущих плагинов
            plugs.every( plug => plug({ scheme, stream, ...data} ) );

            stream = stream( function () {



            } );

            return {scheme, stream};

        }
        else if(type === "add") {
            const stream = stream.find( finder );
            const scheme = {};
            return plugs.every( plug => plug({ scheme, stream, ...data} ) );
        }
    } ) );

}


/**
 * stream
 * {type: "reinit", data: [ signature ]}
 */