import navStyle from "../styles/Nav.module.css"
import Link from "next/link"
import React from "react";
import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../utils/interact.js";

const Nav = () => {
    //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function fetchWallet() {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address)
      setStatus(status); 
    }
    fetchWallet();
    addWalletListener(); 
  }, []);

function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  /*
  const onUpdatePressed = async () => {
    const { status } = await updateMessage(walletAddress, newMessage);
    setStatus(status);
};
*/
    
    return(
        <nav className = {navStyle.nav}>
            <ul>
            <li>
                <Link href="/"><img src="../images/clown-fish-64.png"></img></Link>
            </li>
                <li>
                    <Link href="/">Your Tag</Link>
                </li>

                <li>
                    
                <button className = {navStyle.btn} 
                onClick={connectWalletPressed}>
                            {walletAddress.length > 0 ? (
                                "Connected: " +
                                String(walletAddress).substring(0, 6) +
                                "..." +
                                String(walletAddress).substring(38)
                                ) : (
                                <span>Connect Wallet</span>
                                )}
                </button>
                </li>
            </ul>
        
        </nav>
    )
}

export default Nav