import React from 'react'
import Item from './item'

class CarComment extends React.Component {

    render() {
        const data = this.props.res
        return (
            <div>
                {data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default CarComment
