const element1 = document.getElementById("age")
const element2 = document.getElementById("education")
const element3 = document.getElementById("profession")
const element4 = document.getElementById("salary")
const element5 = document.getElementById("cooking")
const element6 = document.getElementById("humour")
const element7 = document.getElementById("wealth")
const element8 = document.getElementById("siblings")
const element9 = document.getElementById("occupation")
const element10 = document.getElementById("community")
const element11 = document.getElementById("car")
const element12 = document.getElementById("dog")
const element13 = document.getElementById("city")
const element14 = document.getElementById("tattoos")
const element15 = document.getElementById("Love")
const element16 = document.getElementsByClassName("household")
const element17 = document.getElementsByClassName("")

const button = document.querySelector("button")
button.addEventListener("click",()=>{
    const re = document.getElementById("result")

    if(element1.value==="" || element2.value==="select" || element3.value==="select" || element4.value==="" || element5.value==="select" || element6.value==="select" || element7.value==="" || element8.value==="select" || element9.value==="select" || element10.value==="select" || !(element16[0].checked||element16[1].checked||element16[2].checked)){
        re.textContent = "Arre bhai, saara biodata toh bhar! Aise kaise rishta milega? 😂"
        return;
    }

    if(element1.value<=18){
        re.textContent = "Beta, toys se khelne ki umar hai abhi. Pehle bada ho ja! 😂🤣"
        return;
    }
    else if(element1.value>=18 && element1.value<=24){
        re.textContent = "Shaadi ke liye jaldi hai, thoda career bana lo pehle! 😜"
        return;
    }

    if(element2.value==="Primary School" || element2.value==="Middle School" || element2.value==="High School"){
        re.textContent = "Padhaai pe dhyan do, shaadi ke liye abhi bohot chhote ho! 📚😂";
        return;
    }

    if(Number(element4.value)<=1200000){
        re.textContent= "Bhai, yeh salary dekh ke to rishta waale bhaag jayenge! Dahej ka sapna chhodo. 😭💸";
        return;
    }

    if(element7.value<element4.value){
        re.textContent = "Bhai, tumhara hi income family wealth se zyada? Baaki sab ghar me paise chhupa rahe hain kya? 🤨😂";
        return;
    }


    
})
