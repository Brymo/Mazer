
class maze{

    constructor(){
        this.canvas = document.getElementById("display");
        this.size = 100;
        this.grid = [];
        this.origin = null;
        this.clear = this.clear.bind(this);
        for(let i = 0; i < this.size; i++){
            const newRow = document.createElement("div");
            newRow.className = "row";
            for(let k = 0; k < this.size; k++){
                const newCell = this.createCell(this.setColor, this.clear); 
                if(k===0){
                    this.grid[i] = [newCell];
                }else{
                    this.grid[i].push(newCell);
                } 
                newRow.appendChild(newCell);
            }
            this.canvas.appendChild(newRow);
        }

    }

    createCell(onMove,onclick){
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.CUSTOMSTATE = 1;
        cell.onmouseenter = onMove;
        cell.onclick = onclick;
        return cell;
    }

    setColor(){
        this.style.backgroundColor = "red";
    }

    clear(){
        for(let i = 0; i < this.size; i++){
            for(let k = 0; k < this.size; k++){
                this.grid[i][k].style.backgroundColor = "white";
           }
        }
    }

    setOrigin(){
       const og = this;
       return ()=>{ 
        console.log(og.origin);
        console.log(this);
        og.origin = this;
       }
    }

}

const m = new maze();


