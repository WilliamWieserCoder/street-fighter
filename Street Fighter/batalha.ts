function simularBatalha(personagem1: Personagem, personagem2: Personagem) {
    let turno = 0
    let resultado: string = ""

    while (personagem1.getVida() > 0 && personagem2.getVida() > 0) {
        turno++;
        console.log(`\nTurno ${turno}:`)

        const golpe1 = Math.floor(Math.random() * 3)
        let dano1: number = 0
        
        if (golpe1 === 0) dano1 = personagem1.golpeLeve()
        else if (golpe1 === 1) dano1 = personagem1.golpePesado()
        else if (golpe1 === 2 && !personagem1.golpeEspecialUsado()) {
            dano1 = personagem1.golpeEspecial()
            personagem1.usarGolpeEspecial()
        } else if (golpe1 === 2 && personagem1.golpeEspecialUsado()) {
            console.log(`${personagem1.getNome()} tentou usar o golpe especial, mas ele já foi usado!`)
            continue
        }

        console.log(`${personagem1.getNome()} ataca com ${golpe1 === 0 ? 'golpe leve' : golpe1 === 1 ? 'golpe pesado' : 'golpe especial'} e causa ${dano1} de dano.`)
        personagem2.setVida(personagem2.getVida() - dano1)

        if (personagem2.getVida() <= 0) {
            resultado = `${personagem1.getNome()} venceu a batalha!`
            break
        }

        // Personagem 2 ataca
        const golpe2 = Math.floor(Math.random() * 3)
        let dano2: number = 0

        if (golpe2 === 0) dano2 = personagem2.golpeLeve()
        else if (golpe2 === 1) dano2 = personagem2.golpePesado()
        else if (golpe2 === 2 && !personagem2.golpeEspecialUsado()) {
            dano2 = personagem2.golpeEspecial();
            personagem2.usarGolpeEspecial()
        } else if (golpe2 === 2 && personagem2.golpeEspecialUsado()) {
            console.log(`${personagem2.getNome()} tentou usar o golpe especial, mas ele já foi usado!`)
            continue
        }

        console.log(`${personagem2.getNome()} ataca com ${golpe2 === 0 ? 'golpe leve' : golpe2 === 1 ? 'golpe pesado' : 'golpe especial'} e causa ${dano2} de dano.`)
        personagem1.setVida(personagem1.getVida() - dano2)

        if (personagem1.getVida() <= 0) {
            resultado = `${personagem2.getNome()} venceu a batalha!`
            break
        }

        console.log(`${personagem1.getNome()} tem ${personagem1.getVida()} de vida restante.`)
        console.log(`${personagem2.getNome()} tem ${personagem2.getVida()} de vida restante.`)
    }

    console.log(resultado)
}
