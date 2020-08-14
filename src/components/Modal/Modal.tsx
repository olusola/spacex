import React from 'react'
import styled from 'styled-components'
import Item from '../shared/Item'

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0,0,0,0.35);
    height: 100%;
    width: 100%;
    transition: all 0.3s ease-out;
`

const Body = styled.div`
    margin: 80px 15px;
    padding: 30px;
    background: white;
`

const Bar = styled.div`
    text-align: right;
    cursor: pointer
`
// StyledModalWrapper.displayName = 'Modal'

const Modal = ({data, closeModal}:any) => {
    const { 
        rocket_name, 
        rocket_type, 
        first_flight, 
        country,
        cost_per_launch,
        height,
        diameter,
        mass
    } = data[0]
    
    return (
        <BackDrop>
            <Body>
                <Bar>
                    <h6 onClick={closeModal}>[X]</h6>
                </Bar>
                <div>
                    <Item label="name" value={rocket_name}/>
                    <Item label="type" value={rocket_type}/>
                    <Item label="first flight" value={first_flight}/>
                    <Item label="country" value={country}/>
                    <Item label="Cost per launch" value={cost_per_launch}/>
                    <Item label="height" value={`${height.meters}m`}/>
                    <Item label="diameter" value={`${diameter.meters}m`}/>
                    <Item label="mass" value={`${mass.kg}kg`}/>
                </div>
            </Body>
            
        </BackDrop>
    )
}

export default Modal
