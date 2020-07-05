$(function(){
	'use strict';
	$("#nav li").hover(function(){
		$(this).find(".submenu").show();
	},function(){
		$(this).find(".submenu").hide();
	});
});

// JavaScript Document