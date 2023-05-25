import client from "@/lib/sanity";

const pickup = "Kohat";
const dropoff = "Lahore";

const query = `
*[_type=="rides" && pickup=="${pickup}" && dropoff=="${dropoff}"]{
    "pickup": pickup,
    "dropoff": dropoff,
    "service": title,
    "icon": icon.asset->url,
    priceMultiplier,
}
`;

const getRideTypes = async (req, res) => {
  try {
    const sanityResponse = await client.fetch(query);
    res.status(200).send({ message: "success", data: sanityResponse });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getRideTypes;
