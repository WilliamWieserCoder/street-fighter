class Deejay extends PersonagemBase {
    constructor() {
        super("Dee Jay", 100, "Jamaica", "Kickboxing")
    }

    golpeLeve(): number { return calcularDano(5, 10, 'leve') }
    golpePesado(): number { return calcularDano(10, 20, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}
