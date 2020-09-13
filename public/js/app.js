const url = '/weather?address='

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(url + decodeURIComponent(location)).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
                return console.log(data.error)
            }
            messageOne.textContent = 'Address: ' + data.location
            messageTwo.textContent = 'Forecast: ' + data.forecastData
            console.log(data)
        })
    })
})