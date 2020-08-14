import React from 'react'
import Button from '../shared/Button/Button'

interface Props {
    selectedSpaceType: (param?: any) => void
}

const SpacexType: React.FC<Props> = ({selectedSpaceType}) => {
    return (
        <div className="d-flex justify-content-center">
            <Button label="Rockets" handleClick={() => selectedSpaceType('rockets')}/>
            <Button label="Dragons" handleClick={() => selectedSpaceType('dragons')}/>
        </div>
    )
}

export default SpacexType
