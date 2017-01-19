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
        vm.next = next;
        vm.previous = previous;
        vm.page = {
            name: 'News',
            title: '',
            borderColor: {},
            articles: [],
            article: {
                id: '',
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
                cover: './client/app/news/content/tree.jpg',
                // cover: './content/tree.jpg',
                content : './client/app/news/content/test.md'
            }
        ];

        initialize();

        function initialize() {
            console.log('Loading News Controller...');

            context.resetPageColor();
            var border = convertBorder('Blue');
            vm.page.borderColor = border;
            context.updatePageBorderColor(border);

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

        function next(){
            var currentId = vm.page.article.id;
            changeArticle(currentId + 1);
        }

        function previous(){
            var currentId = vm.page.article.id;
            changeArticle(currentId - 1);
        }

        function changeArticle(id){
            alert("This should change the article on the page");
        }

        function convertBorder(color){
            var borderColor = {
                all: '',
                left: '',
                right: '',
                top: '',
                bottom: ''
            };

            borderColor.all = 'border' + color + 'All';
            borderColor.left = 'border' + color + 'Left';
            borderColor.right = 'border' + color + 'Right';
            borderColor.top = 'border' + color + 'Top';
            borderColor.bottom = 'border' + color + 'Bottom';

            return borderColor;
        }
    }
})();
