import React from 'react'

const RainbowFrame = (props)=>{

    let childrenWithWrapperDiv = []

    if (Array.isArray(props.children)) {
        childrenWithWrapperDiv=[...props.children]

    } else {
        childrenWithWrapperDiv.push ({...props.children})
    }

    props.colors.forEach((el)=>{
        childrenWithWrapperDiv = childrenWithWrapperDiv.map ((child,index)=>{
                return (
                <div 
                key={index}
                className='m-1' 
                style={{border:"solid 5px "+el}}>
                {child}</div> 
                )
        })
        
    })

    return (
        <div>
           {childrenWithWrapperDiv}
        </div>

    )

}

export default RainbowFrame