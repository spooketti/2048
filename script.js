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

