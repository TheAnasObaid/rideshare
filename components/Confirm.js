import RideSelector from "./RideSelector";
import { RideContext } from "@/context/rideContext";
import { useContext } from "react";

const style = {
    wrapper: `flex-1 h-full flex flex-col justify-between overflow-auto`,
    rideSelectorContainer: `h-full flex flex-col overflow-auto`,
    confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
    confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
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
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.rideSelectorContainer}>
                {pickupCoordinates && dropoffCoordinates && <RideSelector />}
            </div>
            <div className={style.confirmButtonContainer}>
                <div
                    className={style.confirmButton}
                    onClick={() => storeTripDetails(pickup, dropoff)}
                >
                    Confirm {selectedRide.service || "RideX"}
                </div>
            </div>
        </div>
    );
};

export default Confirm;
