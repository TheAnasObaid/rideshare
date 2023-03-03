import Image from "next/image";
import avatar from "../temp/avatar.png";
import { RideContext } from "@/context/rideContext";
import { useContext } from "react";

const style = {
    wrapper: `h-16 w-full bg-white text-black flex md:justify-around items-center px-60 z-20`,
    leftMenu: `flex gap-4`,
    logo: `text-3xl text-black font-medium flex cursor-pointer mr-16`,
    menuItem: `text-lg text-black font-medium flex items-center mx-4 cursor-pointer`,
    rightMenu: `flex gap-4 items-center`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 rounded-full p-px object-cover cursor-pointer`,
    connectButton: `text-lg text-black font-medium cursor-pointer ml-2`,
};

const Navbar = () => {
    const { currentAccount, connectWallet, currentUser } =
        useContext(RideContext);

    return (
        <div className={style.wrapper}>
            <div className={style.leftMenu}>
                <div className={style.logo}>RideShare</div>
                <div className={style.menuItem}>Ride</div>
                <div className={style.menuItem}>Drive</div>
            </div>
            <div className={style.rightMenu}>
                {currentAccount ? (
                    <div className={style.connectButton}>
                        {currentUser.name}
                    </div>
                ) : (
                    <div className={style.connectButton}> </div>
                )}
                <div className={style.userImageContainer}>
                    <Image
                        className={style.userImage}
                        src={avatar}
                        height={40}
                        width={40}
                        alt=""
                    />
                </div>
                {currentAccount ? (
                    <div className={style.connectButton}>
                        {currentAccount.slice(0, 5)}....
                        {currentAccount.slice(39)}
                    </div>
                ) : (
                    <div
                        className={style.connectButton}
                        onClick={() => connectWallet()}
                    >
                        Connect Wallet
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
