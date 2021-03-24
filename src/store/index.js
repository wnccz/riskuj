import Vue from 'vue';
import Vuex from 'vuex';
import createMultiTabState from 'vuex-multi-tab-state';
;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        issues: ['Skautský zákon',  'Příroda',  'Svět kolem nás', 'Skautská historie', 'Obecné znalosti', 'Zdravověda'],
        values: ['1 000', '2 000', '3 000', '4 000', '5 000'],
        players: [],
        selectedQuestion: null,
        selectedPlayer: null,
        editMode: false,
        questions:
        [
            [
                {question: 'Kolik bodů má skautský zákon?', answer: '10 bodů', brick: false, available: true, picture: null},
                {question: 'Jak zní první bod skautského zákona?', answer: 'Skaut je pravdomluvný', brick: false, available: true, picture: null},
                {question: 'Skaut je veselé...?', answer: 'mysli', brick: false, available: true, picture: null},
                {question: 'Skaut je ochráncem ... a cenných výtvorů ... (doplň)', answer: 'přírody, lidských', brick: false, available: true, picture: null},
                {question: 'Skaut je věrný a ... (doplňte)', answer: 'oddaný', brick: false, available: true, picture: null}
            ],
            [
                {question: 'Jmenujte alespoň tři listnaté stromy', answer: 'tak těch je víc', brick: false, available: true, picture: null},
                {question: 'Jak rozlišíme dub letní a dub zímní?', answer: 'délka stopky', brick: false, available: true, picture: null},
                {question: 'Jaký je správný botanický název pro kaštan?', answer: 'Jírovec maďal', brick: false, available: true, picture: null},
                {question: 'Jmenujte alespoň dva rody javorů', answer: 'klen, mléč, babyka, tatarský, francouzský, japonský, šedý', brick: false, available: true, picture: null},
                {question: 'Jak se nazývá plod, který má jádřinec (např. jablko)?', answer: 'malvice', brick: false, available: true, picture: null},
            ],
            [
                {question: 'Jak se jmenuje předseda vlády ČR?', answer: 'Ing. Andrej Babiš', brick: false, available: true, picture: null},
                {question: 'Jaké je hlavní město Slovenska?', answer: 'Bratislava', brick: false, available: true, picture: null},
                {question: 'Co znamená slovo demokracie?', answer: 'vláda lidu', brick: false, available: true, picture: null},
                {question: 'V jaké zemi se konají velké vyhlášené karnevaly?', answer: 'Brazílie', brick: false, available: true, picture: null},
                {question: 'Která barvy najdeme na vlajce Německa?', answer: 'černá, červená, žlutá', brick: false, available: true, picture: null}
            ],
            [
                {question: 'V jaké zemi proběhl první skautský tábor?', answer: 'Velká Británie (v roce 1907, na ostrově Brownsea Island)', brick: false, available: true, picture: null},
                {question: 'Kdo je považován za zakladatele skautingu u nás?', answer: 'Antonín Benjamín Svojsík', brick: false, available: true, picture: null},
                {question: 'V kterém roce byl naposledy obnoven český skauting?', answer: '1989 (konkrétně 2. prosince v Městské knihovně v Praze)', brick: false, available: true, picture: null},
                {question: 'Na jakém místě psal A. B. Svojsík Základy Junáctví? Poblíž tohoto místa se konal první skautský tábor.', answer: 'Vorlovská myslivna', brick: false, available: true, picture: null},
                {question: 'Který známý český spisovatel se účastnil jedněch z prvních českých táborů?', answer: 'Jiří Wolker', brick: false, available: true, picture: null}
            ],
            [
                {question: 'Dcera syna mojí babičky je moje ...', answer: 'sestra nebo sestřenice', brick: false, available: true, picture: null},
                {question: 'Ze kterého ovoce se vyrábějí povidla?', answer: 'ze švestek', brick: false, available: true, picture: null},
                {question: 'Jaké je telefonní číslo policie?', answer: '158', brick: false, available: true, picture: null},
                {question: 'Kdo nebo co je to eskamotér?', answer: 'kdo předvádí eskamotáž, iluzionista, žonglér', brick: false, available: true, picture: null},
                {question: 'Co to je GPS?', answer: 'navigační systém', brick: false, available: true, picture: null},
            ],
            [
                {question: 'Jaké je číslo na zdravotní službu?', answer: '155, uznat i 112', brick: false, available: true, picture: null},
                {question: 'Jak se jmenuje orgán, který pumpuje krev do celého těla?', answer: 'srdce', brick: false, available: true, picture: null},
                {question: 'Co je úžeh a jak se mu vyvarovat?', answer: 'vystavení organismu teplu, čpice, pitný režim', brick: false, available: true, picture: null},
                {question: 'Jak bys ošetřil říznutí nožem?', answer: '-', brick: false, available: true, picture: null},
                {question: 'Co znamená slovo sterilní?', answer: 'čistý, bez bakterií (dezinfikovaný)', brick: false, available: true, picture: null},
            ]
        ]
    },
    mutations: {
        addPlayer (state, name) {
            state.players.push ({name: name, points: 0});
        },
        deletePlayer (state, id) {
            state.players.splice(id,1);
        },
        selectQuestion(state, args) {
            state.selectedQuestion = [args[0], args[1]];
        },
        selectPlayer (state, id) {
            state.selectedPlayer = id;
        },
        cancel (state) {
            state.selectedPlayer = null;
            state.selectedQuestion = null;
        },
        correctAnswer (state) {
            state.players[state.selectedPlayer].points += parseInt(state.values[state.selectedQuestion[1]].replace(" ",""));
            state.questions[state.selectedQuestion[0]][state.selectedQuestion[1]].available = false;
            state.selectedPlayer = null;
            state.selectedQuestion = null;
        },
        badAnswer (state) {
            state.players[state.selectedPlayer].points -= parseInt(state.values[state.selectedQuestion[1]].replace(" ",""));
            state.questions[state.selectedQuestion[0]][state.selectedQuestion[1]].available = false;
            state.selectedQuestion = null;
            state.selectedPlayer = null;
        },
        nobodyKnows(state) {
            state.questions[state.selectedQuestion[0]][state.selectedQuestion[1]].available = false;
            state.selectedQuestion = null;
            state.selectedPlayer = null;
        },
        resetGame(state) {
            state.selectedQuestion = null;
            state.selectedPlayer = null;
            state.players.forEach(
                function (player) {
                    player.points = 0;
                }
            );
            state.questions.forEach(
                function (issue) {
                    issue.forEach(function(question) {
                        question.available = true;
                    })
                }
            );
        },
        toggleEditMode(state) {
            state.editMode = ( state.editMode == false )
        },
        addPictureToQuestion(state, args) {
            state.questions[args[0]][args[1]].picture = args[2];
            console.log("Ukládám obrázek");
            console.log(state.questions[args[0]][args[1]]);
        },
        initPictures(state) {
            if (typeof state.questions[0][0].picture == 'undefined') {
                state.questions.forEach(function(questions) {
                    questions.forEach(function (question) {
                        question.picture = null;
                    });
                });
            }
        },
        deletePicture(state, args) {
            state.questions[args[0]][args[1]].picture = null;
        }
    
    },
    plugins: [
        createMultiTabState(),
    ]
});