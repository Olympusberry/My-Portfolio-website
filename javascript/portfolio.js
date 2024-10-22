let themeBox = document.getElementById("themeBox");
const header = document.getElementById("header");
const heroImg = document.getElementsByClassName("heroImg");
const hoverDateSection = document.getElementById("hoverDateSection");
const navbar = document.querySelectorAll(".navbar");
const leftHeader = document.querySelector(".leftheader");
const nameOne = document.getElementById("name-one");
const nameTwo = document.getElementById("name-two");
const socialSVG = document.querySelectorAll("a svg");


//Theme Section
const themeBoxLogo = document.getElementById("themeBoxLogo");
const themeBoxText = document.getElementById("themeBoxText");

themeBoxLogo.addEventListener("mouseover", () => {
    themeBoxText.style.opacity = "1"; // Gradually makes the text visible
});

themeBoxLogo.addEventListener("mouseout", () => {
    themeBoxText.style.opacity = "0"; // Gradually hides the text
});


function applyTheme(isLightTheme) {
    document.body.style.backgroundColor = isLightTheme ? "#e6e6e6" : "#000000d5";
    document.body.style.color = isLightTheme ? "#000000d5" : "#e6e6e6";
    document.querySelector('.bar1').style.backgroundColor = isLightTheme ? "black" : "#e6e6e6";
    document.querySelector('.bar2').style.backgroundColor = isLightTheme ? "black" : "#e6e6e6";
    document.querySelector('.bar3').style.backgroundColor = isLightTheme ? "black" : "#e6e6e6";
    header.style.backgroundColor = isLightTheme ? "aqua" : "#292929e8";
    nameOne.style.color = isLightTheme ? "black" : "aqua";
    nameTwo.style.color = isLightTheme ? "black" : "#e6e6e6";
    careers.style.color = isLightTheme ? "black" : "aqua";

    navbar.forEach(element => {
        element.style.color = isLightTheme ? "black" : "#e6e6e6";
    });

    leftHeader.style.backgroundColor = isLightTheme ? "aqua" : "";
    hoverDateSection.style.backgroundColor = isLightTheme ? "#ffffff00" : "#161616a1";
}

// Save the theme selection in localStorage
themeBox.onchange = function () {
    const isLightTheme = themeBox.checked;
    localStorage.setItem("theme", isLightTheme ? "light" : "dark"); // Store the theme preference
    applyTheme(isLightTheme);
};

// On page load, check for stored theme and apply it
window.onload = function () {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        themeBox.checked = (storedTheme === "light"); // Set the checkbox state
        applyTheme(storedTheme === "light"); // Apply the saved theme
    }
};



const hmbgerCheckbox = document.getElementById("hmbgerCheckbox");
const subBody = document.getElementById("subBody");

// Function to toggle the sidebar based on checkbox state and screen width
function toggleSidebar() {
    const isSmallScreen = window.innerWidth <= 720;
    if (hmbgerCheckbox.checked && isSmallScreen) {
        leftHeader.classList.add("show");
        leftHeader.classList.remove("hide");
        subBody.style.opacity = .4; // Dim subBody when sidebar is visible
    } else {
        leftHeader.classList.add("hide");
        leftHeader.classList.remove("show");
        subBody.style.opacity = 1; // Reset opacity when sidebar is hidden
    }
}

// Handle checkbox change to toggle the sidebar
hmbgerCheckbox.onchange = toggleSidebar;

// Reset sidebar and uncheck checkbox when screen width exceeds 720px
window.addEventListener("resize", function () {
    if (window.innerWidth > 720) {
        hmbgerCheckbox.checked = false; // Uncheck to close sidebar
        toggleSidebar(); // Ensure sidebar is hidden
    }
});

// Close sidebar when clicking outside if screen width is <= 720px
subBody.addEventListener("click", function () {
    if (window.innerWidth <= 720 && leftHeader.classList.contains("show")) {
        hmbgerCheckbox.checked = false; // Uncheck to close sidebar
        toggleSidebar(); // Hide sidebar and reset opacity
    }
});



//SECTION OF CODE FOR CAREER
//array of careeers
const myCareers = ["a web developer", "a youtuber", "a video editor", "a content creator", "an AI prompt engineer", "a digital marketer"];
const careers = document.getElementById("career");

let currentCareerIndex = 0;
let currentLetterIndex = 0;
let isErasing = false;


//Function to type the career
function typeCareer() {
    const career = myCareers[currentCareerIndex];

    if (!isErasing && currentLetterIndex < career.length) {
        // Typing
        careers.textContent += career.charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(typeCareer, 100); // Adjust typing speed here
    } else if (isErasing && currentLetterIndex > 0) {
        // Erasing
        careers.textContent = career.substring(0, currentLetterIndex - 1);
        currentLetterIndex--;
        setTimeout(typeCareer, 100); // Adjust erasing speed here
    } else {
        // Switch between typing and erasing
        isErasing = !isErasing;
        if (!isErasing) {
            currentCareerIndex = (currentCareerIndex + 1) % myCareers.length; // Move to next career
            currentLetterIndex = 0;
        }
        setTimeout(typeCareer, 1000); // Adjust delay before typing/erasing starts again
    }
}

// Clear text content before starting the typing effect
careers.textContent = "";

// Start the typing effect
typeCareer();

  

console.log(...myCareers/* .join(",") */);

//fullname Section
const fullnameId = document.getElementById("fullnameId");

function combineNames(...strings) {
    return strings.join(" ");
}

const fullname = combineNames("Ekanem", "Pius", "Ekanem");

fullnameId.textContent = fullname;



//TIME SECTION

function updateTime() {
    let now = new Date();

    // Get the day of the week
    let dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
    document.getElementById('weekdayId').textContent = `It's ${dayOfWeek}`;

    // Get the time from the now object
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let hour = now.getHours();

    // Convert hour to 12-hour format and determine AM/PM
    const ampm = hour >= 12 ? 'PM' : 'AM'; // determine AM or PM
    hour = hour % 12; // convert to 12-hour format
    hour = hour ? hour : 12; // if hour is 0, make it 12

    // Pad the minutes, seconds and hours with a leading zero if they are less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hour = hour < 10 ? '0' + hour : hour;

    document.getElementById('timeHr').textContent = hour;
    document.getElementById('timeMin').textContent = minutes;
    document.getElementById('timeSec').textContent = seconds + " " + ampm;

    // Get the date from the now object
    let date = now.getDate();
    let month = now.getMonth() + 1; // Month is zero-based, so we add 1
    let year = now.getFullYear();

    
    
    
    // Optional: Display a more human-readable date format in hoverDateSection
    let dateSuffix = getDateSuffix(date); // Function to get suffix for the day, e.g., "st", "nd", "rd", "th"
    let hoverMonth = now.toLocaleString('default', { month: 'long' });
    
    document.getElementById('hoverDate').textContent = date;
    document.getElementById('dateSuffix').textContent = dateSuffix;
    document.getElementById('hoverMonth').textContent = hoverMonth;
    document.getElementById('hoverYear').textContent = year;
    
    //Pad date and month with 0 if less than 10
    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + month : month;

    
    document.getElementById('dateDay').textContent = date;
    document.getElementById('dateMonth').textContent = month;
    document.getElementById('dateYear').textContent = year;


    // Update the time again after 1 second
    setTimeout(updateTime, 1000);
}

// Function to determine the suffix for the date
function getDateSuffix(date) {
    if (date > 3 && date < 21) return 'th'; // Handles 11th, 12th, 13th
    switch (date % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Initial call to start the time updates
updateTime();

//Download CV Section
document.getElementById('downloadCVBtn').addEventListener('click', function () {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the file URL (replace 'file.pdf' with the actual file path)
    link.href = 'docs/Ekanem_Ekanem_Resume_2024.pdf';
    link.target = "_blank";
    // Set the download attribute with a filename
    link.download = 'Ekanem_Ekanem_Resume_2024.pdf';
    // Trigger the download
    link.click();
});


//Contact Section


function getMailDetails() {
    //Object to store mail sent by a visitor
    const mailDetails = {
        fullname: document.getElementById("MSName").value,
        emailAddress: document.getElementById("MSEmailAddress").value,
        phoneNum: document.getElementById("MSPhoneNum").value,
        mailText: document.getElementById("MSText").value,
    };

    console.log(mailDetails.fullname);
    console.log(mailDetails.emailAddress);
    console.log(mailDetails.phoneNum);
    console.log(mailDetails.mailText);

    //window.alert("Mail sent. Thank you");
    
    return mailDetails;
}




async function getJokes() {
    const response = await fetch(`https://official-joke-api.appspot.com/random_joke`);

    try {
        if (!response.ok) {
            throw new Error("Error: Could not fetch data");
        }
        const jokeObject = await response.json();
        const jokeSetup = document.getElementById("jokeSetup");
        const jokePunchline = document.getElementById("jokePunchline");
       
         
        jokeSetup.textContent = jokeObject.setup;
        jokePunchline.textContent = jokeObject.punchline;
    }
    catch (error) { console.error(error) };
}
