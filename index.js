let myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEL = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // store it in local storage


if (leadsfromLocalStorage) {
    myLeads = leadsfromLocalStorage
    render(myLeads)
      
}
const render = (leads) => {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a target = '_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + "</a></li>"

        listItems += `
            <li>
                <a target = '_blank' href='${leads[i]}'> 
                    ${leads[i]}   
                </a>
            </li>
        `
    
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEL.append(li)
    }
    ulEL.innerHTML = listItems

}

deleteBtn.addEventListener("dblclick", () => {

    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) // saveing myLeads to local stroage

    render(myLeads)
    

})

const add = (a, b) => {
    return a + b
}
console.log ( add (3,4))
