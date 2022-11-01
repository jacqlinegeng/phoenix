  // <div className="App">
    //   <div className={walletAddress ? 'authed-container' : 'container'}>
    //     <Toaster
    //       toastOptions={{
    //         className: "",
    //         duration: 3000,
    //         style: {
    //           border: "1px solid #713200",
    //           padding: "16px",
    //           color: "#713200",
    //         },
    //       }}
    //     />
    //     <div className="header-container">
    //       {!walletAddress && renderNotConnectedContainer()}
    //       {walletAddress && renderConnectedContainer()}
    //       </div>
        
    //   <div className="newform">
    //     <form className="form" method="post" action="/post" onSubmit={(event) => {
    //       event.preventDefault();
    //     }}>
    //       <div class="card" data-state="#about">
    //         <div class="card-header">
    //           <img
    //             class="card-avatar"
    //             src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //             alt="avatar"
    //           />
    //           <h1 class="card-fullname">Dr. Caitlin Clarisse</h1>
    //           <h2 class="card-jobtitle">
    //             <p class="card-desc"></p>
    //           </h2>
    //         </div>
    //         <div class="card-main">
    //           <div class="card-section is-active" id="about">
    //             <div class="card-subtitle">Legal Name</div>
    //             <div class="input-box">
    //               <input
    //                 type='text'
    //                 value={unsignedVC.name}
    //                 onChange={e => {
    //                   let temp = unsignedVC
    //                   temp.name= e.target.value
    //                   setUnsignedVC(temp)
    //                 }}
    //               />
    //             </div>
                // {/* <div class="card-subtitle">Address</div>
                // <div class="input-box">
                //   <input
                //     class="address"
                //     type="text"
                //     placeholder="Unit, Street Name, City, State, Postal Code"
                //     value={unsignedVC.credentialSubject.address}
                //     onChange={e => {
                //       let temp = {...unsignedVC}
                //       temp.credentialSubject.address = e.target.value
                //       setUnsignedVC(temp)
                //     }}
                //   />
                // </div> */}
                // {/* <div class="card-subtitle">Age</div>
                // <div class="input-box">
                //   <input 
                //     class="age" 
                //     type="text" 
                //     placeholder="i.e. 24" 
                //     value={unsignedVC.credentialSubject.age}
                //     onChange={e => {
                //       let temp = {...unsignedVC}
                //       temp.credentialSubject.age = e.target.value
                //       setUnsignedVC(temp)
                //     }}/>
                // </div>
                // <div class="card-subtitle">Description of Incident</div>
                // <div class="input-box">
                //   <input
                //     class="description"
                //     type="text"
                //     placeholder="Provide details of incident"
                //     value={unsignedVC.credentialSubject.description}
                //     onChange={e => {
                //       let temp = {...unsignedVC}
                //       temp.credentialSubject.description = e.target.value
                //       setUnsignedVC(temp)
                //     }}
                //   />
                // </div> */}
                // {/* <div class="card-subtitle">Legal Name of Perpetrator</div>
                // <div class="input-box">
                //   <input
                //     class="perpetrator-name"
                //     type="text"
                //     placeholder="First Name, Last Name"
                //     value={unsignedVC.credentialSubject.perpetratorName}
                //     onChange={e => {
                //       let temp = {...unsignedVC}
                //       temp.credentialSubject.perpetratorName = e.target.value
                //       setUnsignedVC(temp)
                    // }}
                //   />
                // </div>
                // <div class="card-subtitle">Relationship with Perpetrator</div>
                // <div class="input-box">
                //   <input
                //     class="relationship"
                //     type="text"
                //     placeholder="i.e. Mother"
                //     value={unsignedVC.credentialSubject.relationship}
                //     onChange={e => {
                //       let temp = {...unsignedVC}
                //       temp.credentialSubject.relationship = e.target.value
                //       setUnsignedVC(temp)
                //     }}
                //   />
                // </div>
                // <div class="card-subtitle">Date of Incident</div>
                // <div class="date-picker">
                //   <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <Stack spacing={1}>
                //       <DesktopDatePicker
                //         inputFormat="MM/DD/YYYY"
                //         value={value}
                //         onChange={handleChange}
                //         renderInput={(params) => <TextField {...params} />}
                //       />
                //     </Stack>
                //   </LocalizationProvider>
                // </div>
                // <div class="card-subtitle">Date Examined by Doctor</div> */}
                // {/* <div class="date-picker">
                //   <LocalizationProvider dateAdapter={AdapterDayjs}>
                //     <Stack spacing={1}>
                //       <DesktopDatePicker
                //         inputFormat="MM/DD/YYYY"
                //         value={value}
                //         onChange={handleChange}
                //         renderInput={(params) => <TextField {...params} />}
                //       />
                //     </Stack>
                //   </LocalizationProvider>
                // </div> */}
    //           </div>
    //         </div>

    //         <div class="card-buttons">
    //           <button className="submit-button" onClick={() => setUnsignedVC("hello world")}>
    //             Submit Record {unsignedVC}
                
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   </div>
    // </div>