
app.controller('Page2Ctrl',function($scope, OSService){

    var searchCallback = function(os){
　　　　//受け取ったosをviewに渡す
       $scope.os = os;
    }

    // navigator経由でpage1.htmlで設定されたオプションを取得
    var page = myNavigator.getCurrentPage();
    var osname = page.options.osname;   

　　//osnameに一致するOSを取得。検索結果は例によってcallbackで受け取る
    OSService.getOS(searchCallback,osname);
}) ;
