
    //Posuvnik musi aktualizovat svoji hodnotu do prazdneho divu
    const slider = document.getElementById("range");
    const sliderOutput = document.getElementById("output");

    function setOutput(){
        var val = slider.value;
        var output = sliderOutput;
        
        output.innerHTML = val;
    }

    // Generujeme nahodne heslo ze string retezce
    function generateRandomPassword(){
        var numbers = "0123456789";
        var letters = "abcdefghijklmnopqrstuvwxyz";
        var chars = "!@#$%^&*()";
        var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var passwordLength = document.getElementById("range").value;
        var pw = "";
        var password = "";

        //Ke kazdemu checkboxu priradime pole danych znaku, podle toho co bude zaskrtnute se bude generovat heslo
        //Vyber checkboxu
        checkBox1 = document.getElementById("capitalLetters");
        checkBox2 = document.getElementById("letters");
        checkBox3 = document.getElementById("numbers");
        checkBox4 = document.getElementById("chars");

        
        //if statement checking checkbox
        if(checkBox1.checked){
            pw += capitalLetters
        }
        if(checkBox2.checked){
            pw += letters
        }
        if(checkBox3.checked){
            pw += numbers
        }
        if(checkBox4.checked){
            pw += chars
        }
        console.log(pw)
        
        //for looping current checkbox string
        for (let i = 0; i <= passwordLength - 1; i++) {
            var randomNumber = Math.floor(Math.random() * pw.length);
            password += pw.substring(randomNumber, randomNumber + 1);
        }
        
        document.getElementById("password").value = password;
    }
    const confirmBtn = document.getElementById("confirmbtn");
    confirmBtn.addEventListener("click", () => {
        generateRandomPassword();
        
    })

    //Copy to clipboard
    function copyToClipboard(){
        var copyText = document.getElementById("password");
        //select text field
        copyText.select();
        copyText.setSelectionRange(0, 9999);
        //select text inside text field
        navigator.clipboard.writeText(copyText.value);
        alert("Copied to clipboard");
    }

   
    
    
    




//Tlacitko generate password vygeneruje z vybranych poli nahodne heslo