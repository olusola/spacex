import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../../helper/constants'
import DragonCard from '../../components/DragonCard/DragonCard'
import DragonModal from '../../components/DragonModal/DragonModal'

const DragonsContainer = () => {
    const data = useSelector((state: RootState) => state.dragons, shallowEqual)
    const [toggleModal, setToggleModal] = useState(false)
    const [cardIndex, setCardIndex] = useState(0)
    
    const handleSelectedCard = (val:number) => {
        setCardIndex(val)
        setToggleModal(true)
    }

    const getSelectedData = (id:number) => {
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
                            <DragonCard
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
                        <DragonModal
                            closeModal={closeModal}
                            data={getSelectedData(cardIndex)}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default DragonsContainer
