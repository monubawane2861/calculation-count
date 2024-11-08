//

      let billAmountE1 = document.getElementById("billAmount");

      let tipAmountE1 = document.getElementById("tipAmount");

      let errorMsgE1 = document.getElementById("errorMsg");

      let showTipE1 = document.getElementById("showTip");

      let showTaE1 = document.getElementById("showTa");


      function onCheckTotalAmount(){

            if(billAmountE1.value === "" || tipAmountE1.value === ""){

              errorMsgE1.textContent = "Please Fill Out All The Fields";

            }

            else{


              let billAmt = parseInt(billAmountE1.value);

              let tipPercent =parseInt(tipAmountE1.value);

              let tip =  tipPercent*billAmt/100;

              let totalAmt = tip + billAmt;

              showTipE1.value = tip;

              showTaE1.value = totalAmt;

              errorMsgE1.textContent="";
              
            }

      }

      //percntage formula  

      /*

            value 
            ----------- * 100
            total value
      */
        