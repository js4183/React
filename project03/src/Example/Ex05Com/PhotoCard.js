import React from 'react'

const PhotoCard = (props) => {
    // <img src={props.item.url}></img>

    let boxStyle={
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContents: 'center',
        border : '1px solid black'
    }

    // let imgStyle = {

    // }
    return (
        <div style={boxStyle}>
            {props.item.name}
            {props.item.url}
        </div>
    )
}

export default PhotoCard