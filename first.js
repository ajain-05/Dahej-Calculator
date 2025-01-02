<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Shaadi-O-Meter</title>
    <link rel="stylesheet" href="./style.css">
    <!--Body Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Chewy&family=Dancing+Script:wght@400..700&family=Gloria+Hallelujah&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Oxanium:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik+Vinyl&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <h1>“Dahej Calculator - Where Love Meets Economics!”</h1>
    </header>

    <main>
        <div class="Personal">
            <h2>Personal Details🧑‍💼</h2>
            <div class="PDetails">
                    <label for="age">Age:</label>
                    <input type="number" id="age" class="age" required min="0" placeholder="age">
                    <br>
                    <label for="gender">Gender:</label>
                    <input type="radio" name="gender" id="male" value="Male" checked>
                    <label for="male">Male</label>
                    <br>
                    <label for="education">Education Level 🎓</label>
                    <select name="" id="education" class="select" required>
                        <option value="select" disabled selected>Select</option>
                        <option value="Primary School">Primary School</option>
                        <option value="Middle School">Middle School</option>
                        <option value="High School">High School</option>
                        <option value="Graduate">Graduate</option>
                        <option value="PostGraduate">PostGraduate</option>
                        <option value="Doctorate">Doctorate</option>
                    </select>
                    <br>
                    <label for="profession">Profession</label>
                    <select name="" id="profession" required class="select">
                        <option value="select" disabled selected>Select</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Technology & IT">Technology & IT</option>
                        <option value="Business & Finance">Business & Finance</option>
                        <option value="Creative & Media">Creative & Media</option>
                        <option value="Engineering & Construction">Engineering & Construction</option>
                        <option value="Law & Public Services">Law & Public Services</option>
                        <option value="Journalism and Media">Journalism and Media</option>
                        <option value="Retail & Hospitality">Retail & Hospitality</option>
                        <option value="Science & Research">Science & Research</option>
                        <option value="Transportation & Logistics">Transportation & Logistics</option>
                        <option value="Other">Other</option>
                    </select>
                    <br>
                    <label for="salary">Monthly Salary 💰:</label>
                    <input type="number" id="salary" required min="0" placeholder="INR">
            </div>
        </div>

        <div class="Personal">
            <h2>Personality✨ & Skills🧠</h2>
            <div class="PDetails">
                    <label for="looks">Looks:</label>
                    <br>
                    <input type="range" id="looks"  min="1" max="10" step="1" value="1">
                    <br>
                    <label for="cooking">Cooking Skills</label>
                    <select name="" id="cooking" required class="select">
                        <option value="select" disabled selected>Select</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Master Chef">Master Chef</option>
                    </select>
                    <br>
                    <label for="humour">Humor Level</label>
                    <select name="" id="humour" required class="select">
                        <option value="select" disabled selected>Select</option>
                        <option value="Serious">Serious</option>
                        <option value="Mild">Mild</option>
                        <option value="Funny">Funny</option>
                        <option value="Hilarious">Hilarious</option>
                        <option value="Prankster">Prankster</option>
                    </select>
                    <br>
                    <label for="household">Household Skills:</label>
                    <input type="checkbox" id="Cleaning" class="household" value="Cleaning">
                    <label for="Cleaning">Cleaning</label>
                    <input type="checkbox" id="Gardening" class="household"value="Gardening">
                    <label for="Gardening">Gardening</label>
                    <input type="checkbox" id="Babysitting" class="household" value="Babysitting">
                    <label for="Babysitting">Babysitting</label>
            </div>
        </div>

        <div class="Personal">
            <h2>Family Background👨‍👩‍👧‍👦</h2>
            <div class="PDetails">
                    <label for="wealth">Family Wealth 💰:</label>
                    <input type="number" id="wealth" required min="0" placeholder="INR">
                    <br>
                    <label for="siblings">Number of Siblings</label>
                    <select name="" id="siblings" required class="select">
                        <option value="select" disabled selected>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br>
                    <label for="occupation">Parent’s Occupation</label>
                    <select name="" id="occupation" required class="select">
                        <option value="select" disabled selected>Select</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Technology & IT">Technology & IT</option>
                        <option value="Business & Finance">Business & Finance</option>
                        <option value="Creative & Media">Creative & Media</option>
                        <option value="Engineering & Construction">Engineering & Construction</option>
                        <option value="Law & Public Services">Law & Public Services</option>
                        <option value="Retail & Hospitality">Retail & Hospitality</option>
                        <option value="Science & Research">Science & Research</option>
                        <option value="Transportation & Logistics">Transportation & Logistics</option>
                        <option value="Other">Other</option>
                    </select>
                    <br>
                    <label for="community">Community Influence</label>
                    <select name="" id="community" required class="select">
                        <option value="select" disabled selected>Select</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
            </div>
        </div>

        <div class="Personal">
            <h2>Bonuses🤩 or Penalties😨</h2>
            <div class="PDetails">
                    <input type="checkbox" id="car" value="Owning a luxury car">
                    <label for="car">Owning a luxury car <p>(+ Rs. 2 Lakhs 🤑)</p></label>
                    <input type="checkbox" id="dog" value="Having a dog">
                    <label for="dog">Having a dog <p>(+ Rs. 50K 🤑)</p></label>
                    <input type="checkbox" id="city" value="Living in a big city">
                    <label for="city">Living in a big city <p>(+ Rs. 1 Lakh 🤑)</p></label>
                    <input type="checkbox" id="tattoos" value="Tattoos">
                    <label for="tattoos">Tattoos <p>(- Rs. 1 Lakh 🤦‍♀️)</p></label>
                    <input type="checkbox" id="Love" value="Tattoos">
                    <label for="Love">Marrying for Love💕 <p>(+ Rs. Priceless 😘)</p></label>
            </div>
        </div>

        <div class="Personal">
            <h2>Submit✅</h2>
            <button>Submit</button>
        </div>
        <div class="Personal box1">
            <h2>Result:</h2>
            <div class="PDetails">
                <div class="output">
                    <p id="result"></p>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="footer">
            <p>
                Connect with me: <a href="tel:8825172713">📞Click to Call me!</a>
                <a href="mailto:ajju051020@gmail.com">📧Click to mail me!</a>
                <a href="https://in.linkedin.com/in/ajain-raj-prashar-52a9462a4">↗️LinkedIn</a>
            </p>
            <p>&copy;Developed and managed by Ajain Raj Prashar.</p>
            <p>All Rights Reserved.</p>
    </footer>
    <script src="./first.js"></script>
</body>
</html>
