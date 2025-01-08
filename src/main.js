import { components } from "./mathnimation/index.js";

components.rectangle({
    width: "10vh",
    height: "10vh",
    childOf: document.getElementById("app"),
    backgroundColor:"blue"
},
    {
        duration: 0.5,
        margin:0,
        y:100,
        yoyo:true,
        repeat:-1,
        type:"to"
    })

