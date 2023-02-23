import './form2.css';

function CreateForm(){
    function handleInput(event){
        let v = event.target.value;
        let tName = String(event.target.name)
    
        let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g;

        let validBox = document.getElementById(tName+"ValidateText");
        if (v===""){
            validBox.innerHTML =  tName + " is a required field"
        }else{
            validBox.innerHTML = "";
        }

        if (tName === "password"){
            v.length < 8 ? validBox.innerHTML = "password must be at least 8 characters" : validBox.innerHTML = "";
        }

        if (tName === "email"){
            if (emailRegEx.test(v)===true){
                validBox.innerHTML = ""
            }else{
                validBox.innerHTML = "email invalid";
                if (v === "") validBox.innerHTML =  tName + " is a required field"
            } 
        }
    }

    function handleTextarea(event){
        let v = event.target.value;
        let validBox = document.getElementById(String(event.target.name)+"ValidateText");
        if (v===""){
            validBox.innerHTML = String(event.target.name) + " is a required field";
            event.target.classList.add("noInput")
        }else{
            event.target.classList.remove("noInput")
            validBox.innerHTML = "";
        }
    }

    function handleSelect(event){
        event.target.classList.remove("noSelected");
        document.getElementById(String(event.target.name)+"ValidateText").innerHTML = "";
    }

    function handleFormChange(event){
        let validateTexts = document.getElementsByClassName("validateText");
        let amount = validateTexts.length;
        let count = 0;
        let invalid = 0; 
        for(let box of validateTexts){
            box.innerHTML === "" ?count+=1:invalid+=1;
        }

        if (amount===count){
            document.getElementById("submitBtn").removeAttribute("disabled")
        }else{
            document.getElementById("submitBtn").setAttribute("disabled","true")
        }
    }

    function handleSubmit(){
        let inputs_set = document.getElementsByClassName("dataInput")
        for(let i of inputs_set){
            if (i.name!=="password"){
                document.getElementById("show_"+i.name).innerHTML = i.value;
            }
        }
    }


    return (
        <form action="javascript:void(0)" id='mainForm' autoComplete='off' onChange={handleFormChange} onSubmit={handleSubmit}>
            <div className="input_box">
                <p className='input_label'>Name <span className="require" >*</span></p>
                <input className='dataInput' type="text" name='name' required placeholder="Name" onInput={handleInput} />
                <p className='validateText' id="nameValidateText">name is a required field</p>
            </div>

            <div className="input_box">
                <p className='input_label'>Email <span className="require" >*</span></p>
                <input className='dataInput' type="email" name='email' required placeholder="Email" onInput={handleInput} />
                <p className='validateText' id="emailValidateText">email is a required field</p>
            </div>

            <div className="input_box">
                <p className='input_label'>Password <span className="require" >*</span></p>
                <input className='dataInput' type="password" name='password' required placeholder="Password" minLength={8} onInput={handleInput} />
                <p className='validateText' id="passwordValidateText">password must be at least 8 characters</p>
            </div>

            <div className="input_box">
                <p className='input_label'>Tel <span className="require" >*</span></p>
                <input className='dataInput' type="tel" name='tel' required placeholder="Tel" onInput={handleInput} />
                <p className='validateText' id="telValidateText">tel is a required field</p>
            </div>

            <div className="input_box">
                <p className='input_label'>Address <span className="require" >*</span></p>
                <textarea className='dataInput noInput' name='address' placeholder="Address" onInput={handleTextarea}/>
                <p className='validateText' id="addressValidateText">address is a required field</p>
            </div>

            <div className="input_box">
                <p className='input_label'>Gender <span className="require" >*</span></p>
                <select name="gender" className="dataInput noSelected" onChange={handleSelect} >
                    <option selected disabled>select gender</option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                </select>
                <p className='validateText' id="genderValidateText">gender is a required field</p>
            </div>

            <button className="btn btn-primary" id="submitBtn" disabled={true}>Submit</button>
        </form>
    )
}

export default CreateForm;