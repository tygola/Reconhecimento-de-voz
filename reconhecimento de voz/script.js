(function(){

var speakBtn = document.querySelector('#speakbt');
var resultSpeaker = document.querySelector('#resultSpeak');
var ano = new Date().getFullYear();
var dia = new Date().getDate();
var mes = new Date().getMonth();
var minutos = new Date().getMinutes();
var hora = new Date().getHours();

if(window.speechRecognition || window.webkitSpeechRecognition){
    
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

    var myRecognition = new SpeechRecognition();

    myRecognition.lang = 'pt-BR';

    speakBtn.addEventListener('click', function(){
        try {
            
            myRecognition.start();

            resultSpeaker.innerHTML = "Estou te ouvindo!";

        } catch (erro) {
            alert('erro:' + erro.message);
        }
    }, false);

    myRecognition.addEventListener('result', function(evt){
        
        var resultSpeak = evt.results[0][0].transcript;
        console.log(resultSpeak);

        resultSpeaker.innerHTML = resultSpeak;

        switch(resultSpeak.toLowerCase()){
            case 'clarear':
                document.body.style.background = 'aqua';
                break;
            case 'escurecer':
                document.body.style.background = '#047751';
                break;
            case 'normal':
                document.body.style.background = '#33cc99';
                break;
            case 'dark':
                document.body.style.background = 'black';
                break;
            case 'white':
                document.body.style.background = 'white';
                document.body.style.color = 'black';
                break;
            case 'recarregar':
                location.reload();
                break;
            case 'youtube':
                window.open('https://www.youtube.com/');
                break;
            case 'facebook':
                window.open('http://www.facebook.com');
                    break;
            case 'whatsapp':
                window.open('https://web.whatsapp.com/');
                    break;
            case 'instagram':
                window.open('https://instagram.com/');
                    break;
            case 'tradutor':
                window.open('https://translate.google.com.br/');
                    break;
            case 'spotify':
                window.open('https://www.spotify.com/br/');
                    break;
            case 'discord':
                window.open('https://discord.com/');
                    break;
            case 'clima':
                window.open('https://weather.com/');
                    break;
            case 'esportes':
                window.open('https://ge.globo.com/');
                    break;
            case 'que dia é hoje':
                resultSpeak = ('hoje é dia ' + dia + 'do mes' + mes + 'do ano' + ano);
                    break;
            case 'que horas são':
                resultSpeak = ('agora é' + hora + 'horas e' + minutos + 'minutos');
                    break;
            case 'mostrar comandos':
                document.getElementById('comand').style.display = 'block';
                    break;
        }

        
        readOutLoud(resultSpeak);

        if(resultSpeak.match(/buscar por/)){
            
            resultSpeaker.innerHTML = 'Redirecionando....';
            setTimeout(function(){

                var resultado = resultSpeak.split('buscar por');
                window.open('https://www.google.com/search?q=' + resultado[1]);

            }, 2000);
        }
        
    }, false);

    myRecognition.addEventListener('error', function(evt){
        resultSpeaker.innerHTML = 'Não ouvi muito bem! por Favor repita!'
    }, false);

}else{
    resultSpeaker.innerHTML = 'Seu navegador não é compativel com o reconhecimento de voz'
}

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

})();