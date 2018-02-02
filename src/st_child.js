import list from "./container";

/**
 *
 * @param scheme - приедет главная схема
 * @param stream
 * @param type
 * @return {{scheme: *, stream: *}}
 */
export default function stchild({scheme, stream, data: {type}}) {
    if(type === "item") {

        //как получить ссылку на старший scheme?

        //преобразование потока к требуемому виду

        return stream;
    }
}



const schema =

    ["name",
        ["name", "string", { len: 5, def: "1.0.0" }],
        ["name", "string", { len: 5, def: "1.0.0" }]
    ]

;