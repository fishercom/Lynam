(function(){
	
	var config = {
		apiKey: "AIzaSyAZfL0a9UQgHaiSLLAIALHVmMez_fso97E",
		authDomain: "lynam-fd60b.firebaseapp.com",
		databaseURL: "https://lynam-fd60b.firebaseio.com",
		storageBucket: "lynam-fd60b.appspot.com",
		messagingSenderId: "925222637962"
	};

	firebase.initializeApp(config);
	
	angular
		.module('app', ['firebase'])
		.controller('myController', function($firebaseObject){
			
			const rootRef=firebase.database().ref().child('angular');
			const ref=rootRef.child('object');
			
			this.object=$firebaseObject(ref);
		});
	
}());