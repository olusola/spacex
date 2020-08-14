import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import rootReducer from './reduxStore/rootReducer'
import { act } from '@testing-library/react'

describe('App Container', () => {
  let wrapper: any

  const store = createStore(rootReducer)

  beforeEach(async () => {
    wrapper = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    )
    await act(() => new Promise(resolve => setTimeout(resolve, 800)))
  })

  it('should render App container with 2 buttons', () => {
    expect(wrapper.find('SpacexType').length).toBe(1)
    expect(wrapper.find('Button').length).toBe(2)
  })

  it('should render cards when Rocket/Dragon button is selected', () => {
    wrapper.find('Button').first(0).simulate('click')
    expect(wrapper.find('RocketCard').length).toBe(4)
    wrapper.find('Button').last(0).simulate('click')
    expect(wrapper.find('DragonCard').length).toBe(2)
  })
})
