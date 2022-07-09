import React from "react"

const Navbar = React.lazy(() => import("./Navbar/Navbar"))
const ComponentOne = React.lazy(() => import("./loginOne/ComponentOne"));
const CountdownTimer = React.lazy(() => import("./countdown/CountdownTimer"));

export {
    Navbar,
    ComponentOne,
    CountdownTimer
}