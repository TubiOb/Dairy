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



// MENU TOGGLE FUNCTION
// $(function() {
//     var Accordion = function(el, multiple) {
//         this.el = el || {};
//         this.multiple = multiple || false;

//         // Variables privadas
//         var links = this.el.find('.link');
//         // Evento
//         links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
//     }

//     Accordion.prototype.dropdown = function(e) {
//         var $el = e.data.el;
//         $this = $(this),
//             $next = $this.next();

//         $next.slideToggle();
//         $this.parent().toggleClass('open');

//         if (!e.data.multiple) {
//             $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//         };
//     }

//     var accordion = new Accordion($('#accordion'), false);
//     var accordion1 = new Accordion($('#accordion1'), false);
// });





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