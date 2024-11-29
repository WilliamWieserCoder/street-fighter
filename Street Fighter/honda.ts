class Honda extends PersonagemBase {
    constructor() {
        super("Honda", 100, "Japão", "Sumo")
    }

    golpeLeve(): number { return calcularDano(5, 10, 'leve') }
    golpePesado(): number { return calcularDano(10, 20, 'pesado') }
    golpeEspecial(): number { return calcularDano(20, 40, 'especial') }
}
