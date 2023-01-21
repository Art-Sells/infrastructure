// import './modals/RWmodal.min.js';
import React, { useRef } from 'react'

export const walletOneConnect = useRef(null);
export const walletOneConnector = useRef(null);


//Connect Wallet Functions
    var connectedWalletOne = false;
    export function connectWalletOne() {
        const walletOneConnected = walletOneConnector.current;
        walletOneConnected.style.display = "block";
        const walletOneNotConnected = walletOneConnect.current;
        walletOneNotConnected.style.display = "none";
        connectedWalletOne = true;
    }
    var connectedWalletTwo = false;
    function connectWalletTwo() {
            document.getElementById('wallet-two-connected').style.display = "block";
            document.getElementById('wallet-two-not-connected').style.display = "none";
            connectedWalletTwo = true;
    }

    
// Combinatorial Mechanism Tests (Below):
    
    //Wallet One Balance/Tokens/Inputs
/* 			var walletOneBalance = 10000.00;
    var walletOneTokens = 10.00;
    var walletOneTokenValue = 0.00; */
    
    //Wallet Two Balance/Tokens/Inputs
/* 			var walletTwoBalance = 5000.00;
    var walletTwoTokens = 5.00;	
    var walletTwoTokenValue = 0.00; */

    //inputTest		
    function getInputValue(){	        
        // Selecting the input element and get its value 
        
        // Displaying the value
        alert();
    }			

    //Step 1 [Trial & Error Purposes]
    function divideBalancesByTotalTokens() {

    //Wallet One:					
        //Get 'balance-one-connected' value
            //This code is for testing purposes
/* 				document.getElementById('balance-one-connected-value').style.display = "inline";
        document.getElementById('balance-one-connected').style.display = "none";
        document.getElementById('balance-one-connected-value').innerHTML = 
            walletOneBalance.toFixed(2); */
        //Get 'tokens-one-connected' value
            //This code is for testing purposes
/* 				document.getElementById('tokens-one-connected-value').style.display = "inline";
        document.getElementById('tokens-one-connected').style.display = "none";				
        document.getElementById('tokens-one-connected-value').innerHTML = 
                walletOneTokens.toFixed(2); */
        //Get walletOneTokenValue == divide walletOneBalance with walletOneTokens
        var walletOneTokenValue = (walletOneBalance / walletOneTokens);
            //This code is for testing purposes	
/* 				document.getElementById('balance-one-connected-value').innerHTML = 
                walletOneTokenValue.toFixed(2); */

    //Wallet Two:
        //Get 'balance-two-connected' value
            //This code is for testing purposes
/* 				document.getElementById('balance-two-connected-value').style.display = "inline";
        document.getElementById('balance-two-connected').style.display = "none";
        document.getElementById('balance-two-connected-value').innerHTML = 
                walletTwoBalance.toFixed(2); */				
        //Get 'tokens-one-connected' value
            //This code is for testing purposes				
/* 				document.getElementById('tokens-two-connected-value').style.display = "inline";
        document.getElementById('tokens-two-connected').style.display = "none";	
        document.getElementById('tokens-two-connected-value').innerHTML = 
                walletTwoTokens.toFixed(2); */
        //Get walletOneTokenValue == divide walletOneBalance with walletOneTokens
        var walletTwoTokenValue = (walletTwoBalance / walletTwoTokens);
            //This code is for testing purposes	
/* 				document.getElementById('balance-two-connected-value').innerHTML = 
                walletTwoTokenValue.toFixed(2); */	
        
    }

    //Step 2 [Trial & Error Purposes]
    function multiplyTokenValuesByTokensExchanged() {
        
        //Step 1
        var walletOneTokenValue = (walletOneBalance / walletOneTokens);
        var walletTwoTokenValue = (walletTwoBalance / walletTwoTokens);

        
        //Step 2
        var walletOneInput = parseFloat(document.getElementById('input-one').value);	
        var walletTwoInput = parseFloat(document.getElementById('input-two').value);

            //Wallet One
            var walletOneToTwoBalanceAdd = (walletOneTokenValue * walletOneInput);
            //This code is for testing purposes	
/* 		 			document.getElementById('balance-one-connected-value').style.display = "inline";
            document.getElementById('balance-one-connected').style.display = "none";
            document.getElementById('balance-one-connected-value').innerHTML = 
                walletOneToTwoBalanceAdd.toFixed(2); */

            //Wallet Two	
            var walletTwoToOneBalanceAdd = (walletTwoTokenValue * walletTwoInput);
            //This code is for testing purposes	
/* 		 			document.getElementById('balance-two-connected-value').style.display = "inline";
            document.getElementById('balance-two-connected').style.display = "none";					
            document.getElementById('balance-two-connected-value').innerHTML = 
                walletTwoToOneBalanceAdd.toFixed(2);	

            RWmodal.open(1, 'Exchange Successful');		 */													
        
    }		

    //Step 3 [Trial & Error Purposes]
/* 			function compareContrastExchangeTokens(){
        //Wallet One Balance/Tokens/Inputs
        var walletOneBalance = 100000.00;
        var walletOneTokens = 100.00;
        var walletOneInput = parseFloat(document.getElementById('input-one').value);
        //Wallet One Balance/Tokens Updates
        var walletOneTokenValue = 0.00;
        var walletOneToTwoBalanceAdd = 0.00;
        var newWalletOneTokens = document.getElementById('tokens-one-connected-value').innerHTML;
        
        //Wallet Two Balance/Tokens/Inputs
        var walletTwoBalance = 90000.00;
        var walletTwoTokens = 90.00;
        var walletTwoInput = parseFloat(document.getElementById('input-two').value);
        //Wallet Two Balance/Tokens Updates				
        var walletTwoTokenValue = 0.00;
        var walletTwoToOneBalanceAdd = 0.00;
        var newWalletTwoTokens = document.getElementById('tokens-two-connected-value').innerHTML;

        
        //Base Cases
        if (document.getElementById('input-one').value == "" ||
                document.getElementById('input-two').value == "") {
            RWmodal.open(1, 'Exchange Tokens');				
        }
        else if (walletOneTokens < walletOneInput || 
                walletTwoTokens < walletTwoInput){
            RWmodal.open(1, 'Limited Total Tokens');	
        }					
        //Main Algorithm
        else if (newWalletOneTokens == 0 || newWalletTwoTokens == 0) {
            
            walletOneTokens = (walletOneTokens - walletOneInput);
            walletTwoTokens = (walletTwoTokens - walletTwoInput);
            
            document.getElementById('tokens-one-connected-value').style.display = "inline";
            document.getElementById('tokens-one-connected').style.display = "none";	
            document.getElementById('tokens-one-connected-value').innerHTML = 
                walletOneTokens.toFixed(2);
            document.getElementById('input-one').value = "";	

            document.getElementById('tokens-two-connected-value').style.display = "inline";
            document.getElementById('tokens-two-connected').style.display = "none";	
            document.getElementById('tokens-two-connected-value').innerHTML = 
                walletTwoTokens.toFixed(2);
            document.getElementById('input-two').value = "";
        }
        else if (newWalletOneTokens < walletOneInput || 
                newWalletTwoTokens < walletTwoInput){
            RWmodal.open(1, 'Limited Total Tokens');	
        }	
        else if (newWalletOneTokens > 0 || newWalletTwoTokens > 0) {				
            
            newWalletOneTokens = (newWalletOneTokens - walletOneInput);
            newWalletTwoTokens = (newWalletTwoTokens - walletTwoInput);
            
            document.getElementById('tokens-one-connected-value').innerHTML = 
                newWalletOneTokens.toFixed(2);
            document.getElementById('input-one').value = "";	

            document.getElementById('tokens-two-connected-value').innerHTML = 
                newWalletTwoTokens.toFixed(2);
            document.getElementById('input-two').value = "";
            
        } 
        
    } */

    //For Testing Purposes
    function calculationTest(){

        var newWalletOneBalance = 11000.65;
        var newWalletOneFormating = new Intl.NumberFormat('en-US',
                { minimumFractionDigits: 2 }).format(newWalletOneBalance);
        var newWalletOneFormater = newWalletOneFormating;	
        newWalletOneFormat = newWalletOneFormater.replace(/\,/g,'');
        newWalletOneFormat = parseFloat(newWalletOneFormat,1);	
        newWalletOneFormatin = (newWalletOneFormat + newWalletOneFormat);

        var newWalletOneFormater = new Intl.NumberFormat('en-US',
                { minimumFractionDigits: 2 }).format(newWalletOneFormatin);
            
        alert("wallet One Balance Format = " + newWalletOneFormater);
        
    }

    //Step 4 //For Trial & Error Purposes
    function updateBalances(){
        //Wallet One Balance/Tokens/Inputs
        var walletOneBalance = 100000.00;
        var walletOneTokens = 100.00;
        var walletOneInput = parseFloat(document.getElementById('input-one').value);
        //Wallet One Balance/Tokens Updates
        var walletOneTokenValue = (walletOneBalance / walletOneTokens);
        var walletOneToTwoBalanceAdd = (walletOneTokenValue * walletOneInput);
        //New Wallet One Balance/Tokens Updates
        var newWalletOneBalance = document.getElementById('balance-one-connected-value').innerHTML;					
        var newWalletOneTokens = document.getElementById('tokens-one-connected-value').innerHTML;			

        
        //Wallet Two Balance/Tokens/Inputs
        var walletTwoBalance = 90000.00;
        var walletTwoTokens = 90.00;
        var walletTwoInput = parseFloat(document.getElementById('input-two').value);
        //Wallet Two Balance/Tokens Updates				
        var walletTwoTokenValue = (walletTwoBalance / walletTwoTokens);
        var walletTwoToOneBalanceAdd = (walletTwoTokenValue * walletTwoInput);
        //New Wallet One Balance/Tokens Updates
        var newWalletTwoBalance = document.getElementById('balance-two-connected-value').innerHTML;
        var newWalletTwoTokens = document.getElementById('tokens-two-connected-value').innerHTML;			
        
        //Base Cases
        if (document.getElementById('input-one').value == "" ||
            document.getElementById('input-two').value == "") {
            RWmodal.open(1, 'Enter Valid Tokens');				
        }
        else if (document.getElementById('input-one').value == "." ||
                document.getElementById('input-two').value == ".") {
            RWmodal.open(1, 'Enter Valid Tokens');	
        }
        else if (document.getElementById('input-one').value < "0" ||
                document.getElementById('input-two').value < "0") {
            RWmodal.open(1, 'Enter Valid Tokens');	
        }
        else if (walletOneTokens < walletOneInput || 
                    walletTwoTokens < walletTwoInput){
            RWmodal.open(1, 'Exceeded Total Tokens');	
        }							
        //Main Algorithm
        else if (newWalletOneTokens == 0 || newWalletTwoTokens == 0) {

            //Balances Updating Algorithm
            walletOneBalance = (walletOneBalance + walletTwoToOneBalanceAdd);
            walletTwoBalance = (walletTwoBalance + walletOneToTwoBalanceAdd);
            walletOneFormat = new Intl.NumberFormat('en-US',
                    { minimumFractionDigits: 2 }).format(walletOneBalance);
            walletTwoFormat = new Intl.NumberFormat('en-US',
                    { minimumFractionDigits: 2 }).format(walletTwoBalance);	

            document.getElementById('balance-one-connected-value').style.display = "inline";
            document.getElementById('balance-one-connected').style.display = "none";	
            document.getElementById('balance-one-connected-value').innerHTML = 
                walletOneFormat;

            document.getElementById('balance-two-connected-value').style.display = "inline";
            document.getElementById('balance-two-connected').style.display = "none";	
            document.getElementById('balance-two-connected-value').innerHTML = 
                walletTwoFormat;
            
            //Tokens Updating Algorithm
            walletOneTokens = (walletOneTokens - walletOneInput);
            walletTwoTokens = (walletTwoTokens - walletTwoInput);
            
            document.getElementById('tokens-one-connected-value').style.display = "inline";
            document.getElementById('tokens-one-connected').style.display = "none";	
            document.getElementById('tokens-one-connected-value').innerHTML = 
                walletOneTokens.toFixed(2);
            document.getElementById('input-one').value = "";	

            document.getElementById('tokens-two-connected-value').style.display = "inline";
            document.getElementById('tokens-two-connected').style.display = "none";	
            document.getElementById('tokens-two-connected-value').innerHTML = 
                walletTwoTokens.toFixed(2);
            document.getElementById('input-two').value = ""; 

            RWmodal.open(1, 'Exchange Successful');	
        }
        else if (newWalletOneTokens < walletOneInput || 
                newWalletTwoTokens < walletTwoInput){
            RWmodal.open(1, 'Limited Total Tokens');	
        }
        else if (newWalletOneTokens > 0 || newWalletTwoTokens > 0) {	

            //Balances Updating Algorithm
            newWalletOneBalance = newWalletOneBalance.replace(/\,/g,'');
            newWalletTwoBalance = newWalletTwoBalance.replace(/\,/g,'');

            newWalletOneBalance = parseFloat(newWalletOneBalance,1);	
            newWalletTwoBalance = parseFloat(newWalletTwoBalance,1);	

            var newWalletOneTokenValue = (newWalletOneBalance / newWalletOneTokens);
            var newWalletTwoTokenValue = (newWalletTwoBalance / newWalletTwoTokens);
            
            var newWalletOneToTwoBalanceAdd = (newWalletOneTokenValue * walletOneInput);
            var newWalletTwoToOneBalanceAdd = (newWalletTwoTokenValue * walletTwoInput);					
            
            var newWalletOneBalanced = (newWalletOneBalance + newWalletTwoToOneBalanceAdd);
            var newWalletTwoBalanced = (newWalletTwoBalance + newWalletOneToTwoBalanceAdd);

            newWalletOneBalanced = (Math.round(newWalletOneBalanced * 100) / 100).toFixed(2);
            newWalletTwoBalanced = (Math.round(newWalletTwoBalanced * 100) / 100).toFixed(2);
            
            var newWalletOneFormat = new Intl.NumberFormat('en-US',
                    { minimumFractionDigits: 2 }).format(newWalletOneBalanced);
            var newWalletTwoFormat = new Intl.NumberFormat('en-US',
                    { minimumFractionDigits: 2 }).format(newWalletTwoBalanced);	

            document.getElementById('balance-one-connected-value').innerHTML = 
                newWalletOneFormat;
            document.getElementById('balance-two-connected-value').innerHTML = 
                newWalletTwoFormat;								

            //Tokens Updating Algorithm
            newWalletOneTokens = (newWalletOneTokens - walletOneInput);
            newWalletTwoTokens = (newWalletTwoTokens - walletTwoInput);
            
            document.getElementById('tokens-one-connected-value').innerHTML = 
                newWalletOneTokens.toFixed(2);
            document.getElementById('input-one').value = "";	

            document.getElementById('tokens-two-connected-value').innerHTML = 
                newWalletTwoTokens.toFixed(2);
            document.getElementById('input-two').value = "";

            RWmodal.open(1, 'Exchange Successful');		 				
            
        }				
    }
// CPES Tests (Above)
			
			
			
			
//CPES (Cross Pollination Exchange System) (Below)	
			
function crossPollinationExchangeSystem(){
    //Wallet One Balance/Tokens/Inputs
    var walletOneBalance = 100000.00;
    var walletOneTokens = 100.00;
    var walletOneInput = parseFloat(document.getElementById('input-one').value);
    //Wallet One Balance/Tokens Updates
    var walletOneTokenValue = (walletOneBalance / walletOneTokens);
    var walletOneToTwoBalanceAdd = (walletOneTokenValue * walletOneInput);
    //New Wallet One Balance/Tokens Updates
    var newWalletOneBalance = document.getElementById('balance-one-connected-value').innerHTML;					
    var newWalletOneTokens = document.getElementById('tokens-one-connected-value').innerHTML;			

    
    //Wallet Two Balance/Tokens/Inputs
    var walletTwoBalance = 90000.00;
    var walletTwoTokens = 90.00;
    var walletTwoInput = parseFloat(document.getElementById('input-two').value);
    //Wallet Two Balance/Tokens Updates				
    var walletTwoTokenValue = (walletTwoBalance / walletTwoTokens);
    var walletTwoToOneBalanceAdd = (walletTwoTokenValue * walletTwoInput);
    //New Wallet One Balance/Tokens Updates
    var newWalletTwoBalance = document.getElementById('balance-two-connected-value').innerHTML;
    var newWalletTwoTokens = document.getElementById('tokens-two-connected-value').innerHTML;			
    
    //Base Cases
    if (document.getElementById('input-one').value == "" ||
        document.getElementById('input-two').value == "") {
        RWmodal.open(1, 'Enter Valid Tokens');				
    }
    else if (document.getElementById('input-one').value == "." ||
            document.getElementById('input-two').value == ".") {
        RWmodal.open(1, 'Enter Valid Tokens');	
    }
    else if (document.getElementById('input-one').value < "0" ||
            document.getElementById('input-two').value < "0") {
        RWmodal.open(1, 'Enter Valid Tokens');	
    }
    else if (walletOneTokens < walletOneInput || 
             walletTwoTokens < walletTwoInput){
        RWmodal.open(1, 'Limited Total Tokens');	
    }							
    //Main Algorithm
    else if (newWalletOneTokens == 0 || newWalletTwoTokens == 0) {

        //Balances Updating Algorithm
         walletOneBalance = (walletOneBalance + walletTwoToOneBalanceAdd);
         walletTwoBalance = (walletTwoBalance + walletOneToTwoBalanceAdd);
         walletOneFormat = new Intl.NumberFormat('en-US',
                  { minimumFractionDigits: 2 }).format(walletOneBalance);
         walletTwoFormat = new Intl.NumberFormat('en-US',
                  { minimumFractionDigits: 2 }).format(walletTwoBalance);	

         document.getElementById('balance-one-connected-value').style.display = "inline";
        document.getElementById('balance-one-connected').style.display = "none";	
         document.getElementById('balance-one-connected-value').innerHTML = 
             walletOneFormat;

        document.getElementById('balance-two-connected-value').style.display = "inline";
        document.getElementById('balance-two-connected').style.display = "none";	
         document.getElementById('balance-two-connected-value').innerHTML = 
             walletTwoFormat;
         
        //Tokens Updating Algorithm
        walletOneTokens = (walletOneTokens - walletOneInput);
        walletTwoTokens = (walletTwoTokens - walletTwoInput);
        
        document.getElementById('tokens-one-connected-value').style.display = "inline";
        document.getElementById('tokens-one-connected').style.display = "none";	
         document.getElementById('tokens-one-connected-value').innerHTML = 
             walletOneTokens.toFixed(2);
         document.getElementById('input-one').value = "";	

        document.getElementById('tokens-two-connected-value').style.display = "inline";
        document.getElementById('tokens-two-connected').style.display = "none";	
         document.getElementById('tokens-two-connected-value').innerHTML = 
             walletTwoTokens.toFixed(2);
         document.getElementById('input-two').value = ""; 

         RWmodal.open(1, 'Exchange Successful');	
    }
    else if (newWalletOneTokens < walletOneInput || 
            newWalletTwoTokens < walletTwoInput){
        RWmodal.open(1, 'Limited Total Tokens');	
    }
    else if (newWalletOneTokens > 0 || newWalletTwoTokens > 0) {	

        document.getElementById('reset').style.display = "block";

        //Balances Updating Algorithm
         newWalletOneBalance = newWalletOneBalance.replace(/\,/g,'');
        newWalletTwoBalance = newWalletTwoBalance.replace(/\,/g,'');

        newWalletOneBalance = parseFloat(newWalletOneBalance,1);	
        newWalletTwoBalance = parseFloat(newWalletTwoBalance,1);	

        var newWalletOneTokenValue = (newWalletOneBalance / newWalletOneTokens);
        var newWalletTwoTokenValue = (newWalletTwoBalance / newWalletTwoTokens);
        
        var newWalletOneToTwoBalanceAdd = (newWalletOneTokenValue * walletOneInput);
        var newWalletTwoToOneBalanceAdd = (newWalletTwoTokenValue * walletTwoInput);					
        
         var newWalletOneBalanced = (newWalletOneBalance + newWalletTwoToOneBalanceAdd);
         var newWalletTwoBalanced = (newWalletTwoBalance + newWalletOneToTwoBalanceAdd);

         newWalletOneBalanced = (Math.round(newWalletOneBalanced * 100) / 100).toFixed(2);
         newWalletTwoBalanced = (Math.round(newWalletTwoBalanced * 100) / 100).toFixed(2);
         
         var newWalletOneFormat = new Intl.NumberFormat('en-US',
                  { minimumFractionDigits: 2 }).format(newWalletOneBalanced);
         var newWalletTwoFormat = new Intl.NumberFormat('en-US',
                  { minimumFractionDigits: 2 }).format(newWalletTwoBalanced);	

         document.getElementById('balance-one-connected-value').innerHTML = 
             newWalletOneFormat;
         document.getElementById('balance-two-connected-value').innerHTML = 
             newWalletTwoFormat;								

        //Tokens Updating Algorithm
        newWalletOneTokens = (newWalletOneTokens - walletOneInput);
        newWalletTwoTokens = (newWalletTwoTokens - walletTwoInput);
        
         document.getElementById('tokens-one-connected-value').innerHTML = 
             newWalletOneTokens.toFixed(2);
         document.getElementById('input-one').value = "";	

         document.getElementById('tokens-two-connected-value').innerHTML = 
             newWalletTwoTokens.toFixed(2);
         document.getElementById('input-two').value = "";

         RWmodal.open(1, 'Exchange Successful');		 				
         
    }				
}				

//CPES (Cross Pollination Exchange Systen) (Above)		

//Input Format Function	
export function isNumberKey(evt, obj) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    var value = obj.value;
    var dotcontains = value.indexOf(".") != -1;
    if (dotcontains)
        if (charCode == 46) return false;
    if (charCode == 46) return true;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

export function resetWallets(){
        
        var walletOneBalance = 100000.00;
         var walletOneFormat = new Intl.NumberFormat('en-US',
                  { minimumFractionDigits: 2 }).format(walletOneBalance);
        document.getElementById('balance-one-connected-value').innerHTML = 
             walletOneFormat;
        var walletOneTokens = 100.00;
         document.getElementById('tokens-one-connected-value').innerHTML = 
             walletOneTokens.toFixed(2);
         
        var walletTwoBalance = 90000.00;
         var walletTwoFormat = new Intl.NumberFormat('en-US',
                  { minimumFractionDigits: 2 }).format(walletTwoBalance);
        document.getElementById('balance-two-connected-value').innerHTML = 
            walletTwoFormat;
        var walletTwoTokens = 90.00;
         document.getElementById('tokens-two-connected-value').innerHTML = 
             walletTwoTokens.toFixed(2);
         
        RWmodal.open(1, 'Wallets Reset');	
}




export function exchange(){
    if (connectedWalletOne == false || connectedWalletTwo == false){
        RWmodal.open(1, 'Connect Both Wallets');
        }
    else if (connectedWalletOne == true && connectedWalletTwo == true){
        //RWmodal.open(1, 'In Development');	
        
        crossPollinationExchangeSystem();
    }
        
}    