// import { http, createConfig } from '@wagmi/core'
import { http , createConfig } from 'wagmi'
import { mainnet , sepolia } from 'wagmi/chains'
// import { mainnet, sepolia } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})