class PersonagemBase implements Personagem {
    nome: string
    vida: number
    nacionalidade: string
    estiloLuta: string
    golpeEspecialUsadoFlag: boolean

    constructor(nome: string, vida: number, nacionalidade: string, estiloLuta: string) {
        this.nome = nome
        this.vida = vida
        this.nacionalidade = nacionalidade
        this.estiloLuta = estiloLuta
        this.golpeEspecialUsadoFlag = false
    }

    getNome(): string { return this.nome }
    setNome(nome: string): void { this.nome = nome }
    getVida(): number { return this.vida }
    setVida(vida: number): void { this.vida = vida }
    getNacionalidade(): string { return this.nacionalidade; }
    setNacionalidade(nacionalidade: string): void { this.nacionalidade = nacionalidade; }
    getEstiloLuta(): string { return this.estiloLuta; }
    setEstiloLuta(estilo: string): void { this.estiloLuta = estilo }

    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }

    usarGolpeEspecial(): void { this.golpeEspecialUsadoFlag = true }
    golpeEspecialUsado(): boolean { return this.golpeEspecialUsadoFlag }
}
