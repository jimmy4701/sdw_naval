console.log("Bonjour !")

const grid = [0,0,0,0,1,0,0,1,0]

let grid_html = document.getElementById('grid')

let winner = false
let ship_count = grid.filter(element => element == 1).length
let click_count = 0

grid.forEach((element, index) => {
    let new_case = document.createElement("div")
    new_case.setAttribute('id', index)
    
    new_case.setAttribute('class', "case")
    new_case.addEventListener('click', (e) => {
        if(element){
            new_case.setAttribute("class", 'case red')
            click_count++
            if(click_count == ship_count){
                alert("WINNER ! C'EST GAGNE")
            }
        }else{
            new_case.setAttribute("class", 'case blue')
        }
    })

    grid_html.appendChild(new_case)
})

