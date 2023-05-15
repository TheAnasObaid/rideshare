import RideSelector from "./RideSelector";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import { RideContext } from "@/context/rideContext";


const style = {
    wrapper: `flex-1 h-full flex flex-col justify-between overflow-auto`,
    rideSelectorContainer: `h-full flex flex-col overflow-auto`,
    confirmButtonContainer: ` border-t-2 z-10`,
    confirmButton: `bg-black text-white cursor-pointer m-4 py-4 text-center text-xl`,
    modalContainer: `mt-10 flex flex-col justify-center items-center w-72 rounded-lg shadow-xl h-auto p-2`,
    modalHeading: `text-base mt-2 mx-4 text-gray-400 font-semibold text-center`,
    modalButton: `my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold`
};

const Confirm = () => {
    const {
        currentAccount,
        pickup,
        dropoff,
        price,
        selectedRide,
        pickupCoordinates,
        dropoffCoordinates,
        metamask,
    } = useContext(RideContext);

    const storeTripDetails = async (pickup, dropoff) => {
        try {
            await fetch("/api/db/saveTrips", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pickupLocation: pickup,
                    dropoffLocation: dropoff,
                    userWalletAddress: currentAccount,
                    price: price,
                    selectedRide: selectedRide,
                }),
            });

            await metamask.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        from: currentAccount,
                        to: process.env.NEXT_PUBLIC_DRIVER_ADDRESS,
                        gas: "0x7EF40",
                        value: ethers.utils.parseEther(price)._hex,
                    },
                ],
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.rideSelectorContainer}>
                {pickupCoordinates && dropoffCoordinates && <RideSelector />}
            </div>
            <div className={style.confirmButtonContainer}>
                <div className={style.confirmButtonContainer}>
                    <div
                        className={style.confirmButton}
                        onClick={() => setShowModal(true)}
                    >
                        Confirm {selectedRide.service || "RideX"}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Confirm;
