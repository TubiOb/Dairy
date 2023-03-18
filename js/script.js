const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}



// REMOVE MOBILE MENU
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {

    const navMenu = document.querySelector('#nav-menu');

    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));



// DARK THEME/MODE
let themeButton = document.querySelector('#theme-button');

themeButton.onclick = () => {
    if (themeButton.classList.contains('ri-moon-line')) {
        themeButton.classList.replace('ri-moon-line', 'ri-sun-line');
        document.body.classList.add('active');
    } else {
        themeButton.classList.replace('ri-sun-line', 'ri-moon-line');
        document.body.classList.remove('active');
    }
}



// ACTIVE SCROLL SECTION
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () => {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id'),
//             sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             sectionsClass.classList.add('active-link')
//         } else {
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive);




// SHOW CATEGORIESconst calendar = document.querySelector(".calendar"),
// date = document.querySelector(".date"),
//     daysContainer = document.querySelector(".days"),
//     prev = document.querySelector(".prev"),
//     next = document.querySelector(".next"),
//     todayBtn = document.querySelector(".today-btn"),
//     gotoBtn = document.querySelector(".goto-btn"),
//     dateInput = document.querySelector(".date-input"),
//     eventDay = document.querySelector(".event-day"),
//     eventDate = document.querySelector(".event-date"),
//     eventsContainer = document.querySelector(".events"),
//     addEventBtn = document.querySelector(".add-event"),
//     addEventWrapper = document.querySelector(".add-event-wrapper "),
//     addEventCloseBtn = document.querySelector(".close "),
//     addEventTitle = document.querySelector(".event-name "),
//     addEventDetails = document.querySelector('#myContent'),
//     addEventFrom = document.querySelector(".event-time-from "),
//     addEventTo = document.querySelector(".event-time-to "),
//     addEventSubmit = document.querySelector(".add-event-btn ");

// let today = new Date();
// let activeDay;
// let month = today.getMonth();
// let year = today.getFullYear();

// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];

// // const eventsArr = [
// //   {
// //     day: 13,
// //     month: 11,
// //     year: 2022,
// //     events: [
// //       {
// //         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
// //         time: "10:00 AM",
// //       },
// //       {
// //         title: "Event 2",
// //         time: "11:00 AM",
// //       },
// //     ],
// //   },
// // ];

// const eventsArr = [];
// getEvents();
// console.log(eventsArr);

// //function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
// function initCalendar() {
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const prevLastDay = new Date(year, month, 0);
//     const prevDays = prevLastDay.getDate();
//     const lastDate = lastDay.getDate();
//     const day = firstDay.getDay();
//     const nextDays = 7 - lastDay.getDay() - 1;

//     date.innerHTML = months[month] + " " + year;

//     let days = "";

//     for (let x = day; x > 0; x--) {
//         days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
//     }

//     for (let i = 1; i <= lastDate; i++) {
//         //check if event is present on that day
//         let event = false;
//         eventsArr.forEach((eventObj) => {
//             if (
//                 eventObj.day === i &&
//                 eventObj.month === month + 1 &&
//                 eventObj.year === year
//             ) {
//                 event = true;
//             }
//         });
//         if (
//             i === new Date().getDate() &&
//             year === new Date().getFullYear() &&
//             month === new Date().getMonth()
//         ) {
//             activeDay = i;
//             getActiveDay(i);
//             updateEvents(i);
//             if (event) {
//                 days += `<div class="day today active event">${i}</div>`;
//             } else {
//                 days += `<div class="day today active">${i}</div>`;
//             }
//         } else {
//             if (event) {
//                 days += `<div class="day event">${i}</div>`;
//             } else {
//                 days += `<div class="day ">${i}</div>`;
//             }
//         }
//     }

//     for (let j = 1; j <= nextDays; j++) {
//         days += `<div class="day next-date">${j}</div>`;
//     }
//     daysContainer.innerHTML = days;
//     addListner();
// }

// //function to add month and year on prev and next button
// function prevMonth() {
//     month--;
//     if (month < 0) {
//         month = 11;
//         year--;
//     }
//     initCalendar();
// }

// function nextMonth() {
//     month++;
//     if (month > 11) {
//         month = 0;
//         year++;
//     }
//     initCalendar();
// }

// prev.addEventListener("click", prevMonth);
// next.addEventListener("click", nextMonth);

// initCalendar();

// //function to add active on day
// function addListner() {
//     const days = document.querySelectorAll(".day");
//     days.forEach((day) => {
//         day.addEventListener("click", (e) => {
//             getActiveDay(e.target.innerHTML);
//             updateEvents(Number(e.target.innerHTML));
//             activeDay = Number(e.target.innerHTML);
//             //remove active
//             days.forEach((day) => {
//                 day.classList.remove("active");
//             });
//             //if clicked prev-date or next-date switch to that month
//             if (e.target.classList.contains("prev-date")) {
//                 prevMonth();
//                 //add active to clicked day afte month is change
//                 setTimeout(() => {
//                     //add active where no prev-date or next-date
//                     const days = document.querySelectorAll(".day");
//                     days.forEach((day) => {
//                         if (!day.classList.contains("prev-date") &&
//                             day.innerHTML === e.target.innerHTML
//                         ) {
//                             day.classList.add("active");
//                         }
//                     });
//                 }, 100);
//             } else if (e.target.classList.contains("next-date")) {
//                 nextMonth();
//                 //add active to clicked day afte month is changed
//                 setTimeout(() => {
//                     const days = document.querySelectorAll(".day");
//                     days.forEach((day) => {
//                         if (!day.classList.contains("next-date") &&
//                             day.innerHTML === e.target.innerHTML
//                         ) {
//                             day.classList.add("active");
//                         }
//                     });
//                 }, 100);
//             } else {
//                 e.target.classList.add("active");
//             }
//         });
//     });
// }

// todayBtn.addEventListener("click", () => {
//     today = new Date();
//     month = today.getMonth();
//     year = today.getFullYear();
//     initCalendar();
// });

// dateInput.addEventListener("input", (e) => {
//     dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
//     if (dateInput.value.length === 2) {
//         dateInput.value += "/";
//     }
//     if (dateInput.value.length > 7) {
//         dateInput.value = dateInput.value.slice(0, 7);
//     }
//     if (e.inputType === "deleteContentBackward") {
//         if (dateInput.value.length === 3) {
//             dateInput.value = dateInput.value.slice(0, 2);
//         }
//     }
// });

// gotoBtn.addEventListener("click", gotoDate);

// function gotoDate() {
//     console.log("here");
//     const dateArr = dateInput.value.split("/");
//     if (dateArr.length === 2) {
//         if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
//             month = dateArr[0] - 1;
//             year = dateArr[1];
//             initCalendar();
//             return;
//         }
//     }
//     alert("Invalid Date");
// }

// //function get active day day name and date and update eventday eventdate
// function getActiveDay(date) {
//     const day = new Date(year, month, date);
//     const dayName = day.toString().split(" ")[0];
//     eventDay.innerHTML = dayName;
//     eventDate.innerHTML = date + " " + months[month] + " " + year;
// }

// //function update events when a day is active
// function updateEvents(date) {
//     let events = "";
//     eventsArr.forEach((event) => {
//         if (
//             date === event.day &&
//             month + 1 === event.month &&
//             year === event.year
//         ) {
//             event.events.forEach((event) => {
//                 events += `<div class="event">
//             <div class="title">
//               <i class="fas fa-circle"></i>
//               <h3 class="event-title">${event.title}</h3>
//             </div>
//             <div class="content">
//             <p class="event-content">${event.content}</p>
//             </div>
//             <div class="event-time">
//               <span class="event-time">${event.time}</span>
//             </div>
//         </div>`;
//             });
//         }
//     });
//     if (events === "") {
//         events = `<div class="no-event">
//             <h3>No Events</h3>
//         </div>`;
//     }
//     eventsContainer.innerHTML = events;
//     saveEvents();
// }

// //function to add event
// addEventBtn.addEventListener("click", () => {
//     addEventWrapper.classList.toggle("active");
// });

// addEventCloseBtn.addEventListener("click", () => {
//     addEventWrapper.classList.remove("active");
// });

// document.addEventListener("click", (e) => {
//     if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
//         addEventWrapper.classList.remove("active");
//     }
// });

// //allow 50 chars in eventtitle
// addEventTitle.addEventListener("input", (e) => {
//     addEventTitle.value = addEventTitle.value.slice(0, 60);
// });


// //allow only time in eventtime from and to
// addEventFrom.addEventListener("input", (e) => {
//     addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
//     if (addEventFrom.value.length === 2) {
//         addEventFrom.value += ":";
//     }
//     if (addEventFrom.value.length > 5) {
//         addEventFrom.value = addEventFrom.value.slice(0, 5);
//     }
// });

// addEventTo.addEventListener("input", (e) => {
//     addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
//     if (addEventTo.value.length === 2) {
//         addEventTo.value += ":";
//     }
//     if (addEventTo.value.length > 5) {
//         addEventTo.value = addEventTo.value.slice(0, 5);
//     }
// });

// //function to add event to eventsArr
// addEventSubmit.addEventListener("click", () => {
//     const eventTitle = addEventTitle.value;
//     const eventDetails = addEventDetails.value;
//     const eventTimeFrom = addEventFrom.value;
//     const eventTimeTo = addEventTo.value;
//     if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "" || eventDetails === "") {
//         alert("Please fill all the fields");
//         return;
//     }

//     //check correct time format 24 hour
//     const timeFromArr = eventTimeFrom.split(":");
//     const timeToArr = eventTimeTo.split(":");
//     if (
//         timeFromArr.length !== 2 ||
//         timeToArr.length !== 2 ||
//         timeFromArr[0] > 23 ||
//         timeFromArr[1] > 59 ||
//         timeToArr[0] > 23 ||
//         timeToArr[1] > 59
//     ) {
//         alert("Invalid Time Format");
//         return;
//     }

//     const timeFrom = convertTime(eventTimeFrom);
//     const timeTo = convertTime(eventTimeTo);

//     //check if event is already added
//     let eventExist = false;
//     eventsArr.forEach((event) => {
//         if (
//             event.day === activeDay &&
//             event.month === month + 1 &&
//             event.year === year
//         ) {
//             event.events.forEach((event) => {
//                 if (event.title === eventTitle) {
//                     eventExist = true;
//                 }
//             });
//         }
//     });
//     if (eventExist) {
//         alert("Event already added");
//         return;
//     }
//     const newEvent = {
//         title: eventTitle,
//         time: timeFrom + " - " + timeTo,
//     };
//     console.log(newEvent);
//     console.log(activeDay);
//     let eventAdded = false;
//     if (eventsArr.length > 0) {
//         eventsArr.forEach((item) => {
//             if (
//                 item.day === activeDay &&
//                 item.month === month + 1 &&
//                 item.year === year
//             ) {
//                 item.events.push(newEvent);
//                 eventAdded = true;
//             }
//         });
//     }

//     if (!eventAdded) {
//         eventsArr.push({
//             day: activeDay,
//             month: month + 1,
//             year: year,
//             events: [newEvent],
//         });
//     }

//     console.log(eventsArr);
//     addEventWrapper.classList.remove("active");
//     addEventTitle.value = "";
//     addEventDetails.value = "";
//     addEventFrom.value = "";
//     addEventTo.value = "";
//     updateEvents(activeDay);
//     //select active day and add event class if not added
//     const activeDayEl = document.querySelector(".day.active");
//     if (!activeDayEl.classList.contains("event")) {
//         activeDayEl.classList.add("event");
//     }
// });

// //function to delete event when clicked on event
// eventsContainer.addEventListener("click", (e) => {
//     if (e.target.classList.contains("event")) {
//         if (confirm("Are you sure you want to delete this event?")) {
//             const eventTitle = e.target.children[0].children[1].innerHTML;
//             eventsArr.forEach((event) => {
//                 if (
//                     event.day === activeDay &&
//                     event.month === month + 1 &&
//                     event.year === year
//                 ) {
//                     event.events.forEach((item, index) => {
//                         if (item.title === eventTitle) {
//                             event.events.splice(index, 1);
//                         }
//                     });
//                     //if no events left in a day then remove that day from eventsArr
//                     if (event.events.length === 0) {
//                         eventsArr.splice(eventsArr.indexOf(event), 1);
//                         //remove event class from day
//                         const activeDayEl = document.querySelector(".day.active");
//                         if (activeDayEl.classList.contains("event")) {
//                             activeDayEl.classList.remove("event");
//                         }
//                     }
//                 }
//             });
//             updateEvents(activeDay);
//         }
//     }
// });

// //function to save events in local storage
// function saveEvents() {
//     localStorage.setItem("events", JSON.stringify(eventsArr));
// }

// //function to get events from local storage
// function getEvents() {
//     //check if events are already saved in local storage then return event else nothing
//     if (localStorage.getItem("events") === null) {
//         return;
//     }
//     eventsArr.push(...JSON.parse(localStorage.getItem("events")));
// }

// function convertTime(time) {
//     //convert time to 24 hour format
//     let timeArr = time.split(":");
//     let timeHour = timeArr[0];
//     let timeMin = timeArr[1];
//     let timeFormat = timeHour >= 12 ? "PM" : "AM";
//     timeHour = timeHour % 12 || 12;
//     time = timeHour + ":" + timeMin + " " + timeFormat;
//     return time;
// }




// FUNCTIONALITES OF THE NAVBAR/SIDEBAR UL ELEMENTS
const Folders = document.querySelectorAll('.folders')
const category = document.querySelector('#Category');
const folderCategories = document.querySelector('.categories');
const diaryCategory = document.querySelector('.diaryCategory');
const archive = document.querySelector('#Archive');
const homePage = document.querySelector('#Home');
const bin = document.querySelector('#Trash');
const notif = document.querySelector('#Notification');
const addNote = document.querySelector('.addNotebtn');
const selectFolder = document.querySelector('.myCategories');
const noteTitle = document.querySelector('.feelings');
const noteContent = document.querySelector('.myThoughts');
const saveToCategory = document.querySelectorAll('.saveCategory');
const home = document.querySelector('.home');
const diary = document.querySelector('.diary');


// OPENING OF THE CATEGORY LIST
if (category) {
    category.addEventListener('click', (event) => {
        console.log("reaching")
        event.stopPropagation();
        // folderCategories.classList.add('show-category');
        folderCategories.style.display = 'grid';
        // folderCategories.classList.toggle('visible');
    });

    document.addEventListener('click', (event) => {
        if (!folderCategories.contains(event.target)) {
            folderCategories.classList.remove('show-category');
            folderCategories.style.display = 'none';
        }
    });
}


// if (Folders) {
//     Folders.forEach((item) => {
//         item.addEventListener('click', () => {
//             folderCategories.classList.remove('show-FolderSelect');
//             // const showNotes = document.createElement('ul');
//         });
//     });
// }






// ADDING NOTE BUTTON
if (addNote) {
    addNote.addEventListener('click', (event) => {
        console.log("reaching")
        event.stopPropagation();
        if (noteTitle.value === '' || noteContent.value === '') {
            alert('Fields should be filled');
            return;
        }
        // selectFolder.classList.add('show-FolderSelect');
        selectFolder.style.display = 'flex';
        selectFolder.classList.toggle('visible');
    });

    document.addEventListener('click', (event) => {
        if (!selectFolder.contains(event.target)) {
            selectFolder.style.display = 'none';
            // selectFolder.classList.remove('show-FolderSelect');
        }
    });
}

if (saveToCategory) {
    saveToCategory.forEach((item) => {
        item.addEventListener('click', () => {
            selectFolder.style.display = 'none';
            // selectFolder.classList.remove('show-FolderSelect');
            // const showNotes = document.createElement('ul');
        });
    });
}


// SAVING TO FOLDERS

saveToCategory.forEach(saveCategory => {
    const categoryText = saveCategory.querySelector('span:nth-child(2)').textContent;
    const newUl = document.createElement('ul');
    newUl.classList.add(`${categoryText.toLowerCase()}-ul`);
    newUl.style.display = 'none';
    home.appendChild(newUl);


    homePage.addEventListener('click', () => {
        // remove any ul elements from the home section
        const ulElements = home.querySelectorAll(`.${categoryText.toLowerCase()}-ul`);
        ulElements.forEach(ul => ul.remove());

        // show diary section
        diary.style.display = 'flex';
    });


});




// toggle display of ul when category element is clicked
folderCategories.addEventListener('click', e => {
    if (e.target.classList.contains('folders') || e.target.classList.contains('folderName')) {
        const categoryText = e.target.querySelector('span:nth-child(2)').textContent.toLowerCase();
        const ulElement = home.querySelector(`.${categoryText}-ul`);
        if (ulElement) {
            ulElement.style.display = 'grid';
            diary.style.display = 'none';
        }
    }
});

// add note to corresponding ul when saveCategory button is clicked
saveToCategory.forEach(saveCategory => {
    saveCategory.addEventListener('click', () => {
        selectFolder.classList.remove('show-FolderSelect');
        const categoryText = saveCategory.querySelector('span:nth-child(2)').textContent;
        const ulElement = home.querySelector(`.${categoryText.toLowerCase()}-ul`);
        const newLi = document.createElement('li');
        const date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dateText = `${monthNames[date.getMonth()]} ${date.getDate()}`;
        const dateElement = document.createElement('span');
        dateElement.textContent = dateText;
        newLi.appendChild(dateElement);
        const titleElement = document.createElement('h2');
        titleElement.textContent = noteTitle.value;
        newLi.appendChild(titleElement);
        const contentElement = document.createElement('p');
        contentElement.textContent = noteContent.value;
        newLi.appendChild(contentElement);


        const iconElement = document.createElement('div');
        newLi.appendChild(iconElement);
        // Create archive icon
        const archiveIcon = document.createElement('i');
        archiveIcon.classList.add('ri-archive-line');
        archiveIcon.style.display = 'none';
        archiveIcon.addEventListener('click', () => {
            newLi.remove();
            const archivedLi = newLi.cloneNode(true);
            archivedLi.querySelector('i').remove();
            archiveList.appendChild(archivedLi);
            alert("Archived!");
        });
        iconElement.appendChild(archiveIcon);
        // newLi.appendChild(archiveIcon);

        // Create delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('ri-delete-bin-line');
        deleteIcon.style.display = 'none';
        deleteIcon.addEventListener('click', () => {
            newLi.remove();
            const deletedLi = newLi.cloneNode(true);
            deletedLi.querySelector('i').remove();
            binList.appendChild(deletedLi);
            alert("Deleted!");
        });
        iconElement.appendChild(deleteIcon);
        // newLi.appendChild(deleteIcon);


        // Show/hide icons on hover
        newLi.addEventListener('mouseenter', () => {
            // archiveIcon.style.display = 'block';
            // deleteIcon.style.display = 'block';
            iconElement.style.display = 'flex';
        });
        newLi.addEventListener('mouseleave', () => {
            // archiveIcon.style.display = 'none';
            // deleteIcon.style.display = 'none';
            iconElement.style.display = 'none'
        });



        ulElement.appendChild(newLi);
        noteTitle.value = "";
        noteContent.value = "";
        alert("Saved!");
    });
});





// RETURN/SHOW UL ELEMENT FOR EACH FOLDER CATEGORY
// Add event listener to each folder element
Folders.forEach(folder => {
    folder.addEventListener('click', () => {
        const categoryText = folder.querySelector('span:nth-child(2)').textContent;
        const ulElement = document.querySelector(`.${categoryText.toLowerCase()}-ul`);
        // hide diary section
        // selectFolder.classList.remove('show-FolderSelect');
        folderCategories.style.display = 'none';
        // alert('SCREEAAAAMMMMMM');
        // alert(categoryText)
        // alert(ulElement)
        diary.style.display = 'none';

        ulElement.style.display = 'grid';
    });
});


// CREATING THE ARCHIVE AND DELETE DIVS/UL
const archiveList = document.createElement('ul');
archiveList.classList.add('archive-list');
// archive.appendChild(archiveList);
home.appendChild(archiveList);
archiveList.style.display = 'none';


//  Create delete div/ul
const binList = document.createElement('ul');
binList.classList.add('bin-list');
// bin.appendChild(binList);
home.appendChild(binList);
binList.style.display = 'none';


// ADDING FUNCTIONALITY TO BIN AND ARCHIVE
archive.addEventListener('click', () => {
    alert('SCREEAAAAMMMMMM');
    diary.style.display = 'none';
    // ulElement.style.display = 'none';
    archiveList.style.display = 'grid';
});

bin.addEventListener('click', () => {
    alert('ABBBEEEEEEGGGGGG');
    diary.style.display = 'none';
    // ulElement.style.display = 'none';
    binList.style.display = 'grid';
});



// SIGNUP/SIGNIN
const SignUp = document.querySelector("#sign");
const SignIn = document.querySelector("#enter");
const LoginUsername = document.querySelector("#myname");
const SignupUsername = document.querySelector("#username");
const FirstName = document.querySelector("#firstname");
const LastName = document.querySelector("#lastname");
const Email = document.querySelector("#mymail");
const SignUpPass = document.querySelector("#mypassword");
const SignInPass = document.querySelector("#mypassword1");

const signUpButton = document.querySelector('#signUpButton');
const signInButton = document.querySelector('#signInButton');
const Home = document.querySelector('#Home');

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const nameRegex = /^[a-zA-Z]+$/;
// const usernameRegex = /^[a-zA-Z][\w-]{2,19}$/;
const Passwrdformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// let UserData;


SignUp.addEventListener('click', () => {
    console.log("SHUTUPPPPPP")
    if (FirstName.value.length > 0 && LastName.value.length > 0 && Email.value.length > 0 && SignupUsername.value.length > 0) {
        if (SignUpPass.value.length >= 8) {
            if (FirstName.value.match(nameRegex) || LastName.value.match(nameRegex) || Email.value.match(mailformat) || SignupUsername.value.match(nameRegex) || SignUpPass.value.match(Passwrdformat)) {
                // UserData = {
                //     FirstName: FirstName.value,
                //     LastName: LastName.value,
                //     Username: SignupUsername.value,
                //     Mail: Email.value,
                //     Password: SignUpPass.value,
                // };
                // let details = [];
                // details.push(UserData);
                // localStorage.setItem(`details_${SignupUsername.value}`, JSON.stringify(details));
                alert("Hello, " + SignupUsername.value + "!");
                FirstName.value = "";
                LastName.value = "";
                SignupUsername.value = "";
                Email.value = "";
                SignUpPass.value = "";
                Home.classList.remove("right-panel-active");
                // console.log(details);
                // StoredDetails = details;
            } else {
                alert("Invalid Inputs");
            }
        } else {
            alert("Password must have at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character")
        }

    } else {
        alert("Fields cannot be empty");
    }
})




SignIn.addEventListener('click', () => {
    console.log("SCREEEEAAAAMMMMMM")
    if (LoginUsername.value.length > 0 && SignInPass.value.length > 0) {
        console.log(LoginUsername.value);
        console.log(SignInPass.value);
        if (LoginUsername.value.match(nameRegex) || SignInPass.value.match(Passwrdformat)) {
            alert("Welcome back, " + LoginUsername.value + "!");
            var url = './diary.html';
            window.open(url, '_self');
            return;
        } else {
            alert("Invalid Username or Password");
            LoginUsername.value = "";
            SignInPass.value = "";
            Home.classList.add("right-panel-active");
        }
    } else {
        alert("Fields cannot be empty");
    }
});





signUpButton.addEventListener('click', () => {
    console.log("SIGN UP");
    Home.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    console.log("SIGN OUT");
    Home.classList.remove("right-panel-active");
});