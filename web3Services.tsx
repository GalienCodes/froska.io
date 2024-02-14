import Web3 from 'web3'
import froska from "./abis/froska.json";
import airdrop from "./abis/airdrop.json";
import { getGlobalState, setAlert, setGlobalState, setLoadingMsg } from './store';
import { fromWei, toWei } from 'web3-utils';
import toast from 'react-hot-toast';
import AirdropAddress from "./abis/airdropAddress.json"
import FroskaAddress from "./abis/froskaAddress.json"
import { ethers } from 'ethers';

// Check if 'ethereum' and 'window' are available in the global scope
declare global {
    interface Window {
        ethereum?: any;
        web3?: any;
    }
}

const provider = new ethers.BrowserProvider(window.ethereum);

const connectWallet = async () => {
    try {

        if (!(window.ethereum)) return toast.error("Please install Metamask")
        const accounts = await (window.ethereum).request({ method: 'eth_requestAccounts' })
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())

    } catch (error) {
        reportError(error)
    }
}

const isWalletConnected = async () => {
    try {
        if (!(window.ethereum)) return toast.error("Please install Metamask")
        const accounts = await (window.ethereum).request({ method: 'eth_accounts' })
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())

        window.ethereum.on('chainChanged', (chainId: number) => {
            window.location.reload()
        })

        window.ethereum.on('accountsChanged', async () => {
            setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
            await isWalletConnected()
        })

        if (accounts.length) {
            setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
        } else {
            toast.error('Please connect wallet.')
            console.log('No accounts found.')
        }
    } catch (error) {
        reportError(error)
    }
}

const getEtheriumContract = async (abi: any, contractAddress: string) => {
    const connectedAccount = getGlobalState('connectedAccount')

    if (connectedAccount) {
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, await signer)

        return contract
    } else {
        return;

    }
}

const FROSKA_ABI = froska.abi as any
const AIRDROP_ABI = airdrop.abi as any

const FroskaContract = async () => {
    const FroskaContract = await getEtheriumContract(
        FROSKA_ABI,
        FroskaAddress.Froska
    );;
    console.log('FroskaContract', FroskaContract)
    return FroskaContract;
};
const AirdropContract = async () => {
    const AirdropContract = await getEtheriumContract(
        AIRDROP_ABI,
        AirdropAddress.Airdrop
    );
    console.log('AirdropContract', AirdropContract)

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

        const transaction1 = await froskaContract?.approve(
            AirdropAddress.Airdrop,
            amount, { from: connectedAccount, value: amount });
        // Deposit Froska tokens
        const transaction2 = await airdropContract?.depositAirdropFunds(
            amount, { from: connectedAccount, value: amount });

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
            const transaction = await airdropContract?.startAirdrop();
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
            const transaction = await airdropContract?.claimAirdrop({ from: connectedAccount });
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
        const transaction = await airdropContract?.withdrawRemainingBalance(
            { from: connectedAccount });
        if (transaction) {
            setAlert(`Withdrawn Successfully!`);
        }
    } catch (error) {
        setAlert('withdrawal failed!', 'red');
    }
}

const getFounder = async () => {
    const airdropContract = await AirdropContract();
    const result = await airdropContract?.founder();
    setGlobalState('founderAccount', await result?.toLowerCase())
    return result;
}

const checkHasClaimed = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    if (connectedAccount) {
        const airdropContract = await AirdropContract();
        const result = await airdropContract?.hasClaimed(connectedAccount);
        setGlobalState('isEligible', result)
        return result;
    }

}

const checkIsEligible = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    if (connectedAccount) {
        const airdropContract = await AirdropContract();
        const result = await airdropContract?.isEligible(connectedAccount);
        setGlobalState('isEligible', result)
        return result;
    }
}

const checkContractBalance = async () => {
    const connectedAccount = getGlobalState('connectedAccount');

    if (connectedAccount) {
        const froskaContract = await FroskaContract();
        const result = await froskaContract?.balanceOf(AirdropAddress.Airdrop,);
        setGlobalState('contractBalance', fromWei(result.toString(), 'ether'))
        return result;
    }
}


export { connectWallet, startTheAirdrop, checkHasClaimed, checkIsEligible, checkContractBalance, withdrawRBalance, isWalletConnected, FroskaContract, AirdropContract, depositAmount, claim, getFounder }