import styled from "styled-components"
import React, { FC } from "react"
import { ItemType } from "../../helper/constants"

const StyledCardWrapper = styled.div`
    background-color: grey;
    padding: 20px;
    border-radius: 15px;
    margin: 10px 0;
    cursor: pointer;

`
StyledCardWrapper.displayName = 'StyledCard'

const StyledItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

const StyledCardItem = styled.div`
    color: black;
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize;
`

const Item: FC<ItemType> = ({label, value}) => {
    return (
        <StyledItemWrapper>
            <StyledCardItem>{label}</StyledCardItem>
            <StyledCardItem>{value}</StyledCardItem>
        </StyledItemWrapper>
    )
}

export default Item