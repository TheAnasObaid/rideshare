import React from 'react'
import Image from "next/image";
import avatar from "../../temp/avatar.png";
import { RideContext } from "@/context/rideContext";
import { useContext } from "react";

const style = {
    wrapper: `h-16 w-full bg-white text-black flex items-center md:justify-between z-20`,
    logo: `px-8 py-4 mx-4 text-3xl font-medium cursor-pointer`,
    menuItem: `text-lg font-medium mx-4 cursor-pointer`,
    userImageContainer: `mr-4`,
    userImage: `h-10 w-10 rounded-full p-px object-cover cursor-pointer`,
    connectButton: `text-lg text-black font-medium cursor-pointer`,
    rightMenu: `flex items-center mr-16`
}

function Header() {
    const { currentAccount, connectWallet } =
        useContext(RideContext);
    
        return (
        <div className={style.wrapper}>
            <div className={style.logo}>RideShare</div>
            <div className={style.rightMenu}>
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
}

export default Header