
const startValue = localStorage.getItem('students')
let records;
if (startValue !== null) {
    records = JSON.parse(startValue)
} else {
    records = []
}

const notice = document.querySelector('#notice')
const table = document.querySelector('table')
const container = document.querySelector('tbody')


// Loop through the records and create a row for each student 
function updateTableUI(arr) {
    container.innerHTML = ""

    arr.forEach((student) => {
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
        container.appendChild(row)
    })
}

updateTableUI(records)

// Delete student functionality
function deleteStudent(id) {
    records = records.filter((student) => {
        return student.id !== id
    })
    localStorage.setItem("students", JSON.stringify(records))
    updateTableUI()
}

// Search Matching students

const searchInput = document.querySelector('#student-search')


searchInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        const query = event.target.value
        const matchingStudents = records.filter((x) => {
            return x.name.includes(query)
        })

        if (matchingStudents.length === 0) {
            table.classList.add('hidden')
            notice.classList.remove('hidden')
            const nameContainer = document.querySelector('#query')
            nameContainer.textContent = query
        } else {
            table.classList.remove('hidden')
            notice.classList.add('hidden')
            updateTableUI(matchingStudents)
        }
    }
})
