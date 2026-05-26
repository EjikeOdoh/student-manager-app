
const startValue = localStorage.getItem('students')
let records;
if (startValue !== null) {
    records = JSON.parse(startValue)
} else {
    records = []
}

const container = document.querySelector('tbody')

// Loop through the records and create a row for each student 
function updateTableUI() {
    container.innerHTML = ""

    records.forEach((student) => {
        // Create row for each student
        const row = document.createElement('tr')
        // For each key in the object, create a td

        const iDColumn = document.createElement('td')
        iDColumn.textContent = student.id
        row.appendChild(iDColumn)

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

function deleteStudent(id) {
    records = records.filter((student) => {
        return student.id !== id
    })
    localStorage.setItem("students", JSON.stringify(records))
    updateTableUI()
}