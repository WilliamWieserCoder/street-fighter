class Blanka extends PersonagemBase {
    constructor() {
        super("Blanka", 100, "BR", "Capoeira")
    }

    golpeLeve(): number { return calcularDano(5, 10, 'leve')}
    golpePesado(): number { return calcularDano(10, 25, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}
