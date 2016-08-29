'use strict'

var myApp = angular.module('myApp', []);

myApp.controller('toolsCtrl', function ($scope) {
//==================
//
//insert multiple angular icons styles
//
//==================
	$scope.icons = [

		{widths: '48px', background_position: '2px -4px', marg: '20px'},
		{widths: '46px', background_position: '-750px -4px', marg: '21px'},
		{widths: '49px', background_position: '-157px -4px', marg: '20px'},
		{widths: '49px', background_position: '-796px -6px', marg: '20px'},
		{widths: '54px', background_position: '-850px -5px', marg: '20px'},
		{widths: '61px', background_position: '-47px -8px', marg: '19px'},
		{widths: '51px', background_position: '-649px -5px', marg: '20px'},
		{widths: '54px', background_position: '-213px -4px', marg: '20px'},
		{widths: '48px', background_position: '-701px -5px', marg: '22px'},
		{widths: '58px', background_position: '-590px -7px', marg: '18px'},
		{widths: '56px', background_position: '-528px -6px', marg: '19px'},
		{widths: '48px', background_position: '-318px -7px', marg: '21px'},
		{widths: '48px', background_position: '-270px -4px', marg: '22px'},
		{widths: '55px', background_position: '-469px -7px', marg: '18px'},
		{widths: '54px', background_position: '-415px -6px', marg: '19px'},
		{widths: '45px', background_position: '-370px -5px', marg: '23px'},
		{widths: '48px', background_position: '-105px -5px', marg: '21px'},
	];

//================
//
// functionality for the choice
//
//================
	var find = $scope.finder; 
	$scope.finder = [
    		{
    			widths: '70px', 
    			bgp: '0px 0px', 
    			feaches: 'Human assistance', 
    			feachInfo: 'Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure.'
    		},
    		{
    			widths: '70px', 
    			bgp: '-1125px 0px', 
    			feaches: 'Internet security', 
    			feachInfo: 'Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you\'re using the Internet.'
    		},
    		{
    			widths: '70px', 
    			bgp: '-238px 0px', 
    			feaches: 'Anti-theft', 
    			feachInfo: 'If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.'
    		},
    		{
    			widths: '70px', 
    			bgp: '-1197px 0px', 
    			feaches: 'Fast cleanup', 
    			feachInfo: 'Quickly remove junk files (such as temporary caches, logs, unused language packages and legacy application parts) that may take up hard drive space and slow down your Mac.'
    		},{
    			widths: '72px', 
    			bgp: '-1276px 0px', 
    			feaches: 'Duplicates finder', 
    			feachInfo: 'Delete unnecessary copies of your files and free up disk space on your Mac.'
    		},
    		{
    			widths: '93px', 
    			bgp: '-71px 0px', 
    			feaches: 'Geek on demand', 
    			feachInfo: 'Geek on Demand is the ultimate tool when you have a problem or question that is related to your Mac\'s health and need an expert\'s opinion or technical assistance.'
    		},
    		{
    			widths: '75px', 
    			bgp: '-975px 0px', 
    			feaches: 'Update tracker', 
    			feachInfo: 'With Update Tracker you will never miss out any important security patches and upgrades for most of your applications.'
    		},
    		{
    			widths: '78px', 
    			bgp: '-320px 0px', 
    			feaches: 'Backup', 
    			feachInfo: 'Backing up your important files and folders is an easy, fast and reliable way to keep them safe and secure.'
    		},
    		{
    			widths: '70px', 
    			bgp: '-1052px 0px', 
    			feaches: 'Files recovery', 
    			feachInfo: 'Now you can recover files that were once deleted from the Trash!'
    		},
    		{
    			widths: '87px', 
    			bgp: '-885px 0px', 
    			feaches: 'Disk usage', 
    			feachInfo: 'Visualize the size of the folders on your hard drive so you can tell at a glance which folders are taking up the most space.'
    		},
    		{
    			widths: '83px', 
    			bgp: '-792px 0px', 
    			feaches: 'Smart uninstaller', 
    			feachInfo: 'Prevent future junk by making sure that you\'re not just sweeping old applications under the rug when you are trying to delete them.'
    		},
    		{
    			widths: '71px', 
    			bgp: '-478px 0px', 
    			feaches: 'Data encryptor', 
    			feachInfo: '12.	Make your restricted files absolutely invisible to anyone without the right password, protecting even your most sensitive information.'
    		},
    		{
    			widths: '70px', 
    			bgp: '-407px 0px', 
    			feaches: 'Default apps', 
    			feachInfo: '13.	The easiest way to define which application will open each file type.'
    		},
    		{
    			widths: '78px', 
    			bgp: '-707px 0px', 
    			feaches: 'Shredder', 
    			feachInfo: 'Securely delete files and folders that you don\'t ever want to be recovered.'
    		},
    		{
    			widths: '81px', 
    			bgp: '-623px 0px', 
    			feaches: 'Files finder', 
    			feachInfo: '1Quickly search for and find any lost or misplaced file, even if you don\'t know in which folder it is located.'
    		},
    		{
    			widths: '70px', 
    			bgp: '-553px 0px', 
    			feaches: 'Login items', 
    			feachInfo: 'Take control of how fast your Mac boots up by deciding which applications launch every time you start it.'
    		},
    		{
    			widths: '70px', 
    			bgp: '-160px 0px', 
    			feaches: 'Memory Cleaner', 
    			feachInfo: 'Automatically optimizes and monitors your Mac’s RAM memory while you are performing your daily tasks.'
    		}
    	];
	// default feaches, bgp, width, and feachInfo for CHOICE
	$scope.bg = $scope.finder[0].bgp;
	$scope.wid = $scope.finder[0].widths;
	$scope.feach = $scope.finder[0].feaches;
	$scope.fInf = $scope.finder[0].feachInfo;

    $scope.counter = function(index) {
    	var coordinates = $scope.finder[index];
    	$scope.bg = coordinates.bgp;
    	$scope.wid = coordinates.widths;
    	$scope.feach = coordinates.feaches;
    	$scope.fInf = coordinates.feachInfo

    }


});