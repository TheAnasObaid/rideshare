import Navbar from "@/components/user/Navbar"
import Map from "@/components/user/Map"
import LocationSelector from "@/components/user/LocationSelector"
import Confirm from "@/components/user/Confirm"


const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10 overflow-hidden`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-80 absolute flex flex-col z-20`,
  rideRequest: `h-full bg-white flex flex-col overflow-scroll`,
}

export default function Home() {
  return (
    <div className={ style.wrapper }>
      <Navbar />
      <div className={ style.main }>
        <div className={ style.mapContainer }>
          <Map />
        </div>
      </div>
      <div className={ style.rideRequestContainer }>
        <div className={ style.rideRequest }>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  )
}
