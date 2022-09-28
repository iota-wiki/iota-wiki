module.exports = {
  about: [
    {
      type: 'category',
      label: 'How It Works',
      collapsed: false,
      items: [
        'welcome',
        'tangle',
        'coordinator',
        'data-and-value-transfer',
        'outputs',
        'maintenance',
        'role-of-token',
        'dust-protection',
        {
          type: 'category',
          label: 'Smart Contracts',
          collapsed: true,
          items: [
            'smart-contracts/smart-contracts-introduction',
            'smart-contracts/smart-contracts-VM-and-languages',
            'smart-contracts/smart-contracts-validators',
            'smart-contracts/smart-contracts-chains',
            'smart-contracts/smart-contracts-dapps',
            'smart-contracts/smart-contracts-consensus',
            'smart-contracts/smart-contracts-tangle',
            'smart-contracts/smart-contracts-community-tutorials',
          ],
        },
        'native-assets',
        'glossary',
      ],
    },
    {
      type: 'category',
      label: 'Shimmer Token',
      collapsed: true,
      items: ['token/buying'],
    },
  ],
};
