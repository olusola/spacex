import React from 'react'
import { shallow } from 'enzyme'
import DragonCard from './DragonCard'

describe('playercard component', () => {
    let wrapper: any
    let handleSelectedCardSpy: any

    beforeEach( () => {
        handleSelectedCardSpy = jest.fn()
        const card = {
            id: 2,
            name: 'demo',
            type: 'rokcet',
            first_flight: '2020-2-2',
            crew_capacity: 4,
        }
        
        const renderProps = {
            cardData: card,
            selectedCard: handleSelectedCardSpy
        }

        wrapper = shallow(<DragonCard {...renderProps}/>)
    })

    it('should render card component when props are provided', () => {
        expect(wrapper.find('div').length).toBe(1)        
    })
})