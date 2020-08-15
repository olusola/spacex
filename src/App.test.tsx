import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { mockReducer } from './helper/mocks'

const mockStore = configureStore([])

describe('App Container', () => {
  let wrapper: any
  let store: any

  beforeEach(async () => {
    store = mockStore(mockReducer)

    wrapper = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    )
  })

  it('should render App container with 2 buttons', () => {
    expect(wrapper.find('SpacexType').length).toBe(1)
    expect(wrapper.find('Button').length).toBe(2)
  })

  it('should render cards when Rocket/Dragon button is selected', () => {
    wrapper.find('Button').first().simulate('click')
    expect(wrapper.find('RocketCard').length).toBe(4)

    wrapper.find('Button').last().simulate('click')
    expect(wrapper.find('DragonCard').length).toBe(2)
  })

  it('should render modal when a card is selected', () => {
    wrapper.find('Button').last().simulate('click')
    expect(wrapper.find('DragonCard').length).toBe(2)
    expect(wrapper.find('DragonModal').length).toBe(0)

    wrapper.find('StyledCard').first().simulate('click')
    expect(wrapper.find('DragonModal').length).toBe(1)
  })

})
