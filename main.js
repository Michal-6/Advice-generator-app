function generate(){
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        document.getElementById('quote').innerHTML = Adviceobj.advice;
        document.getElementById('title').innerHTML = "ADVICE #" + Adviceobj.id; 
    }).catch(error => {
        console.log(error);
    });
}