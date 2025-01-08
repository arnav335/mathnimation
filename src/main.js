import { components } from "./mathnimation/index.js"
const app = document.getElementById("app")

components.rectangle("myBestRectangle",
    { height: "50vh", width: "70vw", backgroundColor: "#998877", childOf: app, position:"static" }
)
components.arc("arc1",
    {
        childOf: app,
        curvature: "50%",
        radius: "100px",
        arcSlice: {
            color:"red",
            angle:"90deg"
        },
        rotate: "90deg"
    }
)
components.arc("arc2",
    {
        childOf: app,
        curvature: "50%",
        radius: "100px",
        arcSlice: {
            color:"red",
            angle:"90deg"
        },
        rotate: "180deg"

    }
)
components.arc("arc3",
    {
        childOf: app,
        curvature: "50%",
        radius: "100px",
        arcSlice: {
            color:"red",
            angle:"90deg"
        },
        rotate: "270deg"

    }
)
components.arc("arc4",
    {
        childOf: app,
        curvature: "50%",
        radius: "100px",
        arcSlice: {
            color:"red",
            angle:"90deg"
        }

    }
)