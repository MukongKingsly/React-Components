import React from "react"

const Navbar = React.lazy(() => import("./Navbar/Navbar"))
const ComponentOne = React.lazy(() => import("./loginOne/ComponentOne"));

export {
    Navbar,
    ComponentOne

}