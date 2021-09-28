import React, {useState} from "react";
import FourHeading from "./FourHeading";

export default function SectionContact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText]= useState("")
    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr]= useState({});
    const [textErr, setTextErr]= useState({});


    const handleName = (e) => { setName(e.target.value)};
    const handleEmail = (e) => { setEmail(e.target.value)};
    const handleText = (e) => { setText(e.target.value)};

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid){
            // send this data
            console.log('Submit');
            const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

            const data = {
                name: name,
                email: email,
                message : text
            };

            fetch(`${API}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
            setName("");
            setEmail("");
            setText("")

        }
    }
    const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const textErr = {};
    let isValid = true;


    if (name.trim().length < 5 || name.length == 0){
        nameErr.Short = "Podane imię jest nieprawidłowe!";
        isValid = false;
    }
    if (name.split(' ').length > 1 ){
        nameErr.MoreThenOne = "Podane imię jest nieprawidłowe!";
        isValid = false;
    }
    if (text.trim().length < 120 || text.trim().length == 0) {
        textErr.ToShort = "Wiadomość musi mieć co najmniej 120 znaków";
        isValid = false;
        }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(email).toLowerCase()) == false || email.length == 0){
         emailErr.Wrong = "Podany Email jest nieprawidłowy";
         isValid = false;
     }
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setTextErr(textErr);

    return isValid;



    }
    return <>
        <div id={"contact"} className={"section_contact section_row"}>

            <div className={"contact_background section_two"}>

            </div>
            <div className={"section_two"}>
                <form onSubmit={handleSubmit} className={"form"}>
                    <FourHeading head_text={"Skontaktuj się z Nami"}/>
                    <div className={"section_row"} style={{marginTop:"50px", marginLeft:"100px"}}>
                        <div>
                            <label  className={"label"} > Wpisz swoje imię</label><br/>
                            <input  onChange={handleName}
                                    className={"input"}
                                    type={"text"} placeholder={"Joanna"}/>
                            { Object.keys(nameErr).map((key) => {
                                return <div className={"error"}>{nameErr[key]}  </div>
                            })}
                        </div>
                        <div >
                            <label className={"label"} > Wpisz swój e-mail</label><br/>
                            <input onChange={handleEmail}
                                   className={"input"}
                                   type={"email"}
                                   placeholder={"abc@xyz.pl"}/>
                            { Object.keys(emailErr).map((key) => {
                                return <div className={"error"}>{emailErr[key]}  </div>
                            })}
                        </div>
                    </div>
                    <div style={{marginTop:"5%",marginLeft:"100px"}}>
                    <label className={"label"} > Wpisz swoją wiadomość</label><br/>

                        <textarea  onChange={handleText}
                            className={"textarea left"}
                            wrap={true}
                            placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>

                        { Object.keys(textErr).map((key) => {
                            return <div className={"error"}>{textErr[key]}  </div>
                        })}
                    </div>

                    <button style={{marginTop:"5%",marginLeft:"70%"}} className={"form_button"} type={"submit"}> Wyślij </button>

                </form>
            </div>
        </div>
    </>
}