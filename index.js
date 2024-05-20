const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random() * 20) + 1;

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        play()
    }
})


button.addEventListener('click', play);


// 1 Доступ число пользователя
// 2 Нет возможности ввести число меньше 1 и больше 20
// 3 Что бы не было возможности ввести букву
// если число которое ввел пользователь ниже то мы покажем введи выше
// если число выше то введи ниже
// если угадал то победа
function play(){
    const userNumber = document.querySelector('#guess').value  
    if (userNumber < 1 || userNumber > 20){
        Swal.fire({
            icon: "error",
            title: "Ой!",
            text: "Введи число от 1 до 20!",
        });
    }

    else if (isNaN(userNumber)){
        Swal.fire({
            icon: "error",
            title: "Ой!",
            text: "Нужно ввести число",
        });
    }

    else {
        if(userNumber < answer){
            Swal.fire("Введи число повыше!", 
            'Компьютер пока побеждает!');
        }
        else if(userNumber > answer){
            Swal.fire("Введи число пониже!", 
            'Компьютер пока побеждает!');
        }
        else{
            Swal.fire({
                title: "Победа!",
                imageUrl: "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: "Победа!!!"
            });
        }
    }

    
}