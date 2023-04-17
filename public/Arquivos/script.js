function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
        window.alert('tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ['Bêbe', 'Adololescente', 'jovem ','Adulto', 'Idoso','Adulta', 'Idosa']
        var img = document.createElement('img')

        if (fsex[0].checked) {

            if (idade >= 1 && idade < 10) {
                img.setAttribute('src', 'imagens/bebem2.png')
                var genero = gênero[0]

            
                

            } else if (idade < 18 ) {
                img.setAttribute('src', 'imagens/menino1.png')
                var genero = gênero[1]

            }    else if (idade < 35) {
                    img.setAttribute('src', 'imagens/jovem.png')
                    var genero = gênero[2]

            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto3.png')
                var genero = gênero[3]

            } else {
                img.setAttribute('src', 'imagens/idoso2.png')
                var genero = gênero[4]

            }

        } else if (fsex[1].checked) {
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebemu2.png')
                var genero = gênero[0]


            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/menina1.png')
                var genero = gênero[1]

            }  else if (idade < 35) {
                img.setAttribute('src', 'imagens/jovemm.png')
                var genero = gênero[2]


            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/adulta1.png')
                var genero = gênero[5]


            } else {
                img.setAttribute('src', 'imagens/idosa2.png')
                var genero = gênero[6]

            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com (${idade}) anos de idade!`
        res.appendChild(img)
        img.style.marginTop = '25px'
        img.style.marginBottom= '10px'
        fano.value=''

    }

}

