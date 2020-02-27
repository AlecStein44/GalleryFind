import React from "react";

const PopUp = (props) => {
    return(
        <div className="popup">
            <div className="popup_content">
                <form  onSubmit={props.inputArtGal}>
                  <label for="artistpro">Artist</label>
                  <input type="radio" name="profileselect" value="artistpro" onChange={props.type} />
                  <label for="gallerypro">Gallery</label>
                  <input type="radio" name="profileselect" value="gallerypro" onChange={props.type} />
                  <input type="submit" />
                </form>
            </div>
       </div>
    )
}

export default PopUp