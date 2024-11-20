function startGame() {
    const boardSize = 3;
    let gameState = [];

    for(let i = 0; i < boardSize * boardSize; i++){
        gameState.push(-1);
    }

    const maxPlayer = 2;
    
    const player = {
        0: 'X',
        1: 'O',
    }
    
    let turn = 0;

    function isWin(player){
        console.log(gameState)

        let win;
        for(let i = 0; i < boardSize; i++){
            win = true;
            for(let j = 0; j < boardSize; j++) {
                console.log(gameState[i * boardSize + j]);
                if(gameState[i * boardSize + j] !== player){
                    win = false;
                    break;
                }
            }
            if(win){
                return true;
            }
            
            win = true;
            for(let j = 0; j < boardSize; j++) {
                if(gameState[j * boardSize + i] !== player){
                    win = false;
                }
            }
            if(win){
                return true;
            }
        }
        
        win = true;
        for(let i = 0; i < boardSize; i++){
            if(gameState[i * boardSize + i] !== player){
                win = false;
            }
        } 
        if(win){
            return true;
        }
        
        win = true;
        for(let i = 0; i < boardSize; i++){
            if(gameState[(boardSize - 1 - i) * boardSize + i] !== player){
                win = false;
            }
        }
        if(win){
            console.log('here')
            return true;
        }

        return false;
    }

    function renderGrid(boardSize){
        const gameContainer = document.querySelector('.grid-container');
        for(let i = 0; i < boardSize * boardSize; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => {
                if(gameState[i] === -1){
                    gameState[i] = turn;
                    cell.textContent = player[turn];
                    if(isWin(turn)){
                        const body = document.querySelector('body');
                        const announcement = document.createElement('div');
                        announcement.textContent = `Player ${player[turn]} Win!`;
                        body.appendChild(announcement);
                    }
                    turn = (turn + 1) % maxPlayer;
                }
                
                
            })
            gameContainer.appendChild(cell);
        }
    }

    renderGrid(boardSize);
}

startGame()