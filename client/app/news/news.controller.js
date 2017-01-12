(function () {
    'use strict';

    angular
        .module('app.news')
        .controller('newsController', newsController);

    newsController.$inject = ['$scope','$location', 'navigator', 'context']; 

    function newsController($scope, $location, navigator, context) {
        /* jshint validthis:true */
        var vm = this;
        vm.getArticleContent = getArticleContent;
        vm.page = {
            name: 'News',
            title: '',
            borderColor: '',
            article: {
                title: '',
                date: '',
                cover: '',
                content: ''
            }
        }

        var articleTest = {
            title: "The Title Of An Upcoming Article That You're Sure To Love.",
            date: 'September 4th, 2016',
            cover: 'http://miriadna.com/desctopwalls/images/max/Falling-asleep-forest.jpg',
            content : 'client/app/news/content/test.md'
        };

        initialize();

        function initialize() {
            console.log('Loading News Controller...');

            context.resetPageColor();
            context.updatePageBorderColor(vm.page.borderColor);
            addContent(articleTest);
            addTitle();
        }
        
        function addTitle() {
            context.updatePage(vm.page);
        }

        function addContent(article) {
            vm.page.article = article;
        }

        function getArticleContent() {
            return articleTest.content;
        }
    }
})();
