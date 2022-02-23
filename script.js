function carregar() {
    var msg = window.document.getElementById('msg')
    var p = window.document.getElementById('p1')
    var dia = window.document.getElementById('dia')
    var img = window.document.getElementById('imagen')
    var h = window.document.getElementById('h2')
    var data = new Date()
    var sem = data.getDay()
    switch(sem) {
        case 0:
           dia.innerHTML = `sossego`
           h2.innerHTML = `descanso`
            break
        case 1:
            dia.innerHTML = `PEITO-FEIRA`
            break
        case 2:
            dia.innerHTML = `COSTA-FEIRA`
            break
        case 3:
            dia.innerHTML = `PERNA-FEIRA`
            break
        case 4:
            dia.innerHTML = `OMBRO-FEIRA`
            break
        case 5:
            dia.innerHTML = `BICEPS-FEIRA`
            break
        case 6:
            dia.innerHTML = `PERNA-FEIRA`
            break
            default:
                dia.innerHTML = `ian bruno`
                break
        }

    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} hora`
    if (hora >= 0 && hora < 12) {
        img.src = '321.png'
        document.body.style.background = '#D3D0CB'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '123.png'
        document.body.style.background = '#6E8898'
    } else {
        img.src = '213.png'
        document.body.style.background = '#050517'
    }
    if (hora == 21) {
        p1.innerHTML = `va i pra cadimia`
    } else {
        p1.innerHTML = `va i estuda`
    }
}