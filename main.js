angular.module('ddPhotography')
.controller("mainController", function($scope){

    $scope.imageArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    $scope.shuffle = function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};


});


 $(document).ready(function () {


            $(".button-collapse").sideNav({
                edge: "right"
            });

        });


        $(document).ready(function () {

            $('.showcase').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                mobileFirst: true,
                responsive: [{
                    breakpoint: 701,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        mobileFirst: true,
                    }},
                {
              
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        mobileFirst: true,
                    }
                
                
                }]


            });

        });