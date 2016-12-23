(function() {
	'use strict';

	angular.module('ionic.contrib.ui.ionThread', ['SFWApp'])
		.directive('ionComment', ionComment)
		.directive('ionThread', ionThread);

	function ionComment() {
		return {
			restrict: 'E',
			scope: {
				comment: '='
			},
			template: '<ion-item class="ion-comment item">\
						<div class="ion-comment--author">{{comment.from.name}}:</div>\
						<div class="ion-comment--score"><span class="ion-arrow-up-a"></span>{{comment.like_count || 0}}</div>\
						<div class="ion-comment--text">{{comment.message}}</div>\
						<div class="ion-comment--replies">{{comment.comments.data.length || 0}} <span ng-if="comment.comments.data.length==1">reply</span><span ng-if="comment.comments.data.length!=1">replies</span></div>\
					    <div class="ion-comment--author rplyCommentDiv" ng-if="showCommentDiv"></div>\
					   </ion-item>',
			controller: function($scope,FacebookGraphAPI) {
				$scope.showCommentDiv =false;
				$scope.upvoteComment = function() {}

				$scope.downvoteComment = function() {}

				$scope.replyToComment = function() {
					$scope.showCommentDiv = !$scope.showCommentDiv;
				}
				$scope.postReply =function(commentID,comment){
					console.log(commentID);
					console.log(comment);
					FacebookGraphAPI.checkLoginStatus().then(function(data) {
					  console.log('User is Logged In');
					  console.log(data);
					  //FacebookGraphAPI.postReplyToComment();
					}, function(error) {
					  console.log('Login Error');
					});
				}
			}
		}
	}

	function ionThread() {
		return {
			restrict: 'E',
			scope: {
				comments: '='
			},
			//Replace ng-if="!comment.showChildren" with ng-if="comment.showChildren" to hide all child comments by default
			//Replace comment.data.replies.data.children according to the API you are using
			template: '<script type="text/ng-template" id="node.html">\
							<ion-comment ng-click="toggleComment(comment)" comment="comment">\
							</ion-comment>\
							<div class="reddit-post--comment--container">\
								 <ul ng-if="comment.comments.data.length!=0" class="animate-if ion-comment--children">\
								    <li ng-repeat="comment in comment.comments.data">\
								        <ng-include src="\'node.html\'"/>\
								    </li>\
								</ul>\
							</div>\
						</script>\
						<ion-list ng-if="comments && comments.length > 0">\
						  <ul>\
						    <li ng-repeat="comment in comments">\
						        <ng-include src="\'node.html\'"/>\
						    </li>\
						  </ul>\
						</ion-list>',
			controller: function($scope,FacebookGraphAPI) {
				$scope.postComment = function(comment) {
					console.log(comment);
					FacebookGraphAPI.checkLoginStatus().then(function(data) {
					  FacebookGraphAPI.postComment();
					}, function(error) {
					});
				}			
			}
		}
	}
})();
