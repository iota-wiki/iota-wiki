import type { Config } from './common/components/Switcher';
import { Identity, IotaCore } from './common/icons';

const config: Config = {
  docs: [
    {
      id: 'iota-sdk',
      label: 'IOTA SDK',
      description: 'Interact with the network.',
      icon: IotaCore,
      subsection: 'layer-1',
      versions: [
        {
          id: 'iota-sdk',
          label: 'current',
        },
      ],
    },
    {
      label: 'Identity',
      id: 'identity',
      description: 'Trustless digital identity management.',
      icon: Identity,
      subsection: 'layer-2',
      versions: [
        {
          id: 'identity-rs',
          label: '0.7-alpha',
        },
      ],
    },
    {
      label: 'INX Core API',
      id: 'inx-core-api',
      description: 'Extend the functionality of nodes.',
      icon: Identity,
      subsection: 'layer-2',
      versions: [
        {
          id: 'inx-api-core-v0',
          label: '0.0',
        },
        {
          id: 'inx-api-core-v1',
          label: '1.0',
        },
      ],
    },
  ],
  sections: [
    [
      {
        label: 'Layer 1',
        description: 'Interact with the network.',
        id: 'layer-1',
      },
      {
        label: 'Layer 2',
        description: 'Build solutions.',
        id: 'layer-2',
      },
    ],
  ],
};

export default config;
