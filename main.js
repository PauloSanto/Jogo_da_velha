let cont = 0
let twop = 0
let onep = 0
let winn = 0
function stg(){
    let nplay = document.getElementsByName('n_play')
    if(nplay[0].checked == 1){
        window.alert('You chose 1 player. If you want to change your choose, start new game. You are "X" with color yelow. Good lock.')
        document.getElementById('2prad').style.opacity = '0';
        document.getElementById('2plab').style.opacity = '0';
        qplay('X')
        onep = 1
    }
    if(nplay[1].checked == 1){
        window.alert('You chose 2 players. If you want to change choose new game. Start the game, you are "X" with color yelow. Good lock.')
        document.getElementById('1prad').style.opacity = '0';
        document.getElementById('1plab').style.opacity = '0';
        qplay('X')
        twop = 1
    }
}

function qplay(np){
    let txt1 = document.getElementById('txt1')
    if( np == 'X'){ 
        txt1.innerText="X"
        txt1.style.backgroundColor='yellow'
    }
    if( np == '0'){
        txt1.innerText="0"
        txt1.style.backgroundColor='green'
    }
   document.getElementById('txt2').innerText="Sua vez de jogar"
}

    function marK(id){
        let mark1 = document.getElementById(id);
        if((cont < 9) && (twop == 1)) {
          
            
            if((cont % 2 == 0) && (mark1.value == 'Z')){
                qplay('0')
                mark1.value = 'X';
                mark1.style.color = "red";
                mark1.style.backgroundColor = 'yellow';
                mark1.style.border = 'none';
                cont += 1;
            } 

            if((cont % 2 != 0) && (mark1.value == 'Z')){
                qplay('X')
                mark1.value = '0';
                mark1.style.color = "red";
                mark1.style.backgroundColor = 'green';
                mark1.style.border = 'none';
                cont += 1;
            }  
            if(cont >= 4) {testwin() }     
        }   else if((cont < 9) && (onep == 1)) {
           
            
            if((cont % 2 == 0) && (mark1.value == 'Z')){
                qplay('0')
                mark1.value = 'X';
                mark1.style.color = "red";
                mark1.style.backgroundColor = 'yellow';
                mark1.style.border = 'none';
                cont += 1;
            } 

            if((cont % 2 != 0) && (mark1.value == 'Z')){
                qplay('X')
                mark1.value = '0';
                mark1.style.color = "red";
                mark1.style.backgroundColor = 'green';
                mark1.style.border = 'none';
                cont += 1;
            }  
            if(cont >= 4) {testwin() }     
        }else if((cont < 9) && (winn == 0)){
            window.alert('click ON Start Game')
        }
        if(cont == 9){ tie()}      
    }

function testwin(){
    
    let pos1 = document.getElementById('pos1')
    let pos2 = document.getElementById('pos2')
    let pos3 = document.getElementById('pos3')
    let pos4 = document.getElementById('pos4')
    let pos5 = document.getElementById('pos5')
    let pos6 = document.getElementById('pos6')
    let pos7 = document.getElementById('pos7')
    let pos8 = document.getElementById('pos8')
    let pos9 = document.getElementById('pos9')

    if((pos1.value == 'X') && (pos2.value == 'X') && (pos3.value == 'X')) { win('X', 1, 2, 3)}
    if((pos4.value == 'X') && (pos5.value == 'X') && (pos6.value == 'X')) { win('X', 4, 5, 6)}
    if((pos7.value == 'X') && (pos8.value == 'X') && (pos9.value == 'X')) { win('X', 7, 8, 9)}
    if((pos1.value == 'X') && (pos4.value == 'X') && (pos7.value == 'X')) { win('X', 1, 4, 7)}
    if((pos2.value == 'X') && (pos5.value == 'X') && (pos8.value == 'X')) { win('X', 2, 5, 8)}
    if((pos3.value == 'X') && (pos6.value == 'X') && (pos9.value == 'X')) { win('X', 3, 6, 9)}
    if((pos1.value == 'X') && (pos5.value == 'X') && (pos9.value == 'X')) { win('X', 1, 5, 9)}
    if((pos3.value == 'X') && (pos5.value == 'X') && (pos7.value == 'X')) { win('X', 3, 5, 7)}

    if((pos1.value == '0') && (pos2.value == '0') && (pos3.value == '0')) { win('0', 1, 2, 3)}
    if((pos4.value == '0') && (pos5.value == '0') && (pos6.value == '0')) { win('0', 4, 5, 6)}
    if((pos7.value == '0') && (pos8.value == '0') && (pos9.value == '0')) { win('0', 7, 8, 9)}
    if((pos1.value == '0') && (pos4.value == '0') && (pos7.value == '0')) { win('0', 1, 4, 7)}
    if((pos2.value == '0') && (pos5.value == '0') && (pos8.value == '0')) { win('0', 2, 5, 8)}
    if((pos3.value == '0') && (pos6.value == '0') && (pos9.value == '0')) { win('0', 3, 6, 9)}
    if((pos1.value == '0') && (pos5.value == '0') && (pos9.value == '0')) { win('0', 1, 5, 9)}
    if((pos3.value == '0') && (pos5.value == '0') && (pos7.value == '0')) { win('0', 3, 5, 7)}
}

function win(w, n1, n2, n3){
    let posA = 'pos' + n1
    let posB = 'pos' + n2
    let posC = 'pos' + n3
    let txt1 = document.getElementById('txt1')
    txt1.innerText = w
    if(w == 'X'){  txt1.style.backgroundColor='yellow'}
    if(w == '0'){  txt1.style.backgroundColor='green'}   
    document.getElementById('txt2').innerText="VOCE VENCEU!!!"
    document.getElementById(posA).style.border = '6px solid black'
    document.getElementById(posB).style.border = '6px solid black'
    document.getElementById(posC).style.border = '6px solid black'
    onep = 0
    twop = 0
    winn = 1
}

function tie(){
    document.getElementById('txt1').innerText = ""
    document.getElementById('txt2').innerText="EMPATOU!!!"
    document.getElementById('txt2').style.fontSize = '50px'
}

function ng(){
    window.location.reload();
}








/*
if(np == 1) { 
    
     
document.getElementById('txt1').style.backgroundColor="green"
    document.getElementById('txt1').innerText="0"}
    
    let st_game_1p = 0
let st_game_2p = 0
let jogo = [{pos1},{pos2},{pos3},
{pos4},{pos5},{pos6},
{pos7},{pos8},{pos9}];





  
    
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
    */