import mapboxgl from "mapbox-gl"
import { useEffect } from "react"


const style = {
    wrapper: `flex-1 h-full w-full`
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  useEffect( () => {
    const map = new mapboxgl.Map(
        {
            container: 'map',
            style: 'mapbox://styles/anasobaid/cle35k6xl000601p5921vsc1r',
            zoom: 5.5,
            center: [72.886, 30.887],
        }
    )
  }, [])

  return (
    <div className={ style.wrapper } id='map'></div>
  )
}

export default Map