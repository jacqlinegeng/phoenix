import logo from "./logo.svg";
import "./App.css";
import React, { userEffect, useState } from "react";
import { Connection, PublicKey, clusterAPIUrl } from "@solana/web3.js";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

//Web3 constants
// const { SystemProgram, KeyPair} = web3;
// let baseAccount = Keypair.generate();

function phoenixApp() {
  return (
    <div className="newform">
      <form className="form" method="post" action="/post">
        <span>
          Legal Name
          <input class="legalname" type="text" />
        </span>
        <div>
          Address
          <input class="address" type="text" />
        </div>
        <div>
          Age
          <input class="age" type="text" placeholder="Full Address" />
        </div>
        <div>
          Short Description of Perpetration
          <input class="description" type="text" />
        </div>
        <div>
          Legal Name of Perpetrator
          <input class="perpetratorname" type="text" />
        </div>
        <div>
          Relationship with Perpetrator
          <input class="relationship" type="text" />
        </div>
        <div>
          Doctor Name
          <input class="doctorname" type="text" />
        </div>
        <div>
          Time of Incident
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div>
          Time Examined by Doctor
          <input class="timeexamined" type="text" />
        </div>
        <button className="submit-button" onClick="">
          Submit Form
          {/* {shortenAddress(walletAddress)} */}
        </button>
      </form>
    </div>
  );
}

export default phoenixApp;
