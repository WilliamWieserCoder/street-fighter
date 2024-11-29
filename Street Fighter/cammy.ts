class Cammy extends PersonagemBase {
    constructor() {
        super("Cammy", 100, "inglaterra", "Treinamento Delta Red")
    }

    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 25, 'pesado') }
    golpeEspecial(): number { return calcularDano(20, 40, 'especial') }
}
