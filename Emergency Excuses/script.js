
/*const url = "https://excuser.herokuapp.com/v1/excuse"

async function start(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        
    } catch (err) {
        console.log("There was a problem fetching the excuse list. Ironically, we have no reason to give you.")
    }

}

excuseBtn.addEventListener('click', function () {
    start()
    console.log(writeExcuse)})

*/

/* 

fetch('https://excuser.herokuapp.com/v1/excuse')
.then (res => res.json)
.then (data => console.log(data))

*/


/*
async function loadExcuse() {
    try {
        const response = await fetch("https://excuser.herokuapp.com/v1/excuse")
        const excuse = await response.json()
        console.log(excuse)
        //return excuse
    } catch (error) {
        console.log('No excuse - we could not load your excuses')
    }
}

excuseBtn.addEventListener('click', function (){
    loadExcuse()
    //const excuse = excuse;

    //document.querySelector('.excuse').textContent = loadExcuse;
    //document.querySelector('.excuse').textContent = excuse;
    //document.querySelector('.excuse').textContent = `${excuse}`;
})



//console.log(excuse)

*/

const excuse = document.querySelector('.excuse')

const excuseBtn = document.querySelector('.excuseBtn')

excuseBtn.addEventListener('click', async function loadExcuse(){
        try {
            const response = await fetch("https://excuser.herokuapp.com/v1/excuse")
            const data = await response.json()
            const excuse = data[0].excuse
            console.log(excuse)
            document.querySelector('.excuse').textContent = excuse
            //document.querySelector('.excuse').textContent = excuse[0]
            //return excuse
        } catch (error) {
            console.log('No excuse - we could not load your excuses')
        }
    })