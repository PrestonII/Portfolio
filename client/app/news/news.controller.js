(function () {
    'use strict';

    angular
        .module('app.news')
        .controller('newsController', newsController);

    newsController.$inject = ['$scope','$location', 'navigator', 'context']; 

    function newsController($scope, $location, navigator, context) {
        /* jshint validthis:true */
        var vm = this;
        vm.changeArticle = changeArticle;
        vm.page = {
            name: 'News',
            title: '',
            borderColor: '',
            articles: [],
            article: {
                title: '',
                date: '',
                cover: '',
                content: ''
            }
        }

        var articles = [
            {
                id: 0,
                title: "InDesign: One Of The Best Tools For UX",
                date: 'April 13th, 2016'
            },
            {
                id: 1,
                title: "Rick and Morty: The Next Episode",
                date: 'May 16th, 2016'
            },
            {
                id: 2,
                title: "An Article With A Surprisingly Long Title",
                date: 'June 5th, 2016'
            },
            {
                id: 3,
                title: "Yet Another Article That You Should Read",
                date: 'July 25th, 2016'
            },
            {
                id: 4,
                title: "Some Other Article",
                date: 'August 12th, 2016'
            },
            {
                id: 5,
                title: "The Title Of An Upcoming Article That You're Sure To Love.",
                date: 'September 4th, 2016',
                cover: 'http://miriadna.com/desctopwalls/images/max/Falling-asleep-forest.jpg',
                content : 'client/app/news/content/test.md'
            }
        ];

        initialize();

        function initialize() {
            console.log('Loading News Controller...');

            context.resetPageColor();
            context.updatePageBorderColor(vm.page.borderColor);

            updateArticles();
            addTitle();
        }

        function updateArticles(){
            vm.page.articles = articles;

            var latestArticle = getLatestArticle();

            addContent(latestArticle);

            function getLatestArticle(){
                var ids = [];

                articles.forEach(function(art){
                    if(art.id)
                        ids.push(art.id);
                });

                var lastArticleId = getMaxofArray(ids);

                return articles.find(function(article){
                    return article.id === lastArticleId;
                })
            }

            function getMaxofArray(array){
                return Math.max.apply(null, array);
            }
        }

        function addTitle() {
            context.updatePage(vm.page);
        }

        function addContent(article) {
            vm.page.article = article;
        }

        function changeArticle(id){
            alert("This should change the article on the page");
        }
    }
})();
