import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('button Component', () => {

    it('should render button', () => {
        const renderProps = {
            handleClick: jest.fn(),
            label: 'demo'
        }

        const wrapper  = shallow(<Button {...renderProps}/>)        
        expect(wrapper.find('Btn').length).toBe(1)
        wrapper.find('Btn').simulate('click')
        expect(wrapper.find('Btn').props().onClick).toHaveBeenCalled()
    })
})