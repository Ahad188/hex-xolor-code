          const contain = document.getElementById('boss');
          const btn = document.querySelector(".refress-btn");
           const count = 20;

          function hexColor () {
               contain.innerHTML ="";
                for( let i = 0; i < count; i++){
                    let randomHex = Math.floor(Math.random() * 0xfffff).toString(16);
                    randomHex =`#${randomHex.padStart(6,"0")}`
                    console.log(randomHex);
                
                    const color = document.createElement("li");
                    color.classList.add("color");
                    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                    <span class="hex-value">${randomHex}</span>`;

                    contain.appendChild(color);
                }  
          }
          hexColor();
 
          btn.addEventListener("click",hexColor);