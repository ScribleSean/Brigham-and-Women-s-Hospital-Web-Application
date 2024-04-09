// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import styles from "../../styles/GiftRequest.module.css";
// import { Link } from "@mui/material";

// import SideNavbar from "../../components/SideNavbar";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const GiftRequest: React.FC = () => {
  // const [formState, setFormState] = useState({
  //     employeeName: "", // text box
  //     priority: "", // drop down
  //     location: "", // drop down
  //     giftType: "", // drop down
  //     deliveryTime: "", // date picker
  //     status: "" // radio button
  // });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormState({
  //         ...formState,
  //         [event.target.name]: event.target.value,
  //     });
  // };

  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      setIsSubmitted(true);
  };
  //Handle form submission here
  // try {
  //     const response = await axios.post("/api/form", formState);
  //     console.log("Form data sent successfully:", response.data);
  // } catch (error) {
  //     console.error("Error submitting form data:", error);
  // }
  // };

    return isSubmitted ? (
        <>
            <h1 className={`${styles.flowerPageTitle} text-center mb-5 pt-5`}>
                Gift Request
            </h1>
        </>
    ) : (
        <>
            <div className={`col-10 ${styles.giftRequest} mb-5`}>
                <div className={`text-center pt-3 pb-2`}>
                    <h1>Gift Request</h1>
                </div>
                <div
                    className={`text-start justify-content-center mt-3`}
                >
                    <form className={`p-5 rounded-4 ${styles.formBgColor} ${styles.blueBorder}`}
                          onSubmit={handleSubmit}>
                        <div className={`${styles.allInputs}`}>
                            <div className={`row ${styles.inputSection}`}>
                                <div className="form-group">
                                    <label className={`${styles.textInputFontBold} ${styles.textInput}`}>Employee
                                        Name</label>
                                    <input
                                        type="text"
                                        className={`${styles.fieldBgColor} ${styles.roundedInputBorders} form-control shadow-sm py-3`}
                              placeholder="Name"
                          />
                      </div>
                  </div>
                  <div className={`row ${styles.inputSection} ${styles.longBoxPadding}`}>
                      <label className={`${styles.textInputFontBold} ${styles.textInput}`}>Location</label>
                      <select
                          className={`${styles.roundedInputBorders} ${styles.fieldBgColor} form-select shadow-lg py-3 rounded-input-borders`}>
                          <option>Node 1</option>
                          <option>Node 2</option>
                          {/*todo: connect to database Nodes*/}
                      </select>
                  </div>
                  <div className={`row ${styles.inputSection}`}>
                      <div className={`col ${styles.col}`}>
                          <label className={`${styles.textInputFontBold} ${styles.nonTextInput}`}>Gift Type</label>
                          <select
                              className={`${styles.roundedInputBorders} ${styles.fieldBgColor} form-select shadow py-3 rounded-input-borders`}>
                              <option>Hat</option>
                              <option>Beanie</option>
                              <option>Wrist Band</option>
                              <option>Sticker</option>
                          </select>
                      </div>
                      <div className={`col ${styles.col}`}>
                          {/*<LocalizationProvider dateAdapter={AdapterDayjs}> c*/}
                          {/*    <DatePicker />*/}
                          {/*</LocalizationProvider>*/}
                          <label className={`${styles.textInputFontBold} ${styles.nonTextInput}`}>Date</label>
                          <select
                              className={`${styles.roundedInputBorders} ${styles.fieldBgColor} form-select shadow py-3 rounded-input-borders`}>
                              <option>Node 1</option>
                              <option>Node 2</option>
                              {/*todo: connect to database Nodes*/}
                          </select>
                          {/* todo: get the date picker to actually work*/}
                      </div>
                  </div>
                  <div className={`row ${styles.inputSection}`}>
                      <div className={`col text-start ${styles.col}`}>
                          <label className={`${styles.textInputFontBold} ${styles.nonTextInput}`}>Priority</label>

                          <div className={`${styles.fieldBgColor} ${styles.roundedInputBorders} p-2 px-3 pt-3`}>
                              <div className={`form-check ${styles.radioButtonSpacing}`}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                         id="flexRadioDefault1"/>
                                  <label className={`form-check-label ${styles.radioButtonFontSize}`}
                                         htmlFor="flexRadioDefault1">
                                      Low
                                  </label>
                              </div>
                              <div className={`form-check ${styles.radioButtonSpacing}`}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                         id="flexRadioDefault2"
                                         checked/>
                                  <label className={`form-check-label ${styles.radioButtonFontSize}`}
                                         htmlFor="flexRadioDefault2">
                                      Medium
                                  </label>
                              </div>
                              <div className={`form-check ${styles.radioButtonSpacing}`}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                         id="flexRadioDefault1"/>
                                  <label className={`form-check-label ${styles.radioButtonFontSize}`}
                                         htmlFor="flexRadioDefault1">
                                      High
                                  </label>
                              </div>
                              <div className={`form-check ${styles.radioButtonSpacing}`}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                         id="flexRadioDefault2"
                                         checked/>
                                  <label className={`form-check-label ${styles.radioButtonFontSize}`}
                                         htmlFor="flexRadioDefault2">
                                      Emergency
                                  </label>
                              </div>
                          </div>

                      </div>
                      <div className={`col`}>
                          <label className={`${styles.textInputFontBold} ${styles.nonTextInput}`}>Status</label>
                          <div className={`${styles.fieldBgColor} ${styles.roundedInputBorders} p-2 px-3 pt-3`}>
                              <div className={`form-check ${styles.radioButtonSpacing}`}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                         id="flexRadioDefault1"/>
                                  <label className={`form-check-label ${styles.radioButtonFontSize}`}
                                         htmlFor="flexRadioDefault1">
                                      Unassigned
                                  </label>
                              </div>
                              <div className={`form-check ${styles.radioButtonSpacing}`}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                         id="flexRadioDefault2"
                                         checked/>
                                  <label className={`form-check-label ${styles.radioButtonFontSize}`}
                                         htmlFor="flexRadioDefault2">
                                      Assigned
                                  </label>
                              </div>
                              <div className={`form-check ${styles.radioButtonSpacing}`}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                         id="flexRadioDefault1"/>
                                  <label className={`form-check-label ${styles.radioButtonFontSize}`}
                                         htmlFor="flexRadioDefault1">
                                      InProgress
                                  </label>
                              </div>
                              <div className={`form-check ${styles.radioButtonSpacing}`}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault"
                                         id="flexRadioDefault2"
                                         checked/>
                                  <label className={`form-check-label ${styles.radioButtonFontSize}`}
                                         htmlFor="flexRadioDefault2">
                                      Closed
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={"text-center pt-4"}>
                  <button type="submit" className={`btn btn-primary rounded-pill ${styles.sendButton}`}>
                      Send
                  </button>
              </div>
          </form>

      </div>
        </div>
    </>
    );
};
export default GiftRequest;
