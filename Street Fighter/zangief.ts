class Zangief extends PersonagemBase {
    constructor() {
        super("Zangief", 100, "Russia", "Luta de rua")
    }

    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(20, 35, 'pesado') }
    golpeEspecial(): number { return calcularDano(35, 50, 'especial') }
}
