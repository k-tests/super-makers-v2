import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Line = props => {
    return (
<svg style={{width: '100%', height: '30px'}}>
  <line x1={props.offset} y1="15" x2={props.width} y2='15' style={{ stroke:'#182a74', strokeWidth: '30px', strokeLinecap:"round"} }
  />
</svg>
)
}

export default Line


// ${props.width}