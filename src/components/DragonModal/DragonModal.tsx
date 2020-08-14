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

const CloseModal = styled.span`
    text-align: right;
    cursor: pointer
`

const DragonModal = ({data, closeModal}:any) => {
    const { 
        name, 
        type,
        crew_capacity,
        first_flight,
        orbit_duration_yr,
        height_w_trunk,
        diameter,
    } = data[0]
    
    return (
        <BackDrop>
            <Body>
                <CloseModal onClick={closeModal}>[X]</CloseModal>
                <div>
                    <Item label="name" value={name}/>
                    <Item label="type" value={type}/>
                    <Item label="crew capacity" value={crew_capacity}/>
                    <Item label="first flight" value={first_flight}/>
                    <Item label="orbit duration" value={orbit_duration_yr}/>
                    <Item label="height" value={`${height_w_trunk.meters}m`}/>
                    <Item label="diameter" value={`${diameter.meters}m`}/>
                </div>
            </Body>
        </BackDrop>
    )
}

export default DragonModal
