/* ==========================================================================
   ESTADO DO JOGO (VARIÁVEIS GLOBAIS)
   ========================================================================== */
let dinheiro = 100;
let planeta = 50;
let animais = 50;

// Referência para a tela do jogo onde os textos e botões mudam
const tela = document.getElementById('tela-jogo');

/* ==========================================================================
   FUNÇÕES DE ATUALIZAÇÃO E CONTROLE
   ========================================================================== */

/**
 * Atualiza os valores numéricos visíveis no painel superior do site.
 * Também verifica se o jogador atingiu alguma condição de Game Over.
 */
function atualizarPainel() {
    document.getElementById('txt-dinheiro').innerText = dinheiro;
    document.getElementById('txt-planeta').innerText = planeta;
    document.getElementById('txt-animais').innerText = animais;

    // Verificação de condições de fim de jogo (Derrota)
    if (planeta <= 0) {
        gameOver("Fim de Jogo! O meio ambiente foi totalmente destruído. Sem natureza não há futuro para o agro.");
    } else if (animais <= 0) {
        gameOver("Fim de Jogo! Os animais adoeceram devido à falta de manejo sustentável e bem-estar.");
    } else if (dinheiro <= 0) {
        gameOver("Fim de Jogo! Sua fazenda faliu. É preciso ter lucro econômico para manter a sustentabilidade ativa.");
    }
}

/**
 * Controla qual fase ou cenário será exibido na tela para o jogador.
 * @param {string} fase - O nome da fase atual ('pomar', 'animais', 'mercado')
 */
function proximaFase(fase) {
    atualizarPainel();

    if (fase === 'pomar') {
        tela.innerHTML = `
            <h3>Fase 1: O Pomar de Frutas</h3>
            <p>Suas laranjeiras estão sofrendo com um ataque de pragas! Como você vai resolver o problema?</p>
            <button class="btn" onclick="escolha('quimico')">Usar Agrotóxico Pesado (Barato e rápido)</button>
            <button class="btn" onclick="escolha('biologico')">Usar Controle Biológico com Joaninhas (Mais caro, mas ecológico)</button>
        `;
    } 
    
    else if (fase === 'animais') {
        tela.innerHTML = `
            <h3>Fase 2: Criação de Animais</h3>
            <p>Sua fazenda agora tem vacas leiteiras. Como será o modelo de manejo do gado?</p>
            <button class="btn" onclick="escolha('confinado')">Confinamento total (Mais leite em menos espaço, mas gera muito dejeto)</button>
            <button class="btn" onclick="escolha('silvipastoril')">Sistema Silvipastoril (Pasto com árvores: sombra, conforto e absor