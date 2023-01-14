let board = document.getElementById("board")
for(let i=0;i<4;i++)
{
    for(let j=0;j<4;j++)
    {
        let box = document.createElement("div")
        box.id = j.toString() + i.toString()
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

function updateBoard()
{
 

for(let i=0;i<4;i++)
{
    for(let j=0;j<4;j++)
    {
        let box = document.getElementById(j.toString() + i.toString())
        box.innerText = matrix[j][i].toString()
        box.style.backgroundColor = colorSwitch(matrix[j][i])
        if(matrix[j][i] == 0)
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
    let twoOFour = Math.floor(Math.random() * 100)
    if(matrix[randomY][randomX] != 0)
    {
        generateTiles()
    }
    else{
        if(twoOFour %2==0)
    {
        matrix[randomY][randomX] = 2
    }
    else
    {
        matrix[randomY][randomX] = 4
    }
    }
}
function initBoard()
{
generateTiles()
generateTiles()
updateBoard()
}

initBoard()