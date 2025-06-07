import { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        
        setIsConnected(true);
        setUserAddress(address);
      } catch (error) {
        console.error("Error connecting:", error);
      }
    } else {
      alert("MetaMask not detected! Install it first.");
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>KrishiChain</h1>
      {!isConnected ? (
        <button 
          onClick={connectWallet}
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px', 
            cursor: 'pointer',
            backgroundColor: '#f5841f',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Connect MetaMask
        </button>
      ) : (
        <div>
          <p>Connected Wallet: <strong>{userAddress}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;