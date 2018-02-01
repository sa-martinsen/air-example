import {Application} from  "m2"

const app = new Application({
    //"/static/game/"
    path: "/static/app/",
    //head app default main
    head: { name: "main" },
    //autorun: true
});

app.render(source);