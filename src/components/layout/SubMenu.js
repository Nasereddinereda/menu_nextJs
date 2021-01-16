import React from 'react'
import Child from "./childMenu"

const SubMenu = ({ data }) => {

    return (
        <div className="">

            <p className="category mb-3"> {data.category} </p>

            {
                data.items.map(elm =>
                    <Child elm={elm} key={elm.title} />
                )
            }

            {/* don't delete this div because it's replace margin bottom, if I did the margin bottom it causes problems with collapse smooth  */}
            <div className="mb-category">  </div>
        </div>
    )
}

export default SubMenu
