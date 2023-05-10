let cont = 0
let twop = 0
let onep = 0
let winn = 0
let arpos = []
let pos = {}

function stg(){
    let nplay = document.getElementsByName('n_play')
    if(nplay[0].checked == 1){
        window.alert('You chose 1 player. If you want to change your choose, start new game. You are "X" with color yelow. Good lock.')
        document.getElementById('2prad').style.opacity = '0';
        document.getElementById('2plab').style.opacity = '0';
        qplay('X')
        onep = 1
        showConfirmBox()
    }
    if(nplay[1].checked == 1){
        window.alert('You chose 2 players. If you want to change choose new game. Start the game, you are "X" with color yelow. Good lock.')
        document.getElementById('1prad').style.opacity = '0';
        document.getElementById('1plab').style.opacity = '0';
        qplay('X')
        twop = 1
    }
}

function showConfirmBox() {
    document.getElementById("overlay").hidden = false;
  }
  function closeConfirmBox() {
    document.getElementById("overlay").hidden = true;
  }

  function isConfirm(answer) {
    if (answer) {
      //alert("Answer is yes");
     
    } else {
      //alert("Answer is no");
      playertwo()
    }
    closeConfirmBox();
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
    if((cont < 9) && (twop == 1)) {                     //2p
        if((cont % 2 == 0) && (mark1.value == 'Z')){
            qplay('0')
                mark1.value = 'X';
                mark1.style.backgroundColor = 'yellow';
        } else {
                qplay('X')
                mark1.value = '0';
                mark1.style.backgroundColor = 'green';
            }
                mark1.style.color = "red";
                mark1.style.border = 'none';
                cont += 1;  
                testwin() 
    }   else if((cont < 9) && (onep == 1)) {            //1p start "X"
            if(mark1.value == 'Z'){
                qplay('0')
                mark1.value = 'X';
                mark1.style.color = "red";
                mark1.style.backgroundColor = 'yellow';
                mark1.style.border = 'none';
                cont += 1;
                testwin() 
                playertwo()
            } 
    } else if((cont < 9) && (winn == 0)){
            window.alert('click ON Start Game')
            }
    if((cont == 9) && (winn == 0)){ tie()}      
}

function playertwo(){
        let mark2 = document.getElementById('pos'+ randomInteger()); 
        if(cont == 0){                          // first move init game
            if (mark2.value == "Z") {
                qplay('X')
                mark2.value = '0';
                mark2.style.backgroundColor = 'green';
                mark2.style.color = "red";
                mark2.style.border = 'none';
                cont += 1;  
                testwin()
                return;
            }   else{ playertwo()}
        }

        if(cont == 1){                          // first move
            if (mark2.value == "Z") {
                qplay('X')
                mark2.value = '0';
                mark2.style.backgroundColor = 'green';
                mark2.style.color = "red";
                mark2.style.border = 'none';
                cont += 1;  
                testwin()
                return;
            }   else{ playertwo()}
        }   

        if((cont > 1) && (cont < 9) && (winn == 0)){
            if (mark2.value == "Z") {
                qplay('X');
                mark2.value = '0';
                mark2.style.backgroundColor = 'green';
                mark2.style.color = "red";
                mark2.style.border = 'none';
                cont += 1;  
                testwin()
                return;
            }   else{ playertwo()}
        }   
}
    
        //if(arpos.filter (x => x =='X').length == 1) { win('X', 1, 2, 3)}
    
function randomInteger() {
        return Math.floor(Math.random() * 9) + 1;
}

function testwin(){
    for(let i = 1; i < 10; i++){
        arpos[i] = document.getElementById(['pos'+i]).value
        
    }

    if([arpos[1], arpos[2], arpos[3]].filter (x => x =='X').length == 3) { win('X', 1, 2, 3)}
    if([arpos[4], arpos[5], arpos[6]].filter (x => x =='X').length == 3) { win('X', 4, 5, 6)}
    if([arpos[7], arpos[8], arpos[9]].filter (x => x =='X').length == 3) { win('X', 7, 8, 9)}
    if([arpos[1], arpos[4], arpos[7]].filter (x => x =='X').length == 3) { win('X', 1, 4, 7)}
    if([arpos[2], arpos[5], arpos[8]].filter (x => x =='X').length == 3) { win('X', 2, 5, 8)}
    if([arpos[3], arpos[6], arpos[9]].filter (x => x =='X').length == 3) { win('X', 3, 6, 9)}
    if([arpos[1], arpos[5], arpos[9]].filter (x => x =='X').length == 3) { win('X', 1, 5, 9)}
    if([arpos[3], arpos[5], arpos[7]].filter (x => x =='X').length == 3) { win('X', 3, 5, 7)}
    
    if([arpos[1], arpos[2], arpos[3]].filter (x => x =='0').length == 3) { win('0', 1, 2, 3)}
    if([arpos[4], arpos[5], arpos[6]].filter (x => x =='0').length == 3) { win('0', 4, 5, 6)}
    if([arpos[7], arpos[8], arpos[9]].filter (x => x =='0').length == 3) { win('0', 7, 8, 9)}
    if([arpos[1], arpos[4], arpos[7]].filter (x => x =='0').length == 3) { win('0', 1, 4, 7)}
    if([arpos[2], arpos[5], arpos[8]].filter (x => x =='0').length == 3) { win('0', 2, 5, 8)}
    if([arpos[3], arpos[6], arpos[9]].filter (x => x =='0').length == 3) { win('0', 3, 6, 9)}
    if([arpos[1], arpos[5], arpos[9]].filter (x => x =='0').length == 3) { win('0', 1, 5, 9)}
    if([arpos[3], arpos[5], arpos[7]].filter (x => x =='0').length == 3) { win('0', 3, 5, 7)}
    

  
    
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
      if((cont % 2 != 0) && (mark1.value == 'Z')){
                    qplay('X')
                    mark1.value = '0';
                    mark1.style.color = "red";
                    mark1.style.backgroundColor = 'green';
                    mark1.style.border = 'none';
                    cont += 1;
                }
                mark1.style.color = "red";
                mark1.style.border = 'none';
                cont += 1;  
                testwin()

    if([pos.pos1, pos.pos2, pos.pos3].filter(x => x=='X').length == 3) { win('X', 1, 2, 3)}
    arpos[i] = document.getElementById(['pos'+i]).value

    pos.pos1 = document.getElementById('pos1').value
    pos.pos2 = document.getElementById('pos2').value
    pos.pos3 = document.getElementById('pos3').value
    pos.pos4 = document.getElementById('pos4').value
    pos.pos5 = document.getElementById('pos5').value
    pos.pos6 = document.getElementById('pos6').value
    pos.pos7 = document.getElementById('pos7').value
    pos.pos8 = document.getElementById('pos8').value
    pos.pos9 = document.getElementById('pos9').value
    
    
// IA game
function pos(){
    let ar1 = [ pos.pos1, pos.pos2, pos.pos3 ]
    let ar2 = [ pos.pos4, pos.pos5, pos.pos6 ]
    let ar3 = [ pos.pos7, pos.pos8, pos.pos9 ]
    let ar4 = [ pos.pos1, pos.pos4, pos.pos7 ]
    let ar5 = [ pos.pos2, pos.pos5, pos.pos8 ]
    let ar6 = [ pos.pos3, pos.pos6, pos.pos9 ]
    let ar7 = [ pos.pos1, pos.pos5, pos.pos9 ]
    let ar8 = [ pos.pos3, pos.pos5, pos.pos7 ] 
    ar1.count('X')
    ar1.filter(x => x=='X').length
   if( [pos.pos1, pos.pos2, pos.pos3].filter(x => x=='X').length == 3) { win('X', 1, 2, 3)}
}
*/
