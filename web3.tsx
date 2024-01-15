import Web3 from 'web3'
import froska from "./abis/froska.json";
import airdrop from "./abis/airdrop.json";
import { setGlobalState } from './store';
import toast from 'react-hot-toast';

type Address = string
type Amount = string // amounts are always presented as strings

// Network settings have more properties, 
// but we're only interested in the `address`
type NetworkSettings = Record<string, { address: Address }>

const FROSKA_ABI = froska.abi as unknown
const AIRDROP_ABI = airdrop.abi as unknown
// Check if 'ethereum' and 'window' are available in the global scope
declare global {
    interface Window {
        ethereum?: any;
        web3?: any;
    }
}

// Ensure 'ethereum' is available
const ethereum = window.ethereum;
if (!ethereum) {
    console.log('Please install Metamask');
}

// Initialize Web3 using 'ethereum' and assign it to 'window.web3'
window.web3 = new Web3(ethereum);
window.web3 = new Web3(window.web3.currentProvider);


const connectWallet = async () => {
    try {
        if (!ethereum) {
            console.log('Please install Metamask');
            return;
        }
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
        window.location.reload();
    } catch (error: any) {
        console.log(error.message);
    }
};

const isWalletConnected = async () => {
    try {
        if (!ethereum) {
            console.log('Please install Metamask');
            return;
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        window.ethereum.on('chainChanged', (chainId: string) => {
            window.location.reload();
        });

        window.ethereum.on('accountsChanged', async () => {
            setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
            await isWalletConnected();
        });

        if (accounts.length) {
            setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
        } else {
            toast.error('Please install Metamask');
            setGlobalState('connectedAccount', '');
        }
    } catch (error: any) {
        reportError(error);
    }
};


export { connectWallet, isWalletConnected }