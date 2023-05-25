export const rideSchema = {
  name: 'rides',
  type: 'document',
  title: 'Rides',

  fields: [
    {
      name: 'tripStatus',
      type: 'string',
      title: 'Trip Status',
      options: {
        list: [
          {title: 'Completed', value: 'completed'},
          {title: 'In Progress', value: 'inProgress'},
        ],
      },
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
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
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
