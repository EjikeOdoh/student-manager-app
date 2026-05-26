 let records = JSON.parse(localStorage.getItem("students")) ?? []

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

    studentNameInput.value = ""
    studentClassInput.value = ""
    studentGenderInput.value = ""
    studentAgeInput.value = ""
})