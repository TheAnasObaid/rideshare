export const rideSchema = {
  name: 'rides',
  type: 'document',
  title: 'Rides',

  fields: [
    {
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    },
    {
      name: 'pickup',
      type: 'string',
      title: 'From',
    },
    {
      name: 'dropoff',
      type: 'string',
      title: 'To',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'priceMultiplier',
      type: 'number',
      title: 'Price Multiplier',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
  ],
}
