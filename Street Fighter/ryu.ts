class Ryu extends PersonagemBase {
    constructor() {
        super("Ryu", 100, "Japão", "Karate")
    }

    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(25, 45, 'especial') }
}
