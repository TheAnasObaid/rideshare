import { RideContext } from "@/context/rideContext";
import { useContext } from "react";
import Link from "next/link";

const style = {
  wrapper: `h-16 w-full bg-white text-black flex justify-between items-center px-16 z-20`,
  logo: `text-3xl text-black font-medium flex mr-16`,
  menuItem: `text-lg text-black font-medium flex items-center mx-4 cursor-pointer`,
  connectButton: `text-lg text-black font-medium cursor-pointer ml-2 hover:bg-gray-100 p-3 rounded-md`,
};

const Header = () => {
  const { currentAccount, connectWallet } = useContext(RideContext);

  return (
    <div className={style.wrapper}>
      <Link className={style.logo} href="/">
        RideShare
      </Link>
      {currentAccount ? (
        <div className={style.connectButton}></div>
      ) : (
        <div className={style.connectButton}> </div>
      )}
      {currentAccount ? (
        <div className={style.connectButton}>
          {currentAccount.slice(0, 5)}....
          {currentAccount.slice(39)}
        </div>
      ) : (
        <div className={style.connectButton} onClick={() => connectWallet()}>
          Connect Wallet
        </div>
      )}
    </div>
  );
};

export default Header;
