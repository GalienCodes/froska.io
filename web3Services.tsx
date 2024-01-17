import Web3 from 'web3'
import froska from "./abis/froska.json";
import airdrop from "./abis/airdrop.json";
import { getGlobalState, setAlert, setGlobalState, setLoadingMsg } from './store';
import { fromWei, toWei } from 'web3-utils';
import toast from 'react-hot-toast';
import AirdropAddress from "./abis/airdropAddress.json"
import FroskaAddress from "./abis/froskaAddress.json"


type Address = string
type Amount = string // amounts are always presented as strings


const FROSKA_ABI = froska.abi as any
const AIRDROP_ABI = airdrop.abi as any
// Check if 'ethereum' and 'window' are available in the global scope
declare global {
    interface Window {
        ethereum?: any;
        web3?: any;
    }
}

// Ensure 'ethereum' is available
let ethereum: any

if (typeof window !== 'undefined') {
    ethereum = window.ethereum;
    window.web3 = new Web3(ethereum);
    window.web3 = new Web3(window.web3.currentProvider);

    // Rest of your code that relies on 'window'
} else {
    console.log('Window is not defined (server-side rendering)');
}

const connectWallet = async () => {
    try {
        if (!ethereum) {
            console.log('Please install Metamask');
            return;
        }
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
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
        });

        window.ethereum.on('accountsChanged', async () => {
            setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
            await isWalletConnected();
        });

        if (accounts.length) {
            setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
        } else {
            setGlobalState('connectedAccount', '');
        }
    } catch (error: any) {
        reportError(error);
    }
};

const getEtheriumContract = async (abi: any, contractAddress: string) => {
    const connectedAccount = getGlobalState('connectedAccount');

    if (connectedAccount) {
        const web3 = window.web3;
        const contract = new web3.eth.Contract(abi, contractAddress);
        return contract;
    } else {
        return;
    }
};

const FroskaContract = async () => {
    const FroskaContract = await getEtheriumContract(
        FROSKA_ABI,
        FroskaAddress.Froska
    );;

    return FroskaContract;
};
const AirdropContract = async () => {
    const AirdropContract = await getEtheriumContract(
        AIRDROP_ABI,
        AirdropAddress.Airdrop
    );
    return AirdropContract;
};


const depositAmount = async (amount: string) => {
    const connectedAccount = getGlobalState('connectedAccount');
    amount = toWei(amount.toString(), 'ether');
    try {
        const airdropContract = await AirdropContract();
        const froskaContract = await FroskaContract();

        setLoadingMsg('Deposit initiated!');
        // Approve the contract to use Froska tokens

        const transaction1 = await froskaContract.methods.approve(
            AirdropAddress.Airdrop,
            amount
        ).send({ from: connectedAccount });
        // Deposit Froska tokens
        const transaction2 = await airdropContract?.methods.depositAirdropFunds(
            amount)
            .send({ from: connectedAccount });

        if (transaction1 && transaction2) {
            setAlert(`Deposited successfully`);
            setGlobalState("initDepositAmount", '')
        }
    } catch (error) {
        setAlert('Deposit failed!', 'red');
    }
}

const startTheAirdrop = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    try {
        if (connectedAccount) {
            const airdropContract = await AirdropContract();

            setLoadingMsg('Airdrop initiated');
            const transaction = await airdropContract?.methods.startAirdrop().call();
            if (transaction) {
                setAlert(`Airdrop Started successfully`);
            }
        } else {
            connectWallet()
        }
    } catch (error) {
        setAlert('Airdrop failed!', 'red');
    }

}

const claim = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    try {
        if (connectedAccount) {
            const airdropContract = await AirdropContract();

            setLoadingMsg('Claim initiated!');
            const transaction = await airdropContract?.methods.claimAirdrop()
                .send({ from: connectedAccount });
            if (transaction) {
                setAlert(`Claimed successfully`);
            }
        } else {
            connectWallet()
        }
    } catch (error) {
        setAlert('Claimed failed!', 'red');
    }
}


const withdrawRBalance = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    try {
        const airdropContract = await AirdropContract();

        setLoadingMsg('Withdrawl initiated!');
        const transaction = await airdropContract?.methods.withdrawRemainingBalance(
        ).send({ from: connectedAccount });
        if (transaction) {
            setAlert(`Withdrawn Successfully!`);
        }
    } catch (error) {
        setAlert('withdrawal failed!', 'red');
    }
}

const getFounder = async () => {
    const airdropContract = await AirdropContract();
    const result = await airdropContract?.methods.founder().call();
    setGlobalState('founderAccount',await result?.toLowerCase())
    return result;
}

const checkHasClaimed = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    if (connectedAccount) {
        const airdropContract = await AirdropContract();
        const result = await airdropContract?.methods.hasClaimed(connectedAccount).call();
        setGlobalState('isEligible', result)
        return result;
    }

}

const checkIsEligible = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    if (connectedAccount) {
        const airdropContract = await AirdropContract();
        const result = await airdropContract?.methods.isEligible(connectedAccount).call();
        setGlobalState('isEligible', result)
        return result;
    }
}

const checkContractBalance = async () => {
    const connectedAccount = getGlobalState('connectedAccount');

    if (connectedAccount) {
        const froskaContract = await FroskaContract();
        const result = await froskaContract?.methods.balanceOf(AirdropAddress.Airdrop,).call();
        setGlobalState('contractBalance', fromWei(result.toString(), 'ether'))
        return result;
    }
}


export { connectWallet, startTheAirdrop, checkHasClaimed, checkIsEligible, checkContractBalance, withdrawRBalance, isWalletConnected, FroskaContract, AirdropContract, depositAmount, claim, getFounder }