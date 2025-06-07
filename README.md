# KrishiChain

KrishiChain is a blockchain-based platform designed to revolutionize agricultural supply chain management. It provides transparency, traceability, and efficiency in the agricultural sector by leveraging blockchain technology.

## Features

- Smart contract-based supply chain management
- Transparent tracking of agricultural products
- Decentralized storage of product information
- User-friendly web interface
- Secure and immutable record keeping

## Project Structure

```
KrishiChain/
├── contracts/         # Smart contracts
├── ui/               # React frontend application
├── test/             # Smart contract tests
└── hardhat.config.js # Hardhat configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MetaMask or any Web3 wallet
- Hardhat

## Installation

1. Clone the repository:
```bash
git clone https://github.com/kaushalkhatiwada/KrishiChain.git
cd KrishiChain
```

2. Install dependencies:
```bash
npm install
```

3. Install UI dependencies:
```bash
cd ui
npm install
cd ..
```

## Development

### Smart Contracts

1. Compile the smart contracts:
```bash
npx hardhat compile
```

2. Run tests:
```bash
npx hardhat test
```

3. Deploy to local network:
```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### Frontend Development

1. Start the React development server:
```bash
cd ui
npm start
```

The application will be available at `http://localhost:3000`

## Deployment

### Smart Contracts

1. Deploy to testnet:
```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

2. Deploy to mainnet:
```bash
npx hardhat run scripts/deploy.js --network mainnet
```

### Frontend

1. Build the React application:
```bash
cd ui
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Kaushal Khatiwada - [@kaushalkhatiwada](https://github.com/kaushalkhatiwada)

Project Link: [https://github.com/kaushalkhatiwada/KrishiChain](https://github.com/kaushalkhatiwada/KrishiChain)

