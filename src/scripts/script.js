
const interval = setInterval(function() {
    const data = new Date("feb 4, 2024 14:32:00")
    const eventTimeStamp = data.getTime()

    const now = new Date()
    const nowTimeStamp = now.getTime()
        
    const distanceEvent = eventTimeStamp - nowTimeStamp
    const days = 1000 * 60 * 60 * 24
    const hours = 1000 * 60 * 60 
    const minutes = 1000 * 60
        
    const eventDays = Math.floor(distanceEvent / days)
    const eventHours = Math.floor((distanceEvent % days) / hours)
    const eventMinutes = Math.floor((distanceEvent % hours) / minutes)
    const eventSeconds = Math.floor((distanceEvent % minutes) / 1000)
        
     document.getElementById('timer').innerHTML = `${eventDays} dias e ${eventHours}:${eventMinutes}:${eventSeconds}`
        
    if (distanceEvent < 0) {
         clearInterval(interval)
         document.getElementById('text').innerHTML = "chegou"
    }
        
}, 1000)