(function(){
    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController(){

        const vm = this;
        
        vm.title = 'Filmes que já assisti';

        vm.filmes = [];

        vm.filmes.push({
            titulo: 'Deadpool',
            linkCapa: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
            ano: 2016,
            produtora: 'Fox',
            resumo: 'Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.'
        });
        
    }
})();