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

const { ethereum } = window;

const connectWallet = async () => {
    try {

        if (!ethereum) return toast.error("Please install Metamask")
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())

    } catch (error) {
        reportError(error)
    }
}

const isWalletConnected = async () => {
    try {
        if (!ethereum) return toast.error("Please install Metamask")
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())

        window.ethereum.on('chainChanged', (chainId) => {
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

const FROSKA_ABI = froska.abi
const AIRDROP_ABI = airdrop.abi

const FroskaContract= async()=>{
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();

        const froskaTokenContract =  new ethers.Contract(
            FroskaAddress.Froska,
            FROSKA_ABI,
            signer
        );
        return froskaTokenContract
    }
}
const AirdropContract= async()=>{
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const airdropContract = new ethers.Contract(
            AirdropAddress.Airdrop,
            AIRDROP_ABI,
            signer
        );
        return airdropContract
    }
}

// =======Approve deposit=========
const ApproveAmount = async (amount) => {
    try {

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();

            const froskaTokenContract = new ethers.Contract(
                FroskaAddress.Froska,
                FROSKA_ABI,
                signer
            );

            setLoadingMsg('Approval initiated!');
            // Approve the contract to use Froska tokens
            const approvalCall = await froskaTokenContract.approve(
                AirdropAddress.Airdrop,
                ethers.utils.parseEther(amount.toString())
            );
            await approvalCall.wait();

            setAlert(`Approved successfully`);
            setGlobalState("initDepositAmount", '')

        }
    } catch (error) {
        setAlert('Deposit failed!', 'red');
    }
}

const depositAmount = async (ApproveAmount) => {
    try {

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const airdropContract = new ethers.Contract(
                AirdropAddress.Airdrop,
                AIRDROP_ABI,
                signer
            );

            setLoadingMsg('Deposit initiated!');

            // Deposit Froska tokens    
            const deposit = await airdropContract.depositAirdropFunds(
                ethers.utils.parseEther(ApproveAmount.toString()),
            );

            await deposit.wait();

            setAlert(`Funds deposited successfully`);
            setGlobalState("initDepositAmount", '')
        }

    } catch (error) {
        setAlert('Deposit failed!', 'red');
    }
}

const startTheAirdrop = async () => {
    try {
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const airdropContract = new ethers.Contract(
                AirdropAddress.Airdrop,
                AIRDROP_ABI,
                signer
            );

            setLoadingMsg('Airdrop initiated!');

            // Start Airdrop    
            const startAD = await airdropContract.startAirdrop();
            await startAD.wait();

            setAlert(`Airdrop Started successfully`);
        }
    } catch (error) {
        setAlert('Airdrop failed!', 'red');
    }

}

const claim = async () => {
    try {
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const airdropContract = new ethers.Contract(
                AirdropAddress.Airdrop,
                AIRDROP_ABI,
                signer
            );

            setLoadingMsg('Claim initiated!');

            // Slaim Airdrop    
            const claimAD = await airdropContract.claimAirdrop();
            await claimAD.wait();

            setAlert(`Airdrop claimed successfully`);
        }
    } catch (error) {
        console.log(error)
        setAlert('Claimed failed!', 'red');
    }
}


const withdrawRBalance = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    try {
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();

            const airdropContract = new ethers.Contract(
                AirdropAddress.Airdrop,
                AIRDROP_ABI,
                signer
            );

            setAlert('Withdrawal initiated');

            const Withdrawl = await airdropContract.withdrawRemainingBalance();
            await Withdrawl.wait();

            setAlert('Froska withdrawn successfully!');

        }
    } catch (error) {
        setAlert('withdrawal failed!', 'red');
    }
}

const getFounder = async () => {
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();

        const airdropContract = new ethers.Contract(
            AirdropAddress.Airdrop,
            AIRDROP_ABI,
            signer
        );
        const result = await airdropContract?.founder();

        setGlobalState('founderAccount', result.toLowerCase())
        return result;
    }
}

const checkHasClaimed = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();

        const airdropContract = new ethers.Contract(
            AirdropAddress.Airdrop,
            AIRDROP_ABI,
            signer
        );

        const result = await airdropContract?.hasClaimed(connectedAccount);
        setGlobalState('isEligible', result)
        return result;
    }

}

const checkIsEligible = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();

        const airdropContract = new ethers.Contract(
            AirdropAddress.Airdrop,
            AIRDROP_ABI,
            signer
        );
        const result = await airdropContract?.isEligible(connectedAccount);
        setGlobalState('isEligible', result)
        return result;
    }
}

const checkContractBalance = async () => {
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();

        const froskaTokenContract = new ethers.Contract(
            FroskaAddress.Froska,
            FROSKA_ABI,
            signer
        );
        const result = await froskaTokenContract?.balanceOf(AirdropAddress.Airdrop,);
        setGlobalState('contractBalance', fromWei(result.toString(), 'ether'))
        return result;
    }
}


export { AirdropContract, FroskaContract, ApproveAmount,connectWallet, startTheAirdrop, checkHasClaimed, checkIsEligible, checkContractBalance, withdrawRBalance, isWalletConnected, depositAmount, claim, getFounder }