import React from 'react'
import * as Svgs from "../svg"


export const GetIcons = (name) => {

    const components = {
        Messenger: Svgs.Messenger,
        Time: Svgs.Time,
        News: Svgs.News,
        Thumb: Svgs.Thumb
    }



    if (name in components) {
        const Icon = components[name];
        return <Icon />

    } else {
        return null
    }
}


