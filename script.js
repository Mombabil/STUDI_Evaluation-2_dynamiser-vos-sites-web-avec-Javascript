function choicePlayer1 (){
    let player1 = document.getElementById('select-player-1')
    let imgPlayer1 = document.getElementById('imgPlayer1')

    player1.addEventListener('change', (action1) => {
        switch(action1.target.value){
            case 'Orayon-1':
                imgPlayer1.src='images/orayon.png'
                break
            case 'Shachoca-1':
                imgPlayer1.src='images/shachoca.png'
                break
            case 'Hakoou-1':
                imgPlayer1.src='images/hakoou.png'
                break
            case 'Vengorogo-1':
                imgPlayer1.src='images/vengorogo.png'
                break
            case 'Mombabil-1':
                imgPlayer1.src='images/mombabil.png'
                break
            case 'Flote-1':
                imgPlayer1.src='images/flote.png'
                break
            case 'Aamog-1':
                imgPlayer1.src='images/aamog.png'
                break
        }
        if(action1.target.value !== ''){
            player1.disabled = true
        }
    })
}
function choicePlayer2 (){
    let player2 = document.getElementById('select-player-2')
    let imgPlayer2 = document.getElementById('imgPlayer2')

    player2.addEventListener('change', (action2) => {
        switch(action2.target.value){
            case 'Orayon-2':
                imgPlayer2.src='images/orayon.png'
                break
            case 'Shachoca-2':
                imgPlayer2.src='images/shachoca.png'
                break
            case 'Hakoou-2':
                imgPlayer2.src='images/hakoou.png'
                break
            case 'Vengorogo-2':
                imgPlayer2.src='images/vengorogo.png'
                break
            case 'Mombabil-2':
                imgPlayer2.src='images/mombabil.png'
                break
            case 'Flote-2':
                imgPlayer2.src='images/flote.png'
                break
            case 'Aamog-2':
                imgPlayer2.src='images/aamog.png'
                break
        }
        if(action2.target.value !== ''){
            player2.disabled = true
        }
    })
}


choicePlayer1()
choicePlayer2()