!function(){function e(e,t){return{loadData:loadData}}angular.module("boilerplate").factory("getDataFromAPI",e),e.$inject=["$http","LocalStorage"]}(),function(){function e(e){}angular.module("boilerplate").controller("MainController",e),e.$inject=["$scope"]}(),function(){function e(e,t,n,o,i,a){function s(){var e=c.getAttribute("disabled"),t=u.getAttribute("disabled");"disabled"===e&&"disabled"===t&&$("#fightNow").removeClass("hidden").slideDown(200)}function d(){$("#first-fighter .winner").slideUp(200,function(){$(this).addClass("hidden")}),$("#second-fighter .winner").slideUp(200,function(){$(this).addClass("hidden")})}var r=this,l=(document.getElementById("first-fighter").getElementsByClassName("card-fighter")[0],document.getElementById("second-fighter").getElementsByClassName("card-fighter")[0],document.getElementsByClassName("fighter_name")[0],document.getElementsByClassName("fighter_name")[1],document.getElementsByClassName("winner"),document.getElementById("loading1"),document.getElementById("loading2"),""),f="",c=($("#fightNow")[0],document.getElementById("btn1")),u=document.getElementById("btn2");r.nome_fighter="",r.check=function(){""==r.nome_fighter&&($("#first-fighter .card-fighter").slideUp(200,function(){$(this).addClass("hidden")}),c.removeAttribute("disabled"),$("#fightNow").slideUp(200,function(){$(this).addClass("hidden")}),l="",d())},r.add=function(e){l=e;var e=e.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"");""!=e&&void 0!=e&&null!=e&&l!=f?($("#loading1").slideDown(200).removeClass("hidden"),i.verify(e).then(function(t){if(null===t.name)o.set("Lutador inválido! :( ","error"),$("#loading1").slideUp(200,function(){$(this).addClass("hidden"),$('[name="fieldOne"]').val("")}),event.stopPropagation();else if(t){c.setAttribute("disabled","disabled"),r.info=t;var i=r.info.public_gists,d=r.info.public_repos,l=r.info.followers,f=0,u=0,h=0;a.verify(e).then(function(e){r.repositories=e,r.repositories.forEach(function(e,t){var n=e.stargazers_count;u=u+f+n,r.total_stars=u}),r.total=i+d+l+r.total_stars,h=r.total,$("#loading1").slideUp(200,function(){$(this).addClass("hidden")}),$("#first-fighter .card-fighter").slideDown(200,function(){$(this).removeClass("hidden").addClass("animated fadeIn")})}),n(function(){s()},400)}})):l===f&&""!=l?(o.set("Lutador já selecionado, escolha outro! ","error"),event.stopPropagation()):(o.set("Campo 1º lutador vazio! Favor preencher :] ","error"),event.stopPropagation())},r.nome_fighter_2="",r.check2=function(){""==r.nome_fighter_2&&($("#second-fighter .card-fighter").slideUp(200,function(){$(this).addClass("hidden")}),u.removeAttribute("disabled"),$("#fightNow").slideUp(200,function(){$(this).addClass("hidden")}),f="",d())},r.add2=function(e){f=e;var e=e.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"");""!=e&&void 0!=e&&null!=e&&f!=l?($("#loading2").slideDown(200).removeClass("hidden"),i.verify(e).then(function(t){if(null===t.name)o.set("Lutador inválido! :( ","error"),$("#loading2").slideUp(200,function(){$(this).addClass("hidden"),$('[name="fieldTwo"]').val("")}),event.stopPropagation();else if(t){u.setAttribute("disabled","disabled"),r.info2=t;var i=r.info2.public_gists,d=r.info2.public_repos,l=r.info2.followers,f=0,c=0,h=0;a.verify(e).then(function(e){r.repositories2=e,r.repositories2.forEach(function(e,t){var n=e.stargazers_count;c=c+f+n,r.total_stars2=c}),r.total2=i+d+l+r.total_stars2,h=r.total2,$("#loading2").slideUp(200,function(){$(this).addClass("hidden")}),$("#second-fighter .card-fighter").slideDown(200,function(){$(this).removeClass("hidden").addClass("animated fadeIn")})}),n(function(){s()},400)}})):f===l&&""!=f?(o.set("Lutador já selecionado, escolha outro! ","error"),event.stopPropagation()):(o.set("Campo 2º lutador vazio! Favor preencher :] ","error"),event.stopPropagation())},r.calculate=function(e,t,n,i){console.log(e,n),e>n?($("#first-fighter .winner").slideDown(200,function(){$(this).addClass("animated fadeInDown").removeClass("hidden")}),o.set(t+" venceu por "+e+" pontos, limpe os campos para um novo DUELO!","info")):e<n?($("#second-fighter .winner").slideDown(200,function(){$(this).addClass("animated fadeInDown").removeClass("hidden")}),o.set(i+" venceu por "+n+" pontos, limpe os campos para um novo DUELO!","info")):o.set("Empate Técnico!","info")},o.config({theme:"pure",position:"top",duration:2e3,sticky:!1,button:!0,html:!1})}angular.module("boilerplate").controller("ArenaController",e),e.$inject=["$rootScope","$scope","$timeout","ngNotify","VerifyUserService","VerifyRepositoriesService"]}();