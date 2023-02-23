import "./DisplayBox.css";

function Display(){
    return (
        <div id="displayDataInput">
            <p className="displayText">Name : <span id="show_name"></span></p>
            <p className="displayText">Email : <span id="show_email"></span></p>
            <p className="displayText">Tel : <span id="show_tel"></span></p>
            <p className="displayText">Address : <span id="show_address"></span></p>
            <p className="displayText">Gender : <span id="show_gender"></span></p>
        </div>
    )
}

export default Display;