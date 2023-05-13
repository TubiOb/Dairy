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
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);

        // Click event listener on document
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.link').length) {
                links.parent().removeClass('open');
            }
        });
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
    var accordion1 = new Accordion($('#accordion1'), false);
});





// FUNCTIONALITES OF THE NAVBAR/SIDEBAR UL ELEMENTS
const Folders = document.querySelectorAll('.folders')
    // const category = document.querySelector('#Category');
const folderCategories = document.querySelector('.categories');
const diaryCategory = document.querySelector('.diaryCategory');
const archive = document.querySelector('#Archive');
const homePage = document.querySelector('#Home');
const bin = document.querySelector('#delete');
const notif = document.querySelector('#Notification');
const addNote = document.querySelector('.addNotebtn');
const selectFolder = document.querySelector('.myCategories');
const noteTitle = document.querySelector('.feelings');
const noteContent = document.querySelector('.myThoughts');
const saveToCategory = document.querySelectorAll('.saveCategory');
const home = document.querySelector('.home');
const diary = document.querySelector('.diary');
const noteTab = document.querySelector('.notesTab');
var selectElement = document.getElementById("my-select");
var selectedOption = selectElement.options[selectElement.selectedIndex];
const filterSelect = document.querySelector('.filter');
const notecardsArray = [];






// ADDING NOTE BUTTON
if (addNote) {
    addNote.addEventListener('click', (event) => {
        console.log("reaching")
        event.stopPropagation();
        if (noteTitle.value === '' || noteContent.value === '') {
            alert('Fields should be filled');
            return;
        }
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        if (selectedOption === selectElement.options[0]) {
            alert('Please select folder to be saved to');
            return;
        }
        const category = selectedOption.value.toLowerCase() + 'Category';
        const submenu = document.querySelector(`#${category} .submenu`);

        // create a new list item element for the note
        const newNote = document.createElement('li');
        newNote.classList.add('note');
        newNote.innerHTML = `<div class="note">
        <div class="note-header">
          <h4>${noteTitle.value}</h4>
          <div class="noteActivity">
            <span class="deleteNote"><i class="ri-delete-bin-line delete"></i></span>
            <span class="archiveNote"><i class="ri-inbox-archive-line archive"></i></span>
          </div>
        </div>
        <p>${noteContent.value}</p>
      </div>`;


        // create a new list item element for the note
        const noteCard = document.createElement('div');
        noteCard.classList.add('note');
        noteCard.setAttribute('data-category', selectedOption.value.toLowerCase());
        noteCard.innerHTML = `<div class="noteCard">
        <div class="noteCard-header">
          <h4>${noteTitle.value}</h4>
        </div>
        <p>${noteContent.value}</p>
      </div>`;

        notecardsArray.push(noteCard);

        //  <span class="deleteNote"><i class="ri-delete-bin-line"></i></span>


        // DELETE THE FOLDERS/NOTES
        const binIcon = newNote.querySelector('.delete');
        binIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            // Remove newNote from the submenu
            submenu.removeChild(newNote);
            // Remove noteCard from the noteTab
            noteTab.removeChild(noteCard);
        });



        // append the new note to the corresponding category's submenu
        submenu.appendChild(newNote);
        noteTab.appendChild(noteCard);

        // clear the input fields
        noteTitle.value = '';
        noteContent.value = '';
        selectedOption === selectElement.options[0];
        // alert('Selected option: ' + selectedOption.value);
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






// FILTER FUNCTION
filterSelect.addEventListener('change', (event) => {
    const selectedCategory = event.target.value.toLowerCase();

    // Filter noteCards by category
    const filteredNoteCards = notecardsArray.filter(noteCard => {
        const noteCardCategory = noteCard.getAttribute('data-category');
        return noteCardCategory === selectedCategory || selectedCategory === 'all';
    });

    // Show/hide noteCards based on the filter result
    notecardsArray.forEach(noteCard => {
        if (filteredNoteCards.includes(noteCard)) {
            noteCard.style.display = 'block'; // Show the noteCard
        } else {
            noteCard.style.display = 'none'; // Hide the noteCard
        }
    });
});






// // RETURN/SHOW UL ELEMENT FOR EACH FOLDER CATEGORY
// // Add event listener to each folder element
// Folders.forEach(folder => {
//     folder.addEventListener('click', () => {
//         const categoryText = folder.querySelector('span:nth-child(2)').textContent;
//         const ulElement = document.querySelector(`.${categoryText.toLowerCase()}-ul`);
//         // hide diary section
//         folderCategories.style.display = 'none';
//         // alert('SCREEAAAAMMMMMM');
//         // alert(categoryText)
//         // alert(ulElement)
//         diary.style.display = 'none';

//         ulElement.style.display = 'grid';
//     });
// });


// // CREATING THE ARCHIVE AND DELETE DIVS/UL
// const archiveList = document.createElement('ul');
// archiveList.classList.add('archive-list');
// // archive.appendChild(archiveList);
// home.appendChild(archiveList);
// archiveList.style.display = 'none';


// //  Create delete div/ul
// const binList = document.createElement('ul');
// binList.classList.add('bin-list');
// // bin.appendChild(binList);
// home.appendChild(binList);
// binList.style.display = 'none';


// // ADDING FUNCTIONALITY TO BIN AND ARCHIVE
// archive.addEventListener('click', () => {
//     alert('SCREEAAAAMMMMMM');
//     diary.style.display = 'none';
//     // ulElement.style.display = 'none';
//     archiveList.style.display = 'grid';
// });

// bin.addEventListener('click', () => {
//     alert('ABBBEEEEEEGGGGGG');
//     diary.style.display = 'none';
//     // ulElement.style.display = 'none';
//     binList.style.display = 'grid';
// });