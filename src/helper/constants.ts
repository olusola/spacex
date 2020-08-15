const getApi = (query: string) => `https://api.spacexdata.com/v3/${query}`

export type ItemType = {
    label: string;
    value: any;
}

type RocketCard = {
    id: Number,
    rocket_name: String,
    rocket_type: String,
    first_flight: String,
    country: String,
}

type DragonCard = {
    id: Number,
    name: String,
    type: String,
    crew_capacity: Number,
    first_flight: String,
}

export type RocketCardType = RocketCard
export type DragonCardType = DragonCard

export type RootState = {
    rockets: RocketCard[];
    dragons: DragonCard[];
}

export {
    getApi
}