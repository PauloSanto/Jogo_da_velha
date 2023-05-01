let st_game_1p = 0
let st_game_2p = 0
let jogo = {pos1,};


function marK_s(){
    let nplay = document.getElementsByName('n_play')
    if(nplay[0].checked == 1){
        st_game_1p = 1
        window.alert('You chose 1 player. If you want to change choose new game. Start the game, you are "X" with color yelow. Good lock.')
        document.getElementById('2p').style.opacity = '0';
    }
    if(nplay[1].checked == 1){
        st_game_2p = 1
        window.alert('You chose 2 players. If you want to change choose new game. Start the game, you are "X" with color yelow. Good lock.')
        document.getElementById('1p').style.opacity = '0';
    }
}

 function nplay(){
    window.alert('New Game !.')
    window.location.reload();
}

    function marK(id){
        if(st_game_1p == 0 && st_game_2p == 0) {
            marK_s()
        } else {    
        let mark1 = document.getElementById(id)
            mark1.value = 'X';
            mark1.style.color = "red";
            mark1.style.backgroundColor = 'yellow';
            mark1.style.border = none;
            matriz(mark1.id, mark1.value);
        }
    
        if(st_game_2p == 0 && st_game_1p == 0){
            marK_s()
        } else {
            mark1.value = 'X';
            mark1.style.color = "red";
            mark1.style.backgroundColor = 'yellow';
            mark1.style.border = none;
            matriz(mark1.id, mark1.value);
        }
    }
    
    function matriz(pos, mark){
        if(pos == 'pos1') { l1[0] = mark; c1[0] = mark; }
        if(pos == 'pos2') { l1[1] = mark; c2[1] = mark; }
        if(pos == 'pos3') { l1[2] = mark; c3[2] = mark; }
        if(pos == 'pos4') { l2[0] = mark; c1[0] = mark; }
        if(pos == 'pos5') { l2[0] = mark; c2[0] = mark; }
        if(pos == 'pos6') { l2[0] = mark; c3[0] = mark; }
        if(pos == 'pos7') { l3[0] = mark; c1[0] = mark; }
        if(pos == 'pos8') { l3[0] = mark; c2[0] = mark; }
        if(pos == 'pos9') { l3[0] = mark; c3[0] = mark; }
        
    }