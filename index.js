const readline = require('readline')


function display(board){
    const nLines = board.length
    

    for (let x = 0; x < nLines; x++){
        console.log(board[x].join(''))
    } 
}



async function loop(){
    const isRunning = true
   const readline = require('readline')


function display(board){
    const nLines = board.length
    

    for (let x = 0; x < nLines; x++){
        console.log(board[x].join(''))
    } 
}


display(board)
async function loop(){
    const isRunning = true
    const board = [
        ['*', '*', '*', '*', '*', '*', '*', '*', '*' ],
        ['*', ' ', ' ', ' ', '|', ' ', ' ', ' ', '*' ],
        ['*', ' ', ' ', '|', '|', '|', ' ', ' ', '*' ],
        ['*', ' ', '|', '|', '|', '|', '|', ' ', '*' ],
        ['*', '|', '|', '|', '|', '|', '|', '|', '*' ],
        ['*', '*', '*', '*', '*', '*', '*', '*', '*' ],
    ]
    
    display(board)
    
    while (isRunning) {
        const {Line, matches } = await getInput()

        //retirer des allumettes
        board[Line][matches - 2] = ' '
        board[Line][matches - 3] = ' '
        
        console.log(`Player removed ${matches} match(es) from line 3`)
        
        display(board)

        //au tour de L'IA
        console.log("AI's turn...")

        board[2][2] = ' '
        
        console.log('AI removed 2 match(es) from Line 3')

        display(board)



    }
}

function question(str) {
    return new Promise((resolve) => {

    const rl = readline.createInterface({
        input: process.stdin,
    })

     process.stdout.write(str)
     rl.on('Line', (answer) => {
         resolve(answer)
     })
    })

}

async function getInput(){
    console.log('Your turn:')
    
    const Line = await question('Line: ')
    const nMatches = await question('Matches: ')
    return { Line , Matches }

}

    
    display(board)
    
    while (isRunning) {
        const {Line, matches } = await getInput()

        //retirer des allumettes
        board[Line][matches - 2] = ' '
        board[Line][matches - 3] = ' '
        
        console.log(`Player removed ${matches} match(es) from line 3`)
        
        display(board)

        //au tour de L'IA
        console.log("AI's turn...")

        board[2][2] = ' '
        
        console.log('AI removed 2 match(es) from Line 3')

        display(board)



    }
}

function question(str) {
    return new Promise((resolve) => {

    const rl = readline.createInterface({
        input: process.stdin,
    })

     process.stdout.write(str)
     rl.on('Line', (answer) => {
         resolve(answer)
     })
    })

}

async function getInput(){
    console.log('Your turn:')
    
    const Line = await question('Line: ')
    const nMatches = await question('Matches: ')
    return { Line , Matches }

}

/*const board = [
    ['*', '*', '*', '*', '*', '*', '*', '*', '*' ],
    ['*', ' ', ' ', ' ', '|', ' ', ' ', ' ', '*' ],
    ['*', ' ', ' ', '|', '|', '|', ' ', ' ', '*' ],
    ['*', ' ', '|', '|', '|', '|', '|', ' ', '*' ],
    ['*', '|', '|', '|', '|', '|', '|', '|', '*' ],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*' ],
]*/

/*const nColumns = board[0].length

board[1][4] = ' '
display(board)

board[4][nColumns - 2] = ' '
display(board)*/
