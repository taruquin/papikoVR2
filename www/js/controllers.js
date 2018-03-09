
angular.module('myApp')

// Controller

.controller('VideosController', function ($scope, $http, $log, VideosService) {

    // ----------------------------------------
    // kamome add
    // LLV Space Information
    // ----------------------------------------

    // Model の初期化
    var LLVSpaceTitle = 'ぱぴこVR☆彡';
    
    var LLVSpace = [

            {
                LLVindex:0,
                LLVname:'ぱぴことブランコ１',
                discription:'ぱぴぷぺぱぴことブランコ',
                imageURL:'vr/001_Ns_papiko.png',
                VRImagePath:'vr/001_VR_papiko.jpg',
                VRAfterImagePath:'vr/002_VR_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/atari.mp3',                   // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'株式会社ぴやまる'
            },
            {
                LLVindex:1,
                LLVname:'ぱぴことブランコ２',
                discription:'ぱぴぷぺぱぴことブランコ',
                imageURL:'vr/002_Ns_papiko.png',
                VRImagePath:'vr/002_VR_papiko.jpg',
                VRAfterImagePath:'vr/002_VR_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/garuru.mp3',                   // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'株式会社ぴやまる'
            },
            {
                LLVindex:2,
                LLVname:'ぱぴこと公園',
                discription:'ぱぴぷぺぱぴこと公園',
                imageURL:'vr/003_Ns_papiko.png',
                VRImagePath:'vr/003_VR_papiko.jpg',
                VRAfterImagePath:'vr/003_VR_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/garuru.mp3',                   // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'株式会社ぴやまる'
            },
            {
                LLVindex:3,
                LLVname:'ぱぴこ撮影会',
                discription:'ぱぴこの撮影会',
                imageURL:'vr/004_Ns_papiko.png',
                VRImagePath:'vr/004_VR_papiko.jpg',
                VRAfterImagePath:'vr/004_VR_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/garuru.mp3',                   // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'ぱぴこ'
            },
            {
                LLVindex:4,
                LLVname:'ぱぴこ撮影会',
                discription:'ぱぴこの撮影会',
                imageURL:'vr/005_Ns_papiko.png',
                VRImagePath:'vr/005_VR_papiko.jpg',
                VRAfterImagePath:'vr/005_VR_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/garuru.mp3',                   // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'ぱぴこ'
            },
            {
                LLVindex:5,
                LLVname:'ぱぴこを探せ',
                discription:'ぱぴこを探せ（入門編）',
                imageURL:'vr/006_Ns_papiko.png',
                VRImagePath:'vr/006_VR_papiko.jpg',
                VRAfterImagePath:'vr/006_VR_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/atari.mp3',                    // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'ぱぴこ'
            },
            {
                LLVindex:6,
                LLVname:'ぱぴこを探せ',
                discription:'ぱぴこを探せ（上級編）',
                imageURL:'vr/007_Ns_papiko.png',
                VRImagePath:'vr/007_VR_papiko.jpg',
                VRAfterImagePath:'vr/007_VR_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/atari.mp3',                    // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'ぱぴこ'
            },
            {
                LLVindex:7,
                LLVname:'ぱぴこ(制服から水着)',
                discription:'ぱぴこが水着になるよ',
                imageURL:'vr/008_Ns_01_papiko.png',
                VRImagePath:'vr/008_VR_01_papiko.jpg',
                VRAfterImagePath:'vr/008_VR_02_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/atari.mp3',                    // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'ぱぴこ'
            },
            {
                LLVindex:8,
                LLVname:'ぱぴこ(制服から水着)',
                discription:'ぱぴこが水着になるよ',
                imageURL:'vr/009_Ns_01_papiko.png',
                VRImagePath:'vr/009_VR_01_papiko.jpg',
                VRAfterImagePath:'vr/009_VR_02_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/atari.mp3',                    // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'ぱぴこ'
            },
            {
                LLVindex:9,
                LLVname:'ぱぴこ特典VR画像',
                discription:'ぱぴこ特典VR画像',
                imageURL:'vr/010_Ns_papiko.png',
                VRImagePath:'vr/010_VR_papiko.jpg',
                VRAfterImagePath:'vr/010_VR_papiko.jpg',    // 転換後のVR画像
                TargetPosition:'-8 -0.0024 -0.198',         // ターゲット１の座標    
                TargetPosition2:'-8 -0.0024 -0.198',        // ターゲット２の座標
                sound:'sound/garuru.mp3',                    // サウンド
                star:'images/target3.png',                  // ターゲットの画像
                star2:'images/target2.png',                 // ターゲットの画像
                author:'ぱぴこ'
            }
        ];    
    
    // View にバインディング
    $scope.LLVSpaceTitle = LLVSpaceTitle;
    $scope.LLVSpace = LLVSpace;

    $scope.viewSpaceDetail = function (video, archive) {
      VideosService.launchPlayer(video.id, video.title);
      if (archive) {
          VideosService.archiveVideo(video);
      }
      $log.info('Launched id:' + video.id + ' and title:' + video.title);
    };

    init();

    function init() {
      $scope.youtube = VideosService.getYoutube();
      $scope.results = VideosService.getResults();
      $scope.history = VideosService.getHistory();
    }

    $scope.isAndroid = function() {
      return ons.platform.isAndroid();
    };

    $scope.toolbarTitle = 'Search';
    
    $scope.updateToolbar = function(title) {
      $scope.toolbarTitle = title;
    };

    $scope.focusInput = function(platform) {
      document.getElementById(platform + '-search-input').focus();
    };

    $scope.blurInput = function(platform) {
      document.getElementById(platform + '-search-input').blur();
    };

    $scope.launch = function (video, archive) {
      VideosService.launchPlayer(video.id, video.title);
      if (archive) {
      	VideosService.archiveVideo(video);
      }
      $log.info('Launched id:' + video.id + ' and title:' + video.title);
    };

    $scope.nextPageToken = '';
    
    $scope.labelSearch = 'Live Links VR 検索';
    $scope.labelHistory = 'You haven\'t watched any video yet!';

    $scope.loading = false;

//    $scope.loadMore = function(done) {
//      $scope.search(false).then(done);
//    };

    $scope.search = function (isNewQuery) {
      $scope.loading = true;
      return $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyAaVxe2e6AbU3FD2pKTQh1_AySRHC1NY8I',
          type: 'video',
          maxResults: '10',
          pageToken: isNewQuery ? '' : $scope.nextPageToken,
          part: 'id,snippet',
          fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken',
          q: this.query
        }
      })
      .success( function (data) {
        if (data.items.length === 0) {
          $scope.label = 'No results were found!';
        }
        VideosService.listResults(data, $scope.nextPageToken && !isNewQuery);
        $scope.nextPageToken = data.nextPageToken;
        $log.info(data);
        $scope.loading = false;
      })
      .error( function (e) {
        $log.info('Search error: ', e);
        $scope.loading = false;
      })
      ;
    };
 
 
    // LLV showDetail
    $scope.showDetail = function ( LLVSpace ) {
        $log.info('LLVindex:' + LLVSpace.LLVindex);
        //$scope.value = LLVindex;
//        $location.path('html/space_detail.html'); // クリック後遷移するテンプレ指定
        //var selectedItem = Data.items[index];
        //Data.selectedItem = selectedItem;
        //$scope.ons.navigator.pushPage('html/space_detail.html', LLVindex);
        myNavigator.pushPage('html/space_detail.html');
    };

    // LLV show VR 
    // 詳細画面へ画面遷移
    $scope._viewVR = function ( LLVSpace ) {         // オブジェクト全体
        $log.info('VR View LLVSpace.LLVindex:' + LLVSpace.LLVindex);
        $log.info('VR View LLVSpace.imageURL:' + LLVSpace.imageURL);
        $scope.VRImagePath = LLVSpace.VRImagePath;  //グローバルスコープでデータ引き渡し 
        $scope.currentIndex = LLVSpace.LLVindex;
//      myNavigator.pushPage('html/view_vr.html',{no: LLVSpace.LLVindex} );
        myNavigator.pushPage('html/detail.html');

    };
    
    // LLV show VR
    // onsenui から a-frame への遷移は無理！
    $scope.showVR = function () {
        location.href('showVR.html');
    };    


    // 詳細画面へ画面遷移    
    $scope.viewVR = function ( LLVSpace ) {         // オブジェクト全体
        $log.info('VR View LLVSpace.LLVindex:' + LLVSpace.LLVindex);
        $log.info('VR View LLVSpace.imageURL:' + LLVSpace.imageURL);
        $scope.VRImagePath = LLVSpace.VRImagePath;  //グローバルスコープでデータ引き渡し 
        $scope.currentIndex = LLVSpace.LLVindex;
        
        // ローカルストレージに格納
        localStorage.setItem('vsound', LLVSpace.sound);         // 音源パス
        localStorage.setItem('vpath', LLVSpace.VRImagePath);    // VR画像パス
        localStorage.setItem('vpath_after', LLVSpace.VRAfterImagePath);     // VR切替後画像パス
        localStorage.setItem('vposition', LLVSpace.TargetPosition);         // ターゲットの位置
        localStorage.setItem('vposition2', LLVSpace.TargetPosition2);         // ターゲットの位置
        localStorage.setItem('vstar', LLVSpace.star);                       // ターゲットの画像
        localStorage.setItem('vstar2', LLVSpace.star2);                       // ターゲットの画像

        
        
        myNavigator.pushPage("html/detail.html");
    };    
    

    // リストへ画面遷移
    $scope.listVR = function () {
//        $log.info('VR View LLVSpace.LLVindex:' + LLVSpace.LLVindex);
//        $log.info('VR View LLVSpace.imageURL:' + LLVSpace.imageURL);
//        $scope.VRImagePath = LLVSpace.VRImagePath;  //グローバルスコープでデータ引き渡し 
//        $scope.currentIndex = LLVSpace.LLVindex;
        myNavigator.pushPage('html/home.html');
        //myNavigator.popPage();
    };    



    // LLV show VR by A-FRAME 
    $scope.viewVRa = function ( LLVindex ) {
        $log.info('VR View (A-FRAME) LLVindex:' + LLVindex);
        myNavigator.pushPage('html/view_vr.html');
    };    

    // LLV show VR by google VrView 
    $scope.viewVRg = function ( LLVindex ) {
        $log.info('VR View (google) LLVindex:' + LLVindex);
        myNavigator.pushPage('html/view_vr_google.html');
    };
    
    $scope.$emit('list:filtered');

});



