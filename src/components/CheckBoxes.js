import React from 'react';
function CheckBoxes(){
    return(
        <div>
              <input type="checkbox"  name='dishes'/> <label for='dishes'>wash dishes</label>
              <br></br>
              <input type="checkbox"  name='dog'/> <label for='dog'>walk dog</label>
              <br></br>
              <input type="checkbox"  name='practice'/> <label for='practice'>practice react</label>
        </div>
    )
}
export default CheckBoxes