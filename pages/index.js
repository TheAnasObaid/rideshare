import Navbar from "@/components/Navbar"
import Map from "@/components/Map"


const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10 overflow-hidden`,
  mapContainer: `flex-1 w-full h-full`,
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
          {/* <LocationSelector /> */}
          {/* <Confirm /> */}
        </div>
      </div>
    </div>
  )
}
