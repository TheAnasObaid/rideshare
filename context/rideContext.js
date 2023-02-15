import { createContext, useState, useEffect } from 'react'

export const RideContext = createContext()

export const RideProvider = ({ children }) => {
    const [pickup, setPickup] = useState('')
    const [dropoff, setDropoff] = useState('')
    const [pickupCoordinates, setPickupCoordinates] = useState('')
    const [dropoffCoordinates, setDropoffCoordinates] = useState('')

    const createLocationCoordinatePromise = (locationName, locationType) => {
        return new Promise(async(resolve, reject) => {
            const response = await fetch('api/map/getLocationCoordinates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    location: locationName,
                })
            })

            const data = await response.json()

            if (data.message = 'success') {
                switch (locationType) {
                    case 'pickup':
                        setPickupCoordinates(data.data)
                        break
                    
                    case 'dropoff':
                        setDropoffCoordinates(data.data)
                        break
                }

                resolve()
            }
            else {
                reject()
            }
        })
    }

    useEffect( () => {
            if (pickup && dropoff) {
                ; (async () => { 
                    await Promise.all([
                        createLocationCoordinatePromise(pickup, 'pickup'),
                        createLocationCoordinatePromise(dropoff, 'dropoff')
                    ]) 
                })()
            }
            
            else return
        }, [])

    return (
        <RideContext.Provider /*value={}*/>{ children }</RideContext.Provider>
    )
}