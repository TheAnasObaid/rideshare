import Image from 'next/image'
import rideX from '../assets/rides/rideX.png'
import rideXL from '../assets/rides/rideXL.png'
import rideSelect from '../assets/rides/rideSelect.png'
import rideBlack from '../assets/rides/rideBlack.png'
import rideBlackSuv from '../assets/rides/rideBlackSuv.png'
import ethLogo from '../assets/eth-logo.png'


const style = {
    wrapper: `h-full flex flex-col`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1 overflow-scroll`,
    car: `flex p-3 m-2 items-center border-2 border-white`,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
    carImage: `h-14`,
    carDetails: `ml-2 flex-1`,
    service: `font-medium`,
    time: `text-xs text-blue-500`,
    priceContainer: `flex items-center`,
    price: `mr-[-0.8rem]`,
}

const carList = [
    {
        service: 'RideX',
        icon: rideX,
        priceMultiplier: 1,
    },
    {
        service: 'RideXL',
        icon: rideXL,
        priceMultiplier: 1.5
    },
    {
        service: 'RideSelect',
        icon: rideSelect,
        priceMultiplier: 2
    },
    {
        service: 'RideBlack',
        icon: rideBlack,
        priceMultiplier: 2.5
    },
    {
        service: 'RideBlackSuv',
        icon: rideBlackSuv,
        priceMultiplier: 3
    },
]

const basePrice = 1543

const RideSelector = () => {
  return (
    <div className={ style.wrapper }>
        <div className={ style.title }>Choose a ride, or swipe up for more</div>
        <div className={ style.carList }>
            { carList.map(
                (car, index) => (
                    <div key={index} className={ style.car }>
                        <Image 
                            src={ car.icon }
                            height={70}
                            alt=''
                        />
                        <div className={ style.carDetails }>
                            <div className={ style.carService }>{ car.service }</div>
                            <div className={ style.time }>5 min away</div>
                        </div>
                        <div className={ style.priceContainer }>
                            <div className={ style.price }>
                                { ((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5) }
                            </div>
                            <Image 
                                src={ethLogo}
                                height={25}
                                alt=''
                            />
                        </div>
                    </div>
                )
            )}
        </div>
    </div>
  )
}

export default RideSelector