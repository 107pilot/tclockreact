import React from "react";
import Data from "./data/config"; //move to backend and serve as API
//import fs from "browserify-fs"

function Config() {
  function GetConfig(){
    


  }

  function SetConfig() {
   
   /*  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
 */
  }

  return (
    <div>
      <h1>Config Page</h1>
      <div>
        <input type="text" placeholder={Data.location} />
        <button
          onClick={SetParams}
        >Submit</button>
      </div>
    </div>
  );
}

export default Config;
