Vue.component('quem-sou-eu', {
    template: `
        <section>
            <h2>Quem Sou Eu?</h2>
            <p>Sou Karla Lima uma pessoa apaixonada pela vida.</p>
        </section>
    `
});

Vue.component('o-que-faco', {
    template: `
        <section>
            <h2>O que faço?</h2>
            <p>Trabalho como consultora Developer full stack SAP.</p>
        </section>
    `
});

Vue.component('hobbies', {
    template: `
        <section>
            <h2>Hobbies</h2>
            <p>Nos meus momentos livres, gosto de ver filmes, séries, ler livros.</p>
        </section>
    `
});

new Vue({
    el: '#app',
    data: {
        nome: 'Karla Lima',
        currentSection: 'quem-sou-eu'
    }
});
