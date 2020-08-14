import React, { FC } from 'react'
import { RocketCardType } from '../../helper/constants'
import Item from '../shared/Item'
import StyledCardWrapper from '../shared/CardWrapper'

interface Props {
    cardData: RocketCardType;
    selectedCard: (param?:any) => void;
}

const RocketCard: React.FC<Props> = ({cardData, selectedCard}) => {
    const { id, rocket_name, rocket_type, first_flight, country } = cardData
    return (
        <div className="col-md-6 col-xs-12 col-sm-12">
            <StyledCardWrapper onClick={() => selectedCard(id)}>
                <Item label="name" value={rocket_name}/>
                <Item label="type" value={rocket_type}/>
                <Item label="first flight" value={first_flight}/>
                <Item label="country" value={country}/>
            </StyledCardWrapper>
        </div>
    )
}

export default RocketCard
