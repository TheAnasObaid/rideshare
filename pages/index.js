import Navbar from "@/components/Navbar"


const style = {
  wrapper: `h-screen w-screen flex flex-col`,
}

export default function Home() {
  return (
    <div className={ style.wrapper }>
      <Navbar />
      <div className={ style.main }>
        <div className={ style.mapContainer }>
          {/* <Map /> */}
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
