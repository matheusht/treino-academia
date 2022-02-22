var agola = new Date()
var sem = agola.getDay()
console.log(sem)

switch(sem) {
    case 0:
        console.log('domigo')
        break
    case 1:
        console.log('seguda')
        break
    case 2:
        console.log('terçi')
        break
    case 3:
        console.log('quarte')
        break
    case 4:
        console.log('quinte')
        break
    case 5:
        console.log('sexte')
        break
    case 6:
        console.log('sabade')
        break
        default:
            console.log('seu BURRO')
            break
    }