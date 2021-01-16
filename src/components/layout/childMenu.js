import { useState } from 'react'
import Link from 'next/link';

import { GetIcons } from "./GetIcons"
import { BsChevronCompactRight, BsChevronCompactDown } from "react-icons/bs"

import {
    Collapse
} from "@chakra-ui/react"





const childMenu = ({ elm }) => {

    const [curret, setCurrent] = useState(false);
    let i = Math.floor(Math.random() * 10000000);


    return (
        <div className="mb-2 line-sub flex">


            <div className="current-sub" > </div>

            <div className="w-95">
                {/* Sub Menu  */}

                <div className={curret ? "flex justify-between cr-pt line-menu line-menu-active" : "flex justify-between cr-pt line-menu"} onClick={() => setCurrent(!curret)}>
                    <div className="flex icon-svg">
                        <div className="mr-4"> {GetIcons(elm.icon)} </div>
                        <p className="css-cl-white css-title"> {elm.title} </p>
                    </div>
                    <div className="side-svg">
                        {
                            curret ?
                                <BsChevronCompactDown /> :
                                <BsChevronCompactRight />
                        }
                    </div>
                </div>

                {/* Childs  */}

                <div className="child-menu">
                    <Collapse in={curret} animateOpacity>
                        <div className="p-3">
                            {
                                elm.sub.map(child =>
                                    <div key={child.title} className="py-2">
                                        <Link href={child.target}  >
                                            <a className="line-child" > {child.title}  </a>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </Collapse>
                </div>

            </div>


        </div>
    )
}

export default childMenu
