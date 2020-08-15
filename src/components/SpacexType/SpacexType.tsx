import React from 'react'
import Button from '../shared/Button/Button'

interface Props {
    selectedSpaceType: (param?: any) => void;
}

type SpaceTypes = "rockets" | "dragons"

const spaceTypes: SpaceTypes[] = ['rockets', 'dragons']

const SpacexType: React.FC<Props> = ({selectedSpaceType}) => {
    return (
        <div className="d-flex justify-content-center">
            {
                spaceTypes.map((type, i) => {
                    return (
                        <Button key={i} label={type} handleClick={() => selectedSpaceType(type)}/>
                    )
                })
            }
        </div>
    )
}

export default SpacexType
