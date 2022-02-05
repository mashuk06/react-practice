import React from 'react'

const ImageList = (props) => {

    const images = props.images.map((image,index) => {
        return (
            <div key={index}>
                <img src={image.webformatURL} alt="" />
            </div>
        )
    })

    return (
        <div>
            { images }
        </div>
    )
}


export default ImageList
