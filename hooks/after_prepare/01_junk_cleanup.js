#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

// var foldersToProcess = [
//     "js",
//     "css"

// ];

var foldersToDelete = [
    "source",
    "lib/jquery/src",
    "lib/moment",
    "lib/angular",
    "lib/ng-fastclick",
    "lib/angular-animate",
    "lib/angular-lazy-img",
    "lib/angular-sanitize",
    "lib/angular-ui-router",
    "lib/angular-vimeo-embed",
    "lib/imageCachefactory",
    "lib/ion-sticky",
    "lib/localforage",
    "lib/Swiper",
    "lib/underscore",
    "lib/Vimeo-jQuery-API-0.10.1"
    // "lib/moment/locale",
    // "lib/moment/src",
    // "lib/moment/templates"
    // "app/directiv"
];
// var filesToDelete = [
//     "karmaOnBrowser.conf.js",
//     "karmaOnEmulators.conf.js",
//     "SpecRunner.html"
// ];

var androidPlatformsDir = "platforms/android/assets/www/";
var iosPlatformsDir = "platforms/ios/www/";


function deleteFolderRecursive(path){
    if( fs.existsSync(path) ) {
         fs.readdirSync(path).forEach(function(file,index){
             var curPath = path + "/" + file;
             if(fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
             } else { // delete file
                fs.unlinkSync(curPath);
             }
         });
         fs.rmdirSync(path);
    }
}

foldersToDelete.forEach(function(folder) {
    deleteFolderRecursive(iosPlatformsDir + folder);
    deleteFolderRecursive(androidPlatformsDir + folder);
});