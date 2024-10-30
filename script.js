document.getElementById('match-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const teamA = document.getElementById('teamA').value;
    const teamB = document.getElementById('teamB').value;

    // Função para buscar dados das equipes e calcular probabilidades
    fetchProbabilities(teamA, teamB);
});

function fetchProbabilities(teamA, teamB) {
    // Exemplo de requisição para uma API de futebol
    fetch(`https://api.football-data.org/v2/teams/${teamA}`)
        .then(response => response.json())
        .then(dataA => {
            fetch(`https://api.football-data.org/v2/teams/${teamB}`)
                .then(response => response.json())
                .then(dataB => {
                    // Processar os dados e calcular probabilidades
                    const probabilities = calculateProbabilities(dataA, dataB);
                    displayResults(probabilities);
                });
        });
}

function calculateProbabilities(dataA, dataB) {
    // Implementar lógica para calcular probabilidades com base nos dados
    return {
        resultado1: 50,
        resultado2: 30,
        resultado3: 20
    };
}

function displayResults(probabilities) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Probabilidades</h2>
        <p>Resultado 1: ${probabilities.resultado1}%</p>
        <p>Resultado 2: ${probabilities.resultado2}%</p>
        <p>Resultado 3: ${probabilities.resultado3}%</p>
    `;
}
