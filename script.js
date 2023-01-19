//LESSSON TO BE LEARNED!!!
/*
WHEN DOING FOR LOOP MATRIX

IT'S 
FOR(Y)
FOR(X)

MATRIX[Y][X]
*/

let board = document.getElementById("board")
for(let i=0;i<4;i++)
{
    for(let j=0;j<4;j++)
    {
        let box = document.createElement("div")
        box.id = i.toString() + j.toString()
        board.appendChild(box)
    }
}

function colorSwitch(x)
{
switch(x)
{
    case 0: 
    return "#afa192"

    case 2:
    return "#eee4da"

    case 4:
    return "#ede0c8"

    case 8: 
    return "#f2b179"

    case 16 :
    return "#f59563"

    case 32:
    return "#f67c60"

    case 64:
    return "#f65e3b"

    case 128: 
    return "#edcf73"

    case 256:
    return "#edcc62"

    case 512:
    return "#edc850"

    case 1024:
    return "#edc53f"

    case 2048:
    return "#edc22d"

    default:
    return "#00008B"
}
}


let matrix = 
[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

let generables = [2,4]

function updateBoard()
{
 

for(let i=0;i<4;i++) //y
{
    for(let j=0;j<4;j++)
    {
        let box = document.getElementById(i.toString() + j.toString())
        box.innerText = matrix[i][j].toString()
        box.style.backgroundColor = colorSwitch(matrix[i][j])
        if(matrix[i][j] == 0)
        {
            box.innerText = ""
        }
    }
}
}
function generateTiles()
{
    let randomX = Math.round(Math.random() * 3)
    let randomY = Math.round(Math.random() * 3)
    if(matrix[randomY][randomX] != 0)
    {
        generateTiles()
    }
    else{
        matrix[randomY][randomX] = generables[Math.round(Math.random())]
    }
}

function moveUp()
{

}

function moveRight()
{
   let arr = [
    [],
    [],
    [],
    []
   ]

    for(y=0;y<4;y++)
    {
        for(x=0;x<4;x++)
        {
            if(matrix[y][x] != 0)
            {
                arr[y].push(matrix[y][x])
            }
            
              
        }
        let rowLength = 4 - arr[y].length
        for(let i=0;i<rowLength;++i)
        {
            arr[y].unshift(0)
        }
    }
    //console.log(arr)
    matrix = arr
    generateTiles()
}
function moveDown()
{

}

function moveLeft()
{
    let arr = [
        [],
        [],
        [],
        []
       ]
    
        for(y=0;y<4;y++)
        {
            for(x=0;x<4;x++)
            {
                if(matrix[y][x] != 0)
                {
                    arr[y].push(matrix[y][x])
                }
                
                  
            }
            let rowLength = 4 - arr[y].length
            for(let i=0;i<rowLength;++i)
            {
                arr[y].push(0)
            }
        }
        //console.log(arr)
        matrix = arr
        generateTiles()
}

function initBoard()
{
generateTiles()
generateTiles()
updateBoard()
}

initBoard()

document.addEventListener("keydown", (e) =>
{
    //console.log(e.code)
    switch(e.code)
    {
        case "ArrowLeft":
            moveLeft()
            updateBoard()
            break;
        case "ArrowUp":
            moveUp()
            break;
        case "ArrowDown":
            moveDown()
            break;
        case "ArrowRight":
            moveRight()
            updateBoard()
            break;
    }

})