
let records = [
    { id: 1, name: "Amina Bello", currentClass: "SS1", gender: "Female", age: 14 },
    { id: 2, name: "Chinedu Okafor", currentClass: "SS2", gender: "Male", age: 15 },
    { id: 3, name: "Fatima Musa", currentClass: "SS1", gender: "Female", age: 13 },
    { id: 4, name: "Ibrahim Sadiq", currentClass: "SS3", gender: "Male", age: 16 },
    { id: 5, name: "Blessing Nwoye", currentClass: "SS2", gender: "Female", age: 15 },
    { id: 6, name: "Tunde Adeyemi", currentClass: "SS1", gender: "Male", age: 14 },
    { id: 7, name: "Zainab Abdullahi", currentClass: "SS3", gender: "Female", age: 16 },
    { id: 8, name: "Emeka Obi", currentClass: "SS2", gender: "Male", age: 15 },
    { id: 9, name: "Hauwa Usman", currentClass: "SS1", gender: "Female", age: 13 },
    { id: 10, name: "Sola Ogunleye", currentClass: "SS3", gender: "Male", age: 17 }
]

let fruits = ["Apple", "Banana", "Cashew"]
// let htmlFruits = fruits.map((fruit)=>{
//     return "<p class='fruit'>"+ fruit +"</p>"
// })
// let stringedFruits = htmlFruits.join("")

// console.log(stringedFruits)

const container = document.querySelector("#fruits")
// container.innerHTML = stringedFruits
// const body = document.querySelector('body')
// const para = document.createElement('p')
// para.style.color = "red"
// para.textContent = "Today seems to be difficult o"

// body.appendChild(para)

fruits.forEach((fruit)=>{
    const para = document.createElement('p')
    para.textContent = fruit
    container.appendChild(para)
})