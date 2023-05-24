export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',

  fields: [
    {
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    },
  ],
}
