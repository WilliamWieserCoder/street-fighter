class Ken extends PersonagemBase {
    constructor() {
        super("Ken", 100, "EUA", "Karate")
    }

    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}
