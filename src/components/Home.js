import logo from '../download.svg';
import bannerImg from '../bannerImg.png'

import rainbow from './assets/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png'
import argent from './assets/argent.jfif'
import gnosis from './assets/genosis.jfif'
import trust from './assets/trust-wallet-66f8777532931d9c09b633344981a6a9.png'
import walleth from './assets/walleth-b60336f8dd9ea86285408cb4f96634d1.png'

import ether from './topCon/ethereum-foundation-e0a72f64e573d3bdbe482a88c31997fe.png'
import labs from './topCon/consensys-labs-502058940cfe3d49ad9775e07aabd3ee.png'
import git from './topCon/gitcoin-grants-dfd016110a7232b13ad6742691c50780.png'

export default function Home() {
  
  const TopCons = [
    {
      src : ether,
      name : 'Ether'
    },
    {
      src : labs,
      name : 'labs'
    },
    {
      src : git,
      name : 'Gitcoin'
    }
  ]

  const TopCodes = [
    {
      src : rainbow,
      name : 'Rainbow'
    },
    {
      src : trust,
      name : 'Trust'
    },
    {
      src : argent,
      name : 'Argent'
    },
    {
      src : walleth,
      name : 'Walleth'
    },
    {
      src : gnosis,
      name : 'Gnosis'
    }
  ]

  const TopCode = TopCodes.map((wallet) => {
    return (
        <div className='topCode'>
          <a href='./'>
            <img src={wallet.src} alt={wallet.name}>
            </img>
            <p> {wallet.name} </p>
          </a>
        </div>
      )
  })

  const TopCon = TopCons.map((item) => {
    return (
      <div className='topCon'>
          <a href='./'>
            <img src={item.src} alt={item.name}>
            </img>
          </a>
        </div>
    )
  })

  return (
    <div className="App">
      <div className='App-header'>
        <a className='MenuItem' href='./'>Github</a>
        <a className='MenuItem' href='./'>Docs</a>
        <img src={logo} className='App-logo' alt='Logo'/>
        <a className='MenuItem' href='./wallets'>Wallets</a>
        <a className='MenuItem' href='./'>Apps</a>
      </div>
      
      {/* Tag */}
      <div className='Tag'>
        <div className='brand'>
          WalletConnect
        </div>
        <div className='tagLine'>
          Open protocol for connecting Wallets to Dapps
        </div>
        
        <img src={bannerImg} alt='Banner'></img>
      </div>

      <div className='Sectioning'>
      <div className='whatIs'>
        <h2>
        What is WalletConnect?
        </h2>
        <p>
        WalletConnect is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making WalletConnect wallets a safer choice compared to desktop or browser extension wallets.
        </p>
      </div>
      
      <div className='whatIs'>
        <h2>
        How does it work?
        </h2>
        <p>
        WalletConnect connects web applications to supported mobile wallets. WalletConnect session is started by a scanning a QR code (desktop) or by clicking an application deep link (mobile).
        </p>
      </div>
      </div>

      <div className='centered'>

        <div className='cHeader'>
          Top Project Funders
        </div>

        <div className='imgHolders'>
        {TopCon}
        </div>

        <div className='cHeader'>
          Top Code Contributors
        </div>
        
        <div className='imgHolders'>
        {TopCode}
        </div>

        <div className='cHeader'>
          Frequently asked questions
        </div>

      </div>

      <div className='spaced'>

      <div className='whatIs'>
        <h2>
        How do I install WalletConnect?
        </h2>
        <p>
        WalletConnect is not an app, but a protocol supported by many different decentralised applications and wallets. Install any of <strong>mobile wallets</strong> supporting WalletConnect protocol. WalletConnect wallets are available for Android and iPhone.
        </p>
      </div>
      
      <div className='whatIs'>
        <h2>
        Is there a token?
        </h2>
        <p>
        There is no token. WalletConnect protocol does not run on a blockchain and there are no fees.
        </p>
      </div>
 
      <div className='whatIs'>
        <h2>
        How can I help WalletConnect project?
        </h2>
        <p>
          WalletConnect project is developed by open source developers of various Wallet and Dapp projects. Please contact us on Discord or Telegram if you want to help the project.
        </p>
      </div>
      
      <div className='whatIs'>
        <h2>
        How can I build a wallet supporting WalletConnect?
        </h2>
        <p>
        There are libraries for React-Native(Javascript), Android (Java) and Swift (iOS) available. Read more about it in our <strong>documentation</strong>.
        </p>
      </div>

      <div className='whatIs'>
        <h2>
        How can I add WalletConnect support to Dapp I developed?
        </h2>
        <p>
        You can support various wallets either using <strong>Web3Modal library</strong> or add a support for <strong>WalletConnect provider directly</strong>.
        </p>
      </div>
      
      <div className='whatIs'>
        <h2>
        How web frontend and mobile wallets communicate?
        </h2>
        <p>
        Communication happens over a bridge server that relays messages without access to their content. The contents are encrypted using the session data shared by the QR code or deep link between the dapp and the wallet. Read more about it in our <strong>documentation</strong>. WalletConnect Association runs a public bridge server, but you can also roll your own.
        </p>
      </div>
      </div>

      <footer>
        <a href="./" target="blank" rel="noreferrer noopener" className='footerItem'>
          <img src='data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGlzY29yZCBpY29uPC90aXRsZT48ZyBmaWxsPSJyZ2IoODgsIDExMiwgMTM1KSI+PHBhdGggZD0iTTIwLjIyMiAwYzEuNDA2IDAgMi41NCAxLjEzNyAyLjYwNyAyLjQ3NVYyNGwtMi42NzctMi4yNzMtMS40Ny0xLjMzOC0xLjYwNC0xLjM5OC42NyAyLjIwNUgzLjcxYy0xLjQwMiAwLTIuNTQtMS4wNjUtMi41NC0yLjQ3NlYyLjQ4QzEuMTcgMS4xNDIgMi4zMS4wMDMgMy43MTUuMDAzaDE2LjVMMjAuMjIyIDB6bS02LjExOCA1LjY4M2gtLjAzbC0uMjAyLjJjMi4wNzMuNiAzLjA3NiAxLjUzNyAzLjA3NiAxLjUzNy0xLjMzNi0uNjY4LTIuNTQtMS4wMDItMy43NDQtMS4xMzctLjg3LS4xMzUtMS43NC0uMDY0LTIuNDc1IDBoLS4yYy0uNDcgMC0xLjQ3LjItMi44MS43MzUtLjQ2Ny4yMDMtLjczNS4zMzYtLjczNS4zMzZzMS4wMDItMS4wMDIgMy4yMS0xLjUzN2wtLjEzNS0uMTM1cy0xLjY3Mi0uMDY0LTMuNDc3IDEuMjdjMCAwLTEuODA1IDMuMTQ0LTEuODA1IDcuMDIgMCAwIDEgMS43NCAzLjc0MyAxLjgwNiAwIDAgLjQtLjUzMy44MDUtMS4wMDItMS41NC0uNDY4LTIuMTQtMS40MDQtMi4xNC0xLjQwNHMuMTM0LjA2Ni4zMzUuMmguMDZjLjAzIDAgLjA0NC4wMTUuMDYuMDN2LjAwNmMuMDE2LjAxNi4wMy4wMy4wNi4wMy4zMy4xMzYuNjYuMjcuOTMuNC40NjYuMjAyIDEuMDY1LjQwMyAxLjguNTM2LjkzLjEzNSAxLjk5Ni4yIDMuMjEgMCAuNi0uMTM1IDEuMi0uMjY3IDEuOC0uNTM1LjM5LS4yLjg3LS40IDEuMzk3LS43MzcgMCAwLS42LjkzNi0yLjIwNSAxLjQwNC4zMy40NjYuNzk1IDEgLjc5NSAxIDIuNzQ0LS4wNiAzLjgxLTEuOCAzLjg3LTEuNzI2IDAtMy44Ny0xLjgxNS03LjAyLTEuODE1LTcuMDItMS42MzUtMS4yMTQtMy4xNjUtMS4yNi0zLjQzNS0xLjI2bC4wNTYtLjAyem0uMTY4IDQuNDEzYy43MDMgMCAxLjI3LjYgMS4yNyAxLjMzNSAwIC43NC0uNTcgMS4zNC0xLjI3IDEuMzQtLjcgMC0xLjI3LS42LTEuMjctMS4zMzQuMDAyLS43NC41NzMtMS4zMzggMS4yNy0xLjMzOHptLTQuNTQzIDBjLjcgMCAxLjI2Ni42IDEuMjY2IDEuMzM1IDAgLjc0LS41NyAxLjM0LTEuMjcgMS4zNC0uNyAwLTEuMjctLjYtMS4yNy0xLjMzNCAwLS43NC41Ny0xLjMzOCAxLjI3LTEuMzM4eiIvPjwvZz48L3N2Zz4=' alt='Discord'>
            </img>Discord
        </a>
        <a href="./" target="blank" rel="noreferrer noopener" className='footerItem'>
          <img src='data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+VGVsZWdyYW0gaWNvbjwvdGl0bGU+PGcgZmlsbD0icmdiKDg4LCAxMTIsIDEzNSkiPjxwYXRoIGQ9Ik0yMy45MSAzLjc5TDIwLjMgMjAuODRjLS4yNSAxLjIxLS45OCAxLjUtMiAuOTRsLTUuNS00LjA3LTIuNjYgMi41N2MtLjMuMy0uNTUuNTYtMS4xLjU2LS43MiAwLS42LS4yNy0uODQtLjk1TDYuMyAxMy43bC01LjQ1LTEuN2MtMS4xOC0uMzUtMS4xOS0xLjE2LjI2LTEuNzVsMjEuMjYtOC4yYy45Ny0uNDMgMS45LjI0IDEuNTMgMS43M3oiLz48L2c+PC9zdmc+' alt="Telegram">
            </img> Telegram
        </a>
        <a href="./" target="blank" rel="noreferrer noopener" className='footerItem'>
          <img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48ZyBmaWxsPSJyZ2IoODgsIDExMiwgMTM1KSI+PHBhdGggZD0iTTIzLjk1NCA0LjU2OWMtLjg4NS4zODktMS44My42NTQtMi44MjUuNzc1IDEuMDE0LS42MTEgMS43OTQtMS41NzQgMi4xNjMtMi43MjMtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0LS44OTYtLjk1OS0yLjE3My0xLjU1OS0zLjU5MS0xLjU1OS0yLjcxNyAwLTQuOTIgMi4yMDMtNC45MiA0LjkxNyAwIC4zOS4wNDUuNzY1LjEyNyAxLjEyNEM3LjY5MSA4LjA5NCA0LjA2NiA2LjEzIDEuNjQgMy4xNjFjLS40MjcuNzIyLS42NjYgMS41NjEtLjY2NiAyLjQ3NSAwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTYtLjgwNy0uMDI2LTEuNTY2LS4yNDgtMi4yMjgtLjYxNnYuMDYxYzAgMi4zODUgMS42OTMgNC4zNzQgMy45NDYgNC44MjctLjQxMy4xMTEtLjg0OS4xNzEtMS4yOTYuMTcxLS4zMTQgMC0uNjE1LS4wMy0uOTE2LS4wODYuNjMxIDEuOTUzIDIuNDQ1IDMuMzc3IDQuNjA0IDMuNDE3LTEuNjggMS4zMTktMy44MDkgMi4xMDUtNi4xMDIgMi4xMDUtLjM5IDAtLjc3OS0uMDIzLTEuMTctLjA2NyAyLjE4OSAxLjM5NCA0Ljc2OCAyLjIwOSA3LjU1NyAyLjIwOSA5LjA1NCAwIDEzLjk5OS03LjQ5NiAxMy45OTktMTMuOTg2IDAtLjIwOSAwLS40Mi0uMDE1LS42My45NjEtLjY4OSAxLjgtMS41NiAyLjQ2LTIuNTQ4bC0uMDQ3LS4wMnoiLz48L2c+PC9zdmc+" alt="Twitter">
            </img> Twitter
        </a>
        <a href="./" target="blank" rel="noreferrer noopener" className='footerItem'>
          <img  src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxnIGZpbGw9InJnYig4OCwgMTEyLCAxMzUpIj48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9nPjwvc3ZnPg==" alt="Github">
            </img> Github
        </a>
      </footer>
    </div>
  );
}
