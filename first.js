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
const element17 = document.getElementsByClassName("bonus")

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

    if(Number(element7.value)<Number(element4.value)){
        re.textContent = "Bhai, tumhara hi income family wealth se zyada? Baaki sab ghar me paise chhupa rahe hain kya? 🤨😂";
        return;
    }
    
    let bonus = 0;
    if(element17[0].checked) bonus = bonus + 200000;
    if(element17[1].checked) bonus = bonus + 50000;
    if(element17[2].checked) bonus = bonus + 100000;
    if(element17[3].checked) bonus = bonus - 100000;
    if(element17[4].checked) bonus = bonus + Math.floor(Math.random()*10000000);

    let thoughts = [
        "Dowry? Nah, love and mutual respect is all we need! 💖",
        "Let’s invest in education, not outdated traditions. 🎓",
        "Money can’t buy love, but it can buy a nice vacation. 🌴",
        "How about we start a business with all that dowry money instead? 💼",
        "What’s more important: a dowry or a good Wi-Fi connection? 🤔",
        "We can use that dowry money to fund animal shelters. 🐶",
        "The only dowry I need is a lifetime supply of pizza. 🍕",
        "Dowry is a thing of the past, let’s focus on the future! 🚀",
        "Why spend dowry money when we can buy happiness with good memories? 🎉",
        "How about we donate that money to build schools instead? 📚",
        "Let's use that money for a startup idea that helps people! 💡",
        "Let’s throw away the dowry system and embrace equality. ✊",
        "Money doesn’t measure love, it’s just a number. ❤️",
        "What’s better: Dowry or a trip around the world? 🌍",
        "Instead of dowry, let’s start a ‘buy one get one free’ relationship! 😜",
        "No dowry, just mutual respect and a lot of fun! 🎉",
        "You know what’s priceless? A good sense of humor. 😂",
        "Can we just buy a good book with that money? 📚",
        "Dowry is so last century, let’s do better! 👏",
        "Let’s use that dowry money to buy all the cats in the world! 🐱",
        "Instead of dowry, let's invest in self-improvement workshops. 🧑‍💻",
        "Instead of dowry, let’s get matching tattoos. 😆",
        "The best gift? Mutual respect and support. ❤️",
        "How about we buy a lifetime Netflix subscription instead? 🍿",
        "Who needs dowry when you can have peace of mind? 🧘‍♀️",
        "Love > Money, any day. 💖",
        "Dowry is outdated. Let's upgrade to mutual understanding! 🚀",
        "We can use that dowry for a grand, fun vacation! 🏖️",
        "No dowry, just a nice dinner together. 🍽️",
        "Skip the dowry, let’s start a charity together! 💕",
        "That dowry money is better spent on good memories, not on tradition. 📸",
        "How about we start a crowdfunding campaign for kindness instead? 🌍",
        "Love is priceless, but let’s spend money on experiences! 🎢",
        "Let's break the cycle and skip the dowry entirely. ✊",
        "Why not use that dowry to support sustainable living? 🌱",
        "Give me love, not dowry, please! 💕",
        "No dowry is needed, just a solid connection. 💑",
        "Dowry? How about we focus on making the world a better place instead? 🌏",
        "Let’s save that dowry money for a big family reunion! 👫👨‍👩‍👧‍👦",
        "The only dowry I want is a good story to tell. 📖",
        "Why not invest in a better future, not an outdated practice? 🔮",
        "Love, respect, and laughter, that’s the real dowry. 😂",
        "Dowry? Nah. Let’s fund a world of kindness instead. 🌍",
        "You can't buy happiness, but you can donate to causes that make a difference. 🌱",
        "Money's better spent on creating memories, not expectations. 🎉",
        "How about investing in health and wellness, instead of dowry? 🧘‍♂️",
        "Let's use dowry money for tech innovations that change lives. 💡",
        "We don’t need dowry, we need laughter and togetherness! 🤗",
        "Skip the dowry, and let’s make the world a more inclusive place! 🌍",
        "A dowry won’t make you happy, but love will! 💕",
        "No dowry, only support and mutual growth! 🚀",
        "I’d prefer love over money any day. ❤️",
        "No dowry, just a partner who’s amazing in every way! 😍",
        "What if we used that dowry to clean up the oceans? 🌊",
        "The best gift? Building a future together without any conditions. 🏠",
        "No dowry, just two people working towards a common goal. 🎯",
        "Let’s ban dowry and make room for better relationships. 💞",
        "That money could go towards spreading kindness everywhere. 🌍",
        "Let’s spend the dowry on tech education for all! 💻",
        "Why not use that dowry for building libraries around the world? 📚",
        "Dowry should be banned! Let’s focus on equality instead! ✊",
        "A strong relationship doesn’t need dowry, just trust. 🤝",
        "Imagine what we could do with that dowry money for the greater good! 💡",
        "Dowry is a burden, love is the gift. 💖",
        "Instead of dowry, let’s donate to a cause we both care about! 💫",
        "No dowry, just mutual admiration! 👏",
        "How about we just go for a fun adventure instead? 🎢",
        "Let’s skip the dowry and invest in happiness! 😁",
        "Love is priceless, dowry is obsolete. 💖",
        "We don’t need dowry; we just need a good laugh together! 😂",
        "How about we start a ‘No Dowry’ campaign instead? ✊",
        "The only dowry I need is a lifetime of smiles. 😁",
        "How about we use that money for a good cause, like charity? 👐",
        "We can make a bigger impact without dowry. 💥",
        "Dowry? Nah, let’s just build something better together! 🚀",
        "Money comes and goes, but memories last forever. 💭",
        "Invest in love, not dowry! 💖",
        "Let’s make the world a better place instead of wasting money on dowry. 🌍",
        "We can’t put a price on happiness, so no dowry! 🎉",
        "Dowry is overrated, let’s spread love instead! 💕",
        "Love, laughter, and respect: that’s the best gift. 🎁",
        "Let’s make a pact: no dowry, just mutual understanding. 💑",
        "Forget dowry, let’s invest in fun adventures instead! 🎢",
        "Dowry is so yesterday, let's live for today! 🕺",
        "No dowry required for a happy future together! 🎉",
        "The best dowry? A lifetime of love and respect! 💖",
        "Why waste money on dowry when you can spend it on better things? 💡",
        "No dowry, just pure happiness. 💫",
        "Let's make dowry history! 📚",
        "We don’t need money, we need meaningful connections. 🤝",
        "Dowry is not a tradition, it’s an outdated idea. ✊"
    ];
    

    const Total_Amount = bonus + Math.floor(Math.random()*1000000);

    re.textContent = `Total Dahej = Rs. ${Total_Amount}, and ${thoughts[Math.floor(Math.random()*thoughts.length)]}`;

})
