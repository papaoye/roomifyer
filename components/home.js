/**
 * 
 */

angular.module('RoomifyerApp', ['ngSanitize', 'times.tabletop', 'ui.bootstrap']).config(function(TabletopProvider){
    TabletopProvider.setTabletopOptions({
      key: 'https://docs.google.com/spreadsheets/d/1QpyBkyM6tvoGOyD-9IPW030jEqfu7rONuEVGuUGCsFM/pubhtml',
      simpleSheet: true
    });
  })
  .controller('HomeController', function($scope, Tabletop){
    
    var homeModel = this;
    homeModel.userName = "Customer";
    
    Tabletop.then(function(ttdata){
        //alert(JSON.stringify(ttdata[1)));
        var dom = jsel(ttdata[0]);
        
//        dom.map({
//            'city': 'stub'
//        });
        
        //alert(JSON.stringify(dom));
        
        var data = ttdata[0];
        //alert(JSON.stringify(data[0]));
    });
  });
