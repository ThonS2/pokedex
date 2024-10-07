/* 
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon


precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo o usuário na listagem de pokémon

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão monstrar
- remover a classe ativa que marca o pokémon selecionado
- adicionar a classe ativo no item da listagem selecionado

*/


// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const litaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')


// vamos precisar trabalhar com um evento de clique feito pelo o usuário na listagem de pokémon
litaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão monstrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da listagem selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})