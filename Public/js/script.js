const sentBtn = document.getElementById('sendBtn');
const textbox = document.getElementById('textbox');
const chatContainer = document.getElementById('chatContainer');
const user = {message:''};

const arrayOfPossibleMessage = [
    {message: "hi", response: "hello"},
    {message:"how are you?", response:"i'm good"},
    {message:"what is your name?", response:"i'm chatbot!"},
    {message: "do you have kids?", response: "No I don't!"},
    {message:"how old are you?", response:"i'm ageless"},
    {message:"do you sleep early?", response:"No I don't!"},
    {message: "can you dance?", response: "yes,tango"},

    {message:"what's you fav food", response:"pizza"},
    {message:"where do you live", response:"in the web"},
    {message:"what is you fav food", response:"fish"},
    {message:"do you have car?", response:"i travel th, rough space :)"},
    {message:"do you have job?", response:"obvio no see?"},
    {message:"where were you born", response:"on mars"},
    {message:"do you have siblings", response:"yes, i have got 3"},
    {message:"what is your name?", response:"botsito"},
];

sendMessage = (userMessage) => {
    const messageElement = document.createElement('div');
    messageElement.style.textAlign = 'right';
    messageElement.style.margin = '10px';

    messageElement.innerHTML = '<span> You: </span>' + '<span>' +userMessage+ '</span>';

    chatContainer.appendChild(messageElement);
}

chatBotResponse = (userMessage) => {
    let chatBotMessage = '';
    
    if(userMessage.length > 5 || userMessage == 'hi'){
        let result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));

        if(result.length > 0){
            let response = result[0].response;
            chatBotMessage = response;
        }else{
            chatBotMessage = 'please send another message';
        }
    }else{
        chatBotMessage = 'please send another message';
    }


    const messageElement = document.createElement('div');
    messageElement.innerHTML = '<span> Bot: </span>' + '<span>' +chatBotMessage+ '</span>';

    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000);

    
}

sentBtn.addEventListener('click', (e) => {

    const userMessage = textbox.value;

    if(userMessage == ''){
        alert('please type in a message');
    }else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText
        textbox.value = '';
        sendMessage(userMessageText);
        chatBotResponse(userMessageText);
    }

});