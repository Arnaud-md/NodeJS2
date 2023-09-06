import "./style.css";
//import fs from "fs-extra";
//import "./server/main.ts";

import { setupCounter } from "./counter";
import typescriptLogo from "./typescript.svg";
const app = document.querySelector('#app') as HTMLDivElement;
//document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
const firstDiv = document.createElement('div') as HTMLDivElement;
firstDiv.innerHTML = `
  <div>
    <div class="entry">
      <input type="text" id="text" name="text" minlength="3" maxlength="20" required>
    </div>
    <div class="card">
      <button id="submit" type="submit">Envoyer</button>
    </div>
  </div>
`;
app.appendChild(firstDiv);
let input="";
const button = document.querySelector<HTMLButtonElement>("#submit") as HTMLButtonElement;
const helloNameDiv = document.createElement('div') as HTMLDivElement;
button.addEventListener("click", () => 
//input=document.querySelector<HTMLInputElement>("#text")?.value as string;
//document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  
   helloNameDiv.innerHTML=`
   <p>Bonjour ${document.querySelector<HTMLInputElement>("#text")?.value}<p>
   `
  //input=document.querySelector<HTMLInputElement>("#text")?.value as string
  
);
// function writeHellos(input:string):void {
//   fs.writeJSONSync(`./hellos.json`,`{"name":"${input}"}`);
// }

button.addEventListener("click", () => 
input=document.querySelector<HTMLInputElement>("#text")?.value as string
);
button.addEventListener("click", () => 
console.log("la valeur de l'input est "+input)
);
// button.addEventListener("click", () => 
// writeHellos(input)
// );


// if (input!=""&&input!=null) {
//   helloNameDiv.innerHTML=`
//   <p>Bonjour ${input}<p>
//   `;
// app.appendChild(helloNameDiv);
// }
app.appendChild(helloNameDiv);
  

//setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
