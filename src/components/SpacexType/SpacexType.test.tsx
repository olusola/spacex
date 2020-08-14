import React from 'react'
import { shallow } from 'enzyme'
import  SpacexType from './SpacexType'

describe('GameContainer', () => {
    let wrapper: any
    let handleSelectedSpaceTypeSpy: any

    beforeEach(() => {
        handleSelectedSpaceTypeSpy = jest.fn()
        const renderProps = {
            selectedSpaceType: handleSelectedSpaceTypeSpy,
        }
        wrapper  = shallow(<SpacexType {...renderProps}/>)
    })

    it('should render component ', () => {
        expect(wrapper.find('div').length).toBe(1)
    })

    it('should render rocket space type button and simulate click', () => {
        const handleClick: () => void = wrapper.find('Button').first().prop('handleClick');
        handleClick();
        expect(handleSelectedSpaceTypeSpy).toHaveBeenCalledWith('rockets')
    })

    it('should render dragon space type button and simulate click', () => {
        const handleClick: () => void = wrapper.find('Button').last().prop('handleClick');
        handleClick();
        expect(handleSelectedSpaceTypeSpy).toHaveBeenCalledWith('dragons')
    })
})