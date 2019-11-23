import React from 'react';
function CheckBoxes(){

    const styles = {
        fontSize:24,
    }
    return(
        <div>
              <input type="checkbox"  name='dishes'/> <label for='dishes' style = {styles}>wash dishes</label>
              <br></br>
              <input type="checkbox"  name='dog'/> <label for='dog' style = {styles}>walk dog</label>
              <br></br>
              <input type="checkbox"  name='practice'/> <label for='practice' style = {styles}>practice react</label>
        </div>
    )
}
export default CheckBoxes