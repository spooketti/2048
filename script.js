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
    let ghost = [
    ]
    let arr = []
    let save
    
       
       for(let i=0;i<4;i++)
       {
        save = (matrix.map(d => d[i])).filter(filterZero);
        let rowLength = 4 - save.length
        for(let i=0;i<rowLength;++i)
        {
            save.unshift(0)
        }
        arr.push(save)
       }

       function filterZero(num)
       {
        return num > 0
       }

       for(let i=3;i>=0;i--)
       {
        let bag = []
        for(let j=0;j<4;j++)
            {
                bag.push(arr[j][i]) 
            }
            ghost.push(bag)
       }

       matrix = ghost
       generateTiles()
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
    let ghost = [
    ]
    let arr = []
    let save
    
       
       for(let i=0;i<4;i++)
       {
        save = (matrix.map(d => d[i])).filter(filterZero);
        let rowLength = 4 - save.length
        for(let i=0;i<rowLength;++i)
        {
            save.push(0)
        }
        arr.push(save)
       }

       function filterZero(num)
       {
        return num > 0
       }

       for(let i=3;i>=0;i--)
       {
        let bag = []
        for(let j=0;j<4;j++)
            {
                bag.push(arr[j][i]) 
            }
            ghost.push(bag)
       }

       matrix = ghost
       generateTiles()
       //dont ask me how this works by the time you read this comment i have forgotten i made this project
       //huge shout out to this guy though frfr https://www.youtube.com/watch?v=gOtw6A-kqF8

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
            updateBoard()
            break;
        case "ArrowDown":
            moveDown()
            updateBoard()
            break;
        case "ArrowRight":
            moveRight()
            updateBoard()
            break;
    }

})