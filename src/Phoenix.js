import "./Phoenix.scss";
import React, { useEffect, useState } from "react";
import { Connection, PublicKey, clusterAPIUrl } from "@solana/web3.js";
// import { Program, Provider, web3 } from "@project-serum/anchor";
import toast, { Toaster } from "react-hot-toast";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

//Web3 constants
// const { SystemProgram, Keypair } = web3;
// let baseAccount = Keypair.generate();
// const programID = new PublicKey("B2tj6s4Nco5rSyEFFqw6Dkc5NsY4upRB5Nntwo5KabiA");
// const network = clusterApiUrl("devnet");
// const opts = {
//   preflightCommitment: "processed",
// };

export default function PhoenixApp() {
  // set date picker
  const [value, setValue] = React.useState(dayjs("2022-10-31T12:00:00"));
  const [walletAddress, setWalletAddress] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [unsignedVC, setUnsignedVC] = useState('');


  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");
  const card = document.querySelector(".card");

  // const handleButtonClick = (e) => {
  //   const targetSection = e.target.getAttribute("data-section");
    
  //   // const section = document.querySelector(targetSection);
    
  //   // targetSection !== "#about"
  //   //   ? card.classList.add("is-active")
  //   //   : card.classList.remove("is-active");
  //   // card.setAttribute("data-state", targetSection);
  //   // sections.forEach((s) => s.classList.remove("is-active"));
  //   // buttons.forEach((b) => b.classList.remove("is-active"));
  //   // e.target.classList.add("is-active");
  //   // section.classList.add("is-active");
  // };

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");

          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );

          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert(
          "To sign in, download a Phantom Wallet 👻 at https://phantom.app"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };


  const shortenAddress = (address) => {
    if (!address) return "";
    return address.substring(0, 4) + "....." + address.substring(40);
  };

  const renderConnectedContainer = () => (
    <div className="connected-container">
      <button className="cta-button disconnect-wallet-button" onClick={disconnectWallet}>
        <span className="sign-out">SIGN OUT </span>
        <span>{shortenAddress(walletAddress)}</span>
        
      </button>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
      </form>
    </div>
  );


  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const disconnectWallet = () => {
    console.log("Wallet Disconnected");
    setWalletAddress(null);
  };


  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };


  const renderNotConnectedContainer = () => (
    <div className="button-container">
      <button
        className="cta-button connect-wallet-button"
        onClick={connectWallet}
      >
        SIGN IN
      </button>
    </div>
  );

  // buttons.forEach((btn) => {
  //   btn.addEventListener("click", handleButtonClick);
  // });

  // const [walletAddress, setWalletAddress] = useState(null);
  // const [inputValue, setInputValue] = useState("");
  // const [gifList, setGifList] = useState([]);

  // const showPhantomToast = () =>
  //   toast("To submit a form, download a Phantom Wallet at https://phantom.app");
  // const showConnectedWalletToast = () => toast.success("You're signed in!");
  // const showDisconnectedWalletToast = () => toast.success("You've successfully signed out!");
  // const showGifSentToast = () => toast.success("Form Received");

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);



  return (
    <div className="App">
      <div className={walletAddress ? 'authed-container' : 'container'}>
        <Toaster
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
        <div className="header-container">
          {!walletAddress && renderNotConnectedContainer()}
          {walletAddress && renderConnectedContainer()}
          </div>
        
      <div className="newform">
        <form className="form" method="post" action="/post" onSubmit={(event) => {
          event.preventDefault();
        }}>
          <div class="card" data-state="#about">
            <div class="card-header">
              <img
                class="card-avatar"
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <h1 class="card-fullname">Dr. Caitlin Clarisse</h1>
              <h2 class="card-jobtitle">
                <p class="card-desc"></p>
              </h2>
            </div>
            <div class="card-main">
              <div class="card-section is-active" id="about">
                <div class="card-subtitle">Legal Name</div>
                <div class="input-box">
                  <input
                    class="legalname"
                    type="text"
                    placeholder="First Name, Last Name"
                    value={inputValue}
                    onChange={onInputChange}
                  />
                </div>
                <div class="card-subtitle">Address</div>
                <div class="input-box">
                  <input
                    class="address"
                    type="text"
                    placeholder="Unit, Street Name, City, State, Postal Code"
                    value={inputValue}
                    onChange={onInputChange}
                  />
                </div>
                <div class="card-subtitle">Age</div>
                <div class="input-box">
                  <input class="age" type="text" placeholder="i.e. 24" value={inputValue}
                    onChange={onInputChange}/>
                </div>
                <div class="card-subtitle">Description of Incident</div>
                <div class="input-box">
                  <input
                    class="description"
                    type="text"
                    placeholder="Provide details of incident"
                    value={inputValue}
                    onChange={onInputChange}
                  />
                </div>
                <div class="card-subtitle">Legal Name of Perpetrator</div>
                <div class="input-box">
                  <input
                    class="perpetrator-name"
                    type="text"
                    placeholder="First Name, Last Name"
                    value={inputValue}
                    onChange={onInputChange}
                  />
                </div>
                <div class="card-subtitle">Relationship with Perpetrator</div>
                <div class="input-box">
                  <input
                    class="relationship"
                    type="text"
                    placeholder="i.e. Mother"
                    value={inputValue}
                    onChange={onInputChange}
                  />
                </div>
                <div class="card-subtitle">Date of Incident</div>
                <div class="date-picker">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={1}>
                      <DesktopDatePicker
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
                <div class="card-subtitle">Date Examined by Doctor</div>
                <div class="date-picker">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={1}>
                      <DesktopDatePicker
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
              </div>
            </div>

            <div class="card-buttons">
              <button className="submit-button" onClick={() => setUnsignedVC("hello world")}>
                Submit Record
                
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
