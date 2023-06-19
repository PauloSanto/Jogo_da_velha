let cont = 0        // count moves
let twop = 0        // 2 players
let onep = 0        // 1 player
let winn = 0        // winner
let arpos = []      // posicional array
let stpc = 0        // start personal computer
let st1p = 0        // start 1 player
let test = 0        // test

function stg(){             //start game
    let nplay = document.getElementsByName('n_play')  // nbumber players
    if(winn == 0){
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
}

function showConfirmBox() {     //overlay box
    document.getElementById("overlay").hidden = false;
  }
  function closeConfirmBox() {
    document.getElementById("overlay").hidden = true;
  }

  function isConfirm(answer) {   
    if (answer) {
      //alert("Answer is yes");
      st1p = 1          // start game 1 player
     
    } else {
      //alert("Answer is no");
      stpc = 1          // start game personal computer
      playertwo()
    }
    closeConfirmBox();
    
}

function qplay(np){         //notice who play
    let txt1 = document.getElementById('txt1')
    if( np == 'X'){ 
        txt1.innerText="X"
        txt1.style.backgroundColor='yellow'
             // turn X
    }
    if( np == '0'){
        txt1.innerText="0"
        txt1.style.backgroundColor='green'
              // turn 0
    }
   document.getElementById('txt2').innerText="Sua vez de jogar"
}

function marK(id){          // html => mark
    
    let mark1 = document.getElementById(id);
    
    if((cont < 9) && (twop == 1)) {                     // 2 players
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
                loadarr() 
    }   else if((cont < 9) && (onep == 1)&& (st1p = 1)) {     // 1 player start "X"
            if(mark1.value == 'Z'){
                qplay('0')
                mark1.value = 'X';
                mark1.style.color = "red";
                mark1.style.backgroundColor = 'yellow';
                mark1.style.border = 'none';
                cont += 1;
                loadarr() 
                cond()
                test_pos()
            } 
                       
        } else if((cont < 9) && (winn == 0)){          // notice about game
            window.alert('click ON Start Game')
    }
    cond() 
}

function cond(){            // conditionals
    //if((cont > 3) && (onep == 1))  { test()}  // start X check position
    if(cont > 4) {testwin()}                  // test if exist winner   
    if((cont == 9) && (winn == 0)){ tie()}    // test final play
}

function playertwo(){
        let rand = randomInteger()
        let mark2 = document.getElementById('pos' + rand)
       
        if ((onep == 1) && (winn == 0)){                     // first move start pc
            if (mark2.value == "Z") {
                qplay('X')
                mark2.value = '0';
                mark2.style.backgroundColor = 'green';
                mark2.style.color = "red";
                mark2.style.border = 'none';
                cont += 1; 
                loadarr()
                test = 1;
                return;
            }   else{ playertwo()}
        }
}
       
function randomInteger() {
        return Math.floor(Math.random() * 9) + 1;
}

function loadarr(){
    for(let i = 1; i < 10; i++){
    arpos[i] = document.getElementById('pos' + i).value
    }
}
function testwin(){
    loadarr()
    
    if( arpos.slice(1,4).filter (x => x =='X').length == 3) { win('X', 1, 2, 3)}
    if( arpos.slice(4,7).filter (x => x =='X').length == 3) { win('X', 4, 5, 6)}
    if( arpos.slice(7,10).filter (x => x =='X').length == 3) { win('X', 7, 8, 9)}
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

function test_pos(){
    
    if (winn == 0){
        if(stpc == 1){
            //defense
            if((arpos.slice(1,4).filter (x => x =='X').length == 2)&&(test==0) 
            ) { test = movpc('0', 1, 2, 3)}
            if(( arpos.slice(4,7).filter (x => x =='X').length == 2)&&(test==0)  
            ) { test = movpc('0', 4, 5, 6)}
            if(( arpos.slice(7,10).filter (x => x =='X').length == 2)&&(test==0) 
            ){ test = movpc('0', 7, 8, 9)}
            if(([arpos[1], arpos[4], arpos[7]].filter (x => x =='X').length == 2)&&(test==0) 
            ) { test = movpc('0', 1, 4, 7)}
            if(([arpos[2], arpos[5], arpos[8]].filter (x => x =='X').length == 2)&&(test==0)  
            ){ test = movpc('0', 2, 5, 8)}
            if(([arpos[3], arpos[6], arpos[9]].filter (x => x =='X').length == 2)&&(test==0)  
            ){ test = movpc('0', 3, 6, 9)}
            if(([arpos[1], arpos[5], arpos[9]].filter (x => x =='X').length == 2)&&(test==0) 
                ) { test = movpc('0', 1, 5, 9)}
            if(([arpos[3], arpos[5], arpos[7]].filter (x => x =='X').length == 2)&&(test==0) 
                ) { test = movpc('0', 3, 5, 7)}

            // vitory
            if((arpos.slice(1,4).filter (x => x =='0').length == 2)&&(test==0) 
            ) { test = movpc('0', 1, 2, 3)}
            if(( arpos.slice(4,7).filter (x => x =='0').length == 2)&&(test==0)  
            ) { test = movpc('0', 4, 5, 6)}
            if(( arpos.slice(7,10).filter (x => x =='0').length == 2)&&(test==0) 
            ){ test = movpc('0', 7, 8, 9)}
            if(([arpos[1], arpos[4], arpos[7]].filter (x => x =='0').length == 2)&&(test==0) 
            ) { test = movpc('0', 1, 4, 7)}
            if(([arpos[2], arpos[5], arpos[8]].filter (x => x =='0').length == 2)&&(test==0)  
            ){ test = movpc('0', 2, 5, 8)}
            if(([arpos[3], arpos[6], arpos[9]].filter (x => x =='0').length == 2)&&(test==0)  
            ){ test = movpc('0', 3, 6, 9)}
            if(([arpos[1], arpos[5], arpos[9]].filter (x => x =='0').length == 2)&&(test==0) 
                ) { test = movpc('0', 1, 5, 9)}
            if(([arpos[3], arpos[5], arpos[7]].filter (x => x =='0').length == 2)&&(test==0) 
                ) { test = movpc('0', 3, 5, 7)}

            //neutro

            if(test == 0) { playertwo()}    
        }
        if(st1p == 1){
            test = 0
            //defense
            if((arpos.slice(1,4).filter (x => x =='X').length == 2)&&(test==0) 
            ) { test = movpc('X', 1, 2, 3)}
            if(( arpos.slice(4,7).filter (x => x =='X').length == 2)&&(test==0)  
            ) { test = movpc('X', 4, 5, 6)}
            if(( arpos.slice(7,10).filter (x => x =='X').length == 2)&&(test==0) 
            ){ test = movpc('X', 7, 8, 9)}
            if(([arpos[1], arpos[4], arpos[7]].filter (x => x =='X').length == 2)&&(test==0) 
            ) { test = movpc('X', 1, 4, 7)}
            if(([arpos[2], arpos[5], arpos[8]].filter (x => x =='X').length == 2)&&(test==0)  
            ){ test = movpc('X', 2, 5, 8)}
            if(([arpos[3], arpos[6], arpos[9]].filter (x => x =='X').length == 2)&&(test==0)  
            ){ test = movpc('X', 3, 6, 9)}
            if(([arpos[1], arpos[5], arpos[9]].filter (x => x =='X').length == 2)&&(test==0) 
                ) { test = movpc('X', 1, 5, 9)}
            if(([arpos[3], arpos[5], arpos[7]].filter (x => x =='X').length == 2)&&(test==0) 
                ) { test = movpc('X', 3, 5, 7)}

            //vitory
            if((arpos.slice(1,4).filter (x => x =='0').length == 2)&&(test==0) 
            ) { test = movpc('X', 1, 2, 3)}
            if(( arpos.slice(4,7).filter (x => x =='0').length == 2)&&(test==0)  
            ) { test = movpc('X', 4, 5, 6)}
            if(( arpos.slice(7,10).filter (x => x =='0').length == 2)&&(test==0) 
            ){ test = movpc('X', 7, 8, 9)}
            if(([arpos[1], arpos[4], arpos[7]].filter (x => x =='0').length == 2)&&(test==0) 
            ) { test = movpc('X', 1, 4, 7)}
            if(([arpos[2], arpos[5], arpos[8]].filter (x => x =='0').length == 2)&&(test==0)  
            ){ test = movpc('X', 2, 5, 8)}
            if(([arpos[3], arpos[6], arpos[9]].filter (x => x =='0').length == 2)&&(test==0)  
            ){ test = movpc('X', 3, 6, 9)}
            if(([arpos[1], arpos[5], arpos[9]].filter (x => x =='0').length == 2)&&(test==0) 
                ) { test = movpc('X', 1, 5, 9)}
            if(([arpos[3], arpos[5], arpos[7]].filter (x => x =='0').length == 2)&&(test==0) 
                ) { test = movpc('X', 3, 5, 7)}

            //neutro
            if(test == 0) {playertwo()}
        }
      
        cond()
    }
}

function win(w, n1, n2, n3){
    let posA = 'pos' + n1
    let posB = 'pos' + n2
    let posC = 'pos' + n3
    let txt1 = document.getElementById('txt1')
    txt1.innerText = w
    if(w == 'X'){  txt1.style.backgroundColor='yellow'}
    if(w == '0'){  txt1.style.backgroundColor='green'}   
    document.getElementById('txt2').innerHTML="VOCE VENCEU!!!"
    document.getElementById(posA).style.border = '6px solid black'
    document.getElementById(posB).style.border = '6px solid black'
    document.getElementById(posC).style.border = '6px solid black'
    win_img()
    onep = 0
    twop = 0
    winn = 1
}
function win_img(){
   
     document.getElementById("container").style.backgroundImage =  "url('img/TROFEU.png')"
}

function movpc(w, n1, n2, n3){
    loadarr()
    if((w == '0') && (winn == 0)){
        if(arpos[n1] == 'Z') {
                let mark3 = document.getElementById('pos'+ n1) 
                qplay('X')
                mark3.value = 'X';
                mark3.style.backgroundColor = 'green';
                mark3.style.color = "red";
                mark3.style.border = 'none';
                loadarr()
                cont += 1;  
                return(1);
                
             
            } 
        if(arpos[n2] == 'Z') {
                let mark3 = document.getElementById('pos'+ n2) 
                qplay('X')
                mark3.value = 'X';
                mark3.style.backgroundColor = 'green';
                mark3.style.color = "red";
                mark3.style.border = 'none';
                loadarr()
                return(1);
               
            } 
        if(arpos[n3] == 'Z') { 
                let mark3 = document.getElementById('pos'+ n3) 
                qplay('X')
                mark3.value = 'X';
                mark3.style.backgroundColor = 'green';
                mark3.style.color = "red";
                mark3.style.border = 'none';
                loadarr()
                cont += 1;  
                return(1);
               
        } 
        return(0);
    }

    if((w == 'X') && (winn == 0)){
        if(arpos[n1] == 'Z') {
                let mark3 = document.getElementById('pos'+ n1) 
                qplay('X')
                mark3.value = '0';
                mark3.style.backgroundColor = 'green';
                mark3.style.color = "red";
                mark3.style.border = 'none';
                loadarr()
                cont += 1;  
                return(1);
            } 
        if(arpos[n2] == 'Z') {
                let mark3 = document.getElementById('pos'+ n2) 
                qplay('X')
                mark3.value = '0';
                mark3.style.backgroundColor = 'green';
                mark3.style.color = "red";
                mark3.style.border = 'none';
                loadarr()
                cont += 1;  
                return(1);
            } 
        if(arpos[n3] == 'Z') { 
                let mark3 = document.getElementById('pos'+ n3) 
                qplay('X')
                mark3.value = '0';
                mark3.style.backgroundColor = 'green';
                mark3.style.color = "red";
                mark3.style.border = 'none';
                loadarr()
                cont += 1;  
                return(1);
          } 
        return(0);
    }
}

function tie(){
    document.getElementById('txt1').innerText = ""
    document.getElementById('txt2').innerText="EMPATOU!!!"
    document.getElementById('txt2').style.fontSize = '50px'
    document.getElementById("container").style.backgroundColor ="yellow"
    winn = 1
}

function ng(){
    window.location.reload();
}
