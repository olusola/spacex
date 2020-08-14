import React, { FC } from 'react'
import { DragonCardType } from '../../helper/constants'
import Item from '../shared/Item'
import StyledCardWrapper from '../shared/CardWrapper'

interface Props {
    cardData: DragonCardType;
    selectedCard: (param?:any) => void;
}

const DragonCard: React.FC<Props> = ({cardData, selectedCard}) => {
    const { id, name, type, first_flight, crew_capacity } = cardData
    return (
        <div className="col-md-6 col-xs-12 col-sm-12">
            <StyledCardWrapper onClick={() => selectedCard(id)}>
                <Item label="name" value={name}/>
                <Item label="type" value={type}/>
                <Item label="first flight" value={first_flight}/>
                <Item label="crew capacity" value={crew_capacity}/>
            </StyledCardWrapper>
        </div>
    )
}

export default DragonCard
