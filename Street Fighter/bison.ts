class Bison extends PersonagemBase {
    constructor() {
        super("Bison", 100, "Tailandia", "Psycho Power")
    }

    golpeLeve(): number { return calcularDano(10, 20, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}
