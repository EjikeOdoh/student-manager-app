
let records = [
    { id: 1, name: "Amina Bello", currentClass: "SS1", gender: "Female", age: 14 },
    { id: 2, name: "Chinedu Okafor", currentClass: "SS2", gender: "Male", age: 15 },
    { id: 3, name: "Fatima Musa", currentClass: "SS1", gender: "Female", age: 13 },
    { id: 4, name: "Ibrahim Sadiq", currentClass: "SS3", gender: "Male", age: 16 }
]


const container = document.querySelector("tbody")

// Updating table using innerhtml
// Convert array into stringed html elements
let stringedArr = records.map((s) => {
    return `
                <tr>
                    <td>${s.name}</td>
                    <td>${s.currentClass}</td>
                    <td>${s.gender}</td>
                    <td>${s.age}</td>
                    <td>
                        <a href="edit-student.html?"><button type="button">
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                            </button></a>
                        <button type="button">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </td>
                </tr>
`
})
// Convert array of stringed html elements to a single string
stringedArr = stringedArr.join("")
// Assign this single string as value of innerhtml of container
container.innerHTML = stringedArr

// Updating using createElement

function updateTable() {
    // Clear the table before updating
    container.innerHTML = ""
    // Loop through the records and create a row for each student 
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
        actionsColumn.innerHTML = `         <a href="edit-student.html?name=John%20Doe&class=10A&gender=Male&age=15">
                            <button type="button">
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                            </button></a>
                        <button type="button">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>`
        row.appendChild(actionsColumn)


        // Append row to container
        container.appendChild(row)
    })
}

updateTable()

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#student-name')
    const age = document.querySelector('#student-age')
    const gender = document.querySelector('#student-gender')
    const currentClass = document.querySelector('#student-class')

    const newStudent = {
        id: records.length + 1,
        name: name.value,
        age: age.value,
        gender: gender.value,
        currentClass: currentClass.value
    }
    records.push(newStudent)
    updateTable()
})