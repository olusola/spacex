import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../../helper/constants'
import RocketCard from '../../components/RocketCard/RocketCard'
import RocketModal from '../../components/RocketModal/RocketModal'

const RocketsContainer = () => {
    const data = useSelector((state: RootState) => state.rockets, shallowEqual)
    const [toggleModal, setToggleModal] = useState(false)
    const [cardIndex, setCardIndex] = useState(0)

    const handleSelectedCard = (val:any) => {
        setCardIndex(val)
        setToggleModal(true)
    }

    const getSelectedData = (id:any) => {
        const selectedRocket = data.filter((rocket,i) => rocket.id === id)
        return selectedRocket
    }

    const closeModal = () => {
        setToggleModal(false)
    }

    return (
        <div>
            <div className="row">
                {
                    data.map((card,i) => {
                        return (
                            <RocketCard
                            cardData={card}
                            selectedCard={handleSelectedCard}
                            key={i}
                            />
                        )
                    })
                }
            </div>
            <div>
                {
                    toggleModal && (
                        <RocketModal closeModal={closeModal} data={getSelectedData(cardIndex)}/>
                    )
                }
            </div>
        </div>
    )
}

export default RocketsContainer
