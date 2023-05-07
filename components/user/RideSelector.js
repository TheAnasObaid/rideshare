import { RideContext } from "@/context/rideContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ethLogo from "../../assets/eth-logo.png";

const style = {
    wrapper: `h-full flex flex-col`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1 overflow-scroll cursor-pointer`,
    car: `flex p-3 m-2 items-center border-2 border-white`,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
    carImage: `h-14`,
    carDetails: `ml-2 flex-1`,
    carService: `font-medium`,
    time: `text-xs text-blue-500`,
    priceContainer: `flex items-center`,
    price: `mr-[-0.8rem]`,
};

const basePrice = 1542;

const RideSelector = () => {
    const [carList, setCarList] = useState([]);
    const { selectedRide, setSelectedRide, setPrice, basePrice } =
        useContext(RideContext);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/api/db/getRideTypes");

                const data = await response.json();
                setCarList(data.data);
                setSelectedRide(data.data[0]);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                Choose a ride, or swipe up for more
            </div>
            <div className={style.carList}>
                {carList.map((car, index) => (
                    <div
                        key={index}
                        className={`${
                            selectedRide.service === car.service
                                ? style.selectedCar
                                : style.car
                        }`}
                        onClick={() => {
                            setSelectedRide(car);
                            setPrice(
                                (
                                    (basePrice / 10 ** 5) *
                                    car.priceMultiplier
                                ).toFixed(5)
                            );
                        }}
                    >
                        <Image src={car.icon} height={70} width={70} alt="" />
                        <div className={style.carDetails}>
                            <div className={style.carService}>
                                {car.service}
                            </div>
                            <div className={style.time}>5 min away</div>
                        </div>
                        <div className={style.priceContainer}>
                            <div className={style.price}>
                                {(
                                    (basePrice / 10 ** 5) *
                                    car.priceMultiplier
                                ).toFixed(5)}
                            </div>
                            <Image src={ethLogo} height={25} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RideSelector;
