
const startValue = localStorage.getItem('students')
let records;
if (startValue !== null) {
    records = JSON.parse(startValue)
} else {
    records = []
}

// let records = JSON.parse(localStorage.getItem(students)) ?? []

const container = document.querySelector('tbody')

// Updating table using innerhtml
// Convert array into stringed html elements
// let stringedArr = records.map((s) => {
//     return `
//                 <tr>
//                     <td>${s.name}</td>
//                     <td>${s.currentClass}</td>
//                     <td>${s.gender}</td>
//                     <td>${s.age}</td>
//                     <td>
//                         <a href="edit-student.html?"><button type="button">
//                                 <span class="material-symbols-outlined">
//                                     edit
//                                 </span>
//                             </button></a>
//                         <button type="button">
//                             <span class="material-symbols-outlined">
//                                 delete
//                             </span>
//                         </button>
//                     </td>
//                 </tr>
// `
// })
// Convert array of stringed html elements to a single string
// stringedArr = stringedArr.join("")
// Assign this single string as value of innerhtml of container
// container.innerHTML = stringedArr

// Updating using createElement

// Loop through the records and create a row for each student 
function updateTableUI() {
    container.innerHTML = ""

    records.forEach((student) => {
        // Create row for each student
        const row = document.createElement('tr')
        // For each key in the object, create a td
        const nameColumn = document.createElement('td')
        nameColumn.textContent = student.name
        row.appendChild(nameColumn)

        const classColumn = document.createElement('td')
        classColumn.textContent = student.currentClass
        row.appendChild(classColumn)

        const genderColumn = document.createElement('td')
        genderColumn.textContent = student.gender
        row.appendChild(genderColumn)

        const ageColumn = document.createElement('td')
        ageColumn.textContent = student.age
        row.appendChild(ageColumn)

        const actionsColumn = document.createElement('td')
        actionsColumn.innerHTML = `<a href="edit-student.html?id=${student.id}&name=${student.name}">
                            <button type="button">
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                            </button></a>
                        <button type="button" onClick="deleteStudent(${student.id})">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                        `
        row.appendChild(actionsColumn)
        // const editLink = document.createElement('a')
        // editLink.href = `edit-student.html?id=${student.id}&name=${student.name}`

        // const editBtn = document.createElement('button')
        // editBtn.type = 'button'
        // editBtn.textContent = "Edit"

        // const editIcon = document.createElement('span')
        // editBtn.classList.add("material-symbols-outlined")
        // editBtn.textContent = "edit"

        // editBtn.appendChild(editIcon)

        // editLink.appendChild(editBtn)

        // const deleteBtn = document.createElement('button')
        // deleteBtn.type = 'button'

        // actionsColumn.appendChild(editLink)
        // row.appendChild(actionsColumn)
        // actionsColumn.appendChild(deleteBtn)

        // const deleteIcon = document.createElement('span')
        // deleteBtn.classList.add("material-symbols-outlined")
        // deleteBtn.textContent = "delete"

        // deleteBtn.appendChild(deleteIcon)
        // Append row to container
        container.appendChild(row)
    })
}
updateTableUI()
// console.table(records)

//We need to get the student details from the form
//Target form
const form = document.querySelector('form')
// console.dir(form)
//Add event listener to form (submit)
form.addEventListener('submit', (event) => {

    event.preventDefault() // prevent default form submission behavior

    //Get values from input elements inside the form
    const studentNameInput = document.querySelector('#student-name')
    const studentClassInput = document.querySelector('#student-class')
    const studentGenderInput = document.querySelector('#student-gender')
    const studentAgeInput = document.querySelector('#student-age')

    //Create new student object from values inside the form
    const newStudent = {
        id: records.length + 1,
        name: studentNameInput.value,
        currentClass: studentClassInput.value,
        gender: studentGenderInput.value,
        age: parseInt(studentAgeInput.value)
    }

    //Add new student object to array
    records.push(newStudent)
    localStorage.setItem("students", JSON.stringify(records))

    //Use createElements to render the updated array
    updateTableUI()
    console.table(records)

    studentNameInput.value = ""
    studentClassInput.value = ""
    studentGenderInput.value = ""
    studentAgeInput.value = ""
})



function deleteStudent(id) {
    records = records.filter((student) => {
        return student.id !== id
    })
    localStorage.setItem("students", JSON.stringify(records))
    updateTableUI()
}