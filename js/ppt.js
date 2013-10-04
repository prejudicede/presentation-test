// JavaScript Document
(function(document,window){
	var creatElement=function(id,cla,text){
		var el= document.createElement('DIV');
		el.innerHTML=text;
		el.setAttribute('id',id);
		el.classList.add(cla);
		document.getElementsByTagName('body')[0].appendChild(el);
	
	}
    creatElement('pre','nav','<- Previous');
    creatElement('nex','nav','Next ->');
	
	
	
	})(document,window);

(function(document,window){
	
	
	
	var getById=function(id){
		return document.getElementById(id);
	};
	
	var showButton=function(e){
		e.target.classList.add("navShow");
		};

	var hiddenButton=function(e){
		e.target.classList.remove('navShow');
		};
		
	
	var current=function( ) {    
        return document.getElementById('ppt').querySelector('.current');
    }();
		
	var previous=function(e){
		
		var now=current.previousSibling;		
		while((now)&&(now.tagName!='DIV')){
			now=now.previousSibling;
			if(now.tagName=='DIV'){
			now.classList.add("current");
			current.classList.remove('current');
			current=now;
			}
			
		}	
	};
	
	var next=function(e){
		
		var now=current.nextSibling;		
		while((now)&&(now.tagName!='DIV')){
			now=now.nextSibling;
			if(now.tagName=='DIV'){
			now.classList.add("current");
			current.classList.remove('current');
			current=now;
			}
			
		}	
	};
	
	/*******************************************************/
	
	var pre=getById('pre');

	pre.addEventListener('mouseover',showButton,false);				
	pre.addEventListener('mouseout',hiddenButton,false);
	pre.addEventListener('click',previous,false);
	
		
	var pre=getById('nex');
	nex.addEventListener('mouseover',showButton,false);
	nex.addEventListener('mouseout',hiddenButton,false);
	nex.addEventListener('click',next,false);
	
	
	
	
	})(document,window);