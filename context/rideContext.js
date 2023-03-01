import { createContext, useState, useEffect } from 'react'

export const RideContext = createContext()

export const RideProvider = ({ children }) => {
    const [pickup, setPickup] = useState('')
    const [dropoff, setDropoff] = useState('')
    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()
    const [currentAccount, setCurrentAccount] = useState()
    const [currentUser, setCurrentUser] = useState()

    let metamask

    if (typeof window !== 'undefined') {
        metamask = window.ethereum
    }

    useEffect( () => {
        checkIfWalletIsConnected()
    }, [])

    useEffect( () => {
        if(!currentAccount) return
        requestToGetCurrentUsersInfo(currentAccount)
    }, [currentAccount])

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })

            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0])
                requestToCreateUserOnSanity(addressArray[0])
            }
        } catch (error) {
            console.log(error)
        }
    }

    const connectWallet = async () => {
        if (!window.ethereum) return 
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })

            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0])
                requestToCreateUserOnSanity(addressArray[0])
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                ;(async () => { 
                    await Promise.all([
                        createLocationCoordinatePromise(pickup, 'pickup'),
                        createLocationCoordinatePromise(dropoff, 'dropoff')
                    ]) 
                })()
            } else return
        }, [pickup, dropoff])
    
    
    const requestToCreateUserOnSanity = async address => {
        if (!window.ethereum) return
        try {
            await fetch('/api/db/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userWalletAddress: address,
                    name: 'Wisal Khan',
                }),
            })
        } catch (error) {
            console.error(error)
        }
    }

    const requestToGetCurrentUsersInfo = async walletAddress => {
        try {
            const response = await fetch(
                `/api/db/getUserInfo?walletAddress=${walletAddress}`,
            )
            const data = await response.json()
            setCurrentUser(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <RideContext.Provider
            value={{
                pickup,
                setPickup,
                dropoff,
                setDropoff,
                pickupCoordinates,
                setPickupCoordinates,
                dropoffCoordinates,
                setDropoffCoordinates,
                connectWallet,
                currentAccount,
                currentUser,
            }}>
      {children}
    </RideContext.Provider>
    )
}