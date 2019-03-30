(function(){
    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController(){

        const vm = this;
        vm.excluir = excluir;
        
        vm.title = 'Filmes que já assisti';

        vm.filmes = [];

        vm.filmes.push({
            titulo: 'Deadpool',
            linkCapa: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
            ano: 2016,
            produtora: 'Fox',
            resumo: 'Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.'
        });

        vm.filmes.push({
            titulo: 'Shrek',
            linkCapa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/ed/Shrek%28personagem%29.jpg/200px-Shrek%28personagem%29.jpg',
            ano: 2011,
            produtora: 'DreamWorks',
            resumo: 'Em um pântano distante vive Shrek (Mike Myers), um ogro solitário que vê, sem mais nem menos, sua vida ser invadida por uma série de personagens de contos de fada, como três ratos cegos, um grande e malvado lobo e ainda três porcos que não têm um lugar onde morar. Todos eles foram expulsos de seus lares pelo maligno Lorde Farquaad (John Lithgow). Determinado a recuperar a tranquilidade de antes, Shrek resolve encontrar Farquaad e com ele faz um acordo: todos os personagens poderão retornar aos seus lares se ele e seu amigo Burro (Eddie Murphy) resgatarem uma bela princesa (Cameron Diaz), que é prisioneira de um dragão. Porém, quando Shrek e o Burro enfim conseguem resgatar a princesa logo eles descobrem que seus problemas estão apenas começando.'
        });

        function excluir(indice){
            console.log('indice', indice);
        }

    }
})();