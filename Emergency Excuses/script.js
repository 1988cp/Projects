const excuse = document.querySelector('.excuse')

const excuseBtn = document.querySelector('.excuseBtn')

excuseBtn.addEventListener('click', async function loadExcuse(){
        try {
            const response = await fetch("https://excuser.herokuapp.com/v1/excuse")
            const data = await response.json()
            const excuse = data[0].excuse
            console.log(excuse)
            document.querySelector('.excuse').textContent = excuse
        } catch (error) {
            console.log('No excuse - we could not load your excuses')
        }
    })