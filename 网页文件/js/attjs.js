  function taobao(att){
	     var html = '';
		 if(att.result.length>=0){
		 $('.serch-show').show();
		 for(var i = 0;i<att.result.length;i++){
		 html +="<a target='_blank' href=http://ai.taobao.com/search/index.htm?pid=mm_12811289_2424861_25696240&unid=&source_id=search&key="+att.result[i][0]+">"+att.result[i][0]+"</a>" ;
	  }
		$('.serch-show').html(html);
		}else{
			$('serch-show').hice();
		}
  }
   
  /*------------------图片AJAX------------------------------------------------------------------------*/
  function jsonpCallbackTemai(zhek){
        $('.zhekuo-l-up p').html("<a target='_blank' href='"+zhek.url+"'>"+zhek.title+"</a>"+"&nbsp;"+zhek.subTitle);
	    $('.zhekuo-l-d p').html("<a targer='_blank' href='http:"+zhek.bottomLink+"'>"+zhek.bottomTitle+"</a>")
	    var html='';
	    var temai = '';
	    for(var z=0;z<zhek.logos.length;z++){
	     html +="<a target='_blank' href='http:"+zhek.logos[z].link+"'>"+zhek.logos[z].text+"</a>";	
	    }
	    $('.zhekuo-nav').html(html);
	    for(var te=0;te<zhek.tags.length;te++)
		{
	    temai+="<li><span><a target='_blank' href='http:"+zhek.tags[te][0].link+"'>"+zhek.tags[te][0].text+"</a></span><a target='_blank' href='http:"+zhek.tags[te][1].link+"'>"+zhek.tags[te][1].text+"</a><a target='_blank' href='http:"+zhek.tags[te][2].link+"'>"+zhek.tags[te][2].text+"</a><a target='_blank' href='http:"+zhek.tags[te][3].link+"'>"+zhek.tags[te][3].text+"</a></li>"	
	     }
	    $('.zhekuo-l-d-ul').html(temai);
  }

 function guess(data){
	  var guesshtml='';
      for (var m=0;m<data.result.length;m++)
	  {
	  guesshtml +="<div class='guess-list'><a href='"+data.result[m].clickUrl+"' target='b_lank'><img src='"+data.result[m].pictUrl+"'></a><a href='"+data.result[m].clickUrl+"' target='b_lank'><span>￥"+data.result[m].discountPrice+"</span></a><p><a href='"+data.result[m].clickUrl+"' target='b_lank'>"+data.result[m].title+"</a></p></div>";
	  $('.guess-item').html(guesshtml);
	   } 
      for(var n = 0;n<data.result.length;n++){
	     if(n % 4!=0){
		    $('.guess-item').children('div').eq(n).css("margin-left","30px");
	     }
	  }
  }
 
 function charge(data){
	  $(".charge-list li:eq(1)").html(data.carrier)
 }
/*------------------载入开始----------------------------*/

window.onload = function(){

/*--------------顶部-----------------------------------------------*/
  $('.top-dropdown').mouseenter(function(){
	  $(this).css('background','#fff').children('div').show();
	  $(this).children('a').children('span').addClass("top-rotate-span");
  })
  $('.top-dropdown').mouseleave(function(){
	  $(this).css('background','#f5f5f5').children('div').hide();
	  $(this).children('a').children('span').removeClass("top-rotate-span");
  })
/*--------------头部开始----------------------*/
   var day = new Date()
   function serch(){
	   var q = document.getElementById("q");
	   if(q.value != "")
	   {
	   var iscript = document.createElement('script');
       iscript.src ="https://suggest.taobao.com/sug?&clk1=&code=utf-8&q="+q.value+"&callback=taobao&t="+day.getTime();
	   $("body").append(iscript);
	   }else{
	        $('.serch-show').hide();
	    }
	}
	  
   $('#q').keyup(function(){serch();})
   $('#q').focus(function(){serch();})
   $("#q").blur(function(){$('.serch-show').fadeOut(300);})
   $('#serchbtn').click(function(){
      var m = document.getElementById('serchform');
	  var q = document.getElementById('q').value;
	  m.action="http://ai.taobao.com/search/index.htm?pid=mm_12811289_2424861_25696240&unid=&source_id=search&key="+q; 
	})
/*--------------头部结束----------------------*/
/*---------------------------导航NAV----------------------------------------*/
     var rbg = ["#485ab6","#fe6cb3","#3eabe6","#ec244b","#779f24","#e3751e","#c64adc","#db8e5a"];
   $('.nav-ul li').mouseenter(function(){
	   var m = $('.nav-ul li').index($(this));
	   $(this).css({"border-color":rbg[m],"z-index":"7","border-right-color":"#fff"}).children().eq(0).css("background",rbg[m]).children().css({"color":"#fff"});
	   $(this).children().eq(1).css({"border-color":rbg[m],"border-right-color":"white"});
	   $('.nav-content').show().css({"border-color":rbg[m]}).children('div').eq(m).show().siblings().hide();
	   $(this).siblings().css({"border":"1px solid #f1f1f1","z-index":"4","border-bottom":"1px solid #fff"}).children("div").eq(0).css("background","#f1f1f1");
	   $(".nav-ul").css("border-bottom-color","#f1f1f1");
	})
	
	
   $('.nav-ul li').mouseleave(function(e){
       var i = $('.nav-ul li').index($(this));	
	   var x=e.pageX;
	   var m= $('.content-mid').get(0).offsetLeft+$('.nav-ul').width();
       if(x >= m){
		  return false;
	  }else if(x<m){
		   $('.nav-content').hide();
		   $(this).css({"border":"1px solid #f1f1f1","border-bottom":"1px solid white"});
		   $(".nav-type").css('background','#f1f1f1').children('a').css('color',rbg[i]);  
		   $('.nav-ul li:last').css("border-bottom","1px solid #f1f1f1");      
		   $(".nav-type-list").css({"border":"1px solid #fff","border-right-color":"white",});
		   $(".nav-ul").css("border-bottom-color","white")
		   for(var k=0;k<rbg.length;k++){
		     $('.nav-ul li').eq(k).children('div:first').children('a').css({"color":rbg[k]});
		  }
	  }
	})
	
   $('.nav-content').mouseenter(function(){ $(this).show();})
   $('.nav-content').mouseleave(function(){
	   $(this).hide();
	   for(var k=0;k<rbg.length;k++){
         $('.nav-ul li').eq(k).css("border","1px solid #f1f1f1").children('div').eq(0).css("background","#f1f1f1").children('a').css("color",rbg[k]);
		 $('.nav-type-list').css({"border":"1px solid #fff"});
	    }
   })
	/*---------------------------导航结束----------------------------------------*/
	/*---------------------------图片轮播----------------------------------------*/
   $('.nav-mid li:first').mouseenter(function(){
		$(this).children('span').addClass('top-rotate-span').siblings('div').fadeIn(200);
	})
   $('.nav-mid li:first').mouseleave(function(){
		$(this).children('span').removeClass('top-rotate-span').siblings('div').fadeOut(200);
	})
	
	var imgMove = $('.imgmove-ul1');
	var imgmovenum =$('.imgmove-num li');
	var previmg = $('.previmg');
	var nestimg = $('.nestimg');
	var imgmoveone =$('.img-moveone');
	////////////////////////////////////////轮播通用框
   imgmove=function(one,two,three,nest,prev,speed){
		var rumnum = 0;
		one.children().eq(0).clone().appendTo(one);
		one.width(one.children().eq(0).width()*one.children().length);
		function move(){
		  rumnum++;
		  if(rumnum==one.children().length){
		      one.css('left','0')
			  rumnum = 1
		  }
		  if(rumnum==-1){
			 one.css({ left: -(one.children().length- 1) * one.children().eq(0).width()+'px' });
             rumnum = one.children().length - 2;  
		  }
		  if(rumnum ==  one.children().length - 1){
			   two.eq(0).addClass('imgactive').siblings().removeClass('imgactive');
          } else {
                 two.eq(rumnum).addClass('imgactive').siblings().removeClass('imgactive');
          }
		  one.stop().animate({left:-rumnum * one.children().eq(0).width()})
		}
		
		var t=setInterval(move,speed);
		three.mouseover(function(){clearInterval(t);});
		three.mouseleave(function(){
	      t=setInterval(move,speed);
		})
		two.on("mouseover",function(){
		   rumnum=two.index(this)-1 ;
		   move();
		})
		nest.click(function(){
		   move();
		})
		prev.click(function(){
		   rumnum--;
		   if(rumnum==-1){
			  one.css({ left: -(one.children().length- 1) * one.children().eq(0).width()+'px' });
              rumnum = one.children().length - 2;  
		   }
		   one.stop().animate({left:-rumnum * one.children().eq(0).width()}) ;
		   two.eq(rumnum).addClass('imgactive').siblings().removeClass('imgactive');
		})
	}
	
  imgmove(imgMove,imgmovenum,imgmoveone,nestimg,previmg,2000);
  imgmove($('.img-movetwo-ul'),$('none'),$('.img-movetwo'),$('.move-2nd-nest'),$('.move-2nd-prev'),3000)
/*---------------------------图片轮播结束----------------------------------------*/
/*---------------------------折扣----------------------------------------*/
   var zscript = document.createElement('script');
   zscript.src ="http://mo.m.taobao.com/atb/temai_right_tags?_tb_token_=dah2JxjyOsp&__ajax__=1&clk1=&callback=jsonpCallbackTemai&t="+day.getTime();
   $("body").append(zscript);
   zkmove();
   function zkmove(){
        var xml =new XMLHttpRequest();	
            xml.open("get","../ajax/zkmove.php");
			xml.onreadystatechange = function(){
				if(xml.readyState == 4 && xml.status == 200)
				{
					var data = xml.responseText;
					var zk = JSON.parse(data);
					var zkmove = ''
					for(var m = 1;m<9;m++){
						for(var n = 0;n<5;n++){
						  	zkmove += "<div class='items'><div class='items-list'><a href='"+zk.result.items['10'+m][n].tkUrl+"' target='b_lank'><img src='"+zk.result.items['10'+m][n].pictUrl+"'></a><p><a href='"+zk.result.items['10'+m][n].tkUrl+"' target='b_lank'>"+zk.result.items['10'+m][n].title+"</a></p><strong>"+zk.result.items['10'+m][n].zkPrice+"</strong><del>"+zk.result.items['10'+m][n].reservePrice+"</del><span>包邮</span></div></div>"
					   }
				    }
			       $('.result').html(zkmove);
			     }
			 for(var j = 0 ; j<5;j++){
				 for(var k = 0;k<8;k++){
					  $('.result').children('div').eq(k).remove().appendTo($('.result'+j));
				 }   
			  }
			 $('.result').children('div').remove().appendTo($(".result4"));
			 $('.result').remove().appendTo($(".zk-move"));
			}
		  xml.send(null);  
   }
  imgmove($('.zk-move-wrap'),$('.zk-move-num li'),$('.zhekuo-r'),$('none'),$('none'),4000);
 <!------------------------------折扣结束----------------------------------------------------->
  <!------------------------------logostyle----------------------------------------------------->
  imgmove($('.logo-move-wrap'),$('.logo-style-ul li'),$('.logo-style-show'),$('.logo-R'),$('.logo-L'),3000);
  logo();
  function logo(){
	  var xml =new XMLHttpRequest();	
          xml.open("get","../ajax/logostyle.php");
		  xml.onreadystatechange = function(){
			if(xml.readyState == 4 && xml.status == 200)
			{
			    var data = xml.responseText;
			    var logo = JSON.parse(data);
				var lghtml = '';
				for(var m = 0;m<logo.result.length;m++){
					lghtml +="<li><a href='"+logo.result[m].brandUrl+"' target='b_lank'><img src='"+logo.result[m].brandLogoUrl+"'></a><div class='logo-style-name'><a href='"+logo.result[m].brandUrl+"' target='b_lank'>"+logo.result[m].logoText+"</a></div></li>"		
				 }
			    $('.logo-style-show-ul').html(lghtml);
			  }
			   for (var n = 0;n<5;n++){
			      for(var k = 0;k<20;k++){
				      $('.logo-style-show-ul').children('li').eq(k).remove().appendTo($('.logo-style-ul-'+(n+1)));
			      }
			   }
			  $('.logo-style-show-ul').children('li').remove().appendTo($(".logo-style-ul-5"));
			  $('.logo-style-show-ul').remove().appendTo($(".logo-style-show"));;
			}
		  xml.send(null);  
	
  }
  /////////////////////////////猜你喜欢
	var guesscript = document.createElement('script');
        guesscript.src ="http://ai.taobao.com/api/v1/aitaobao/indexk2likeitems.json?_tb_token_=nJUGkJWB1vp&__ajax__=1&clk1=&count=120&nickName=&ac=Q62WD%2FhmiicCAXrkPpzOInWj&callback=guess&t="+day.getTime();
        $(guesscript).appendTo($("body"));
 <!------------------------------logostyle----------------------------------------------------->
 <!------------------------------两边导航----------------------------------------------------->
  $(window).scroll(function(){
	  var m = $(this).scrollTop();
	  if(m>760){
		  $('.level-nav').show();
		  $('.level-ul li').eq(0).addClass('level-show').siblings().removeClass('level-show');
		  $('.r-sidebar-ul li:last').show();
		}else{
		  $('.level-nav').hide();
		  $('.r-sidebar-ul li:last').hide();
	   }
	  if(m>1100){
	    $('.level-ul li').eq(1).addClass('level-show').siblings().removeClass('level-show');
	  }
	  if(m>1400){
	    $('.level-ul li').eq(2).addClass('level-show').siblings().removeClass('level-show');
	  }
	  if(m>1900){
	    $('.level-ul li').eq(3).addClass('level-show').siblings().removeClass('level-show');
	  }
	  if(m>2300){
	    $('.level-ul li').eq(4).addClass('level-show').siblings().removeClass('level-show');
	  }
	  if(m>2800){
	    $('.level-ul li').eq(5).addClass('level-show').siblings().removeClass('level-show');
	  }
	  if(m>3300){
	    $('.level-ul li').eq(6).addClass('level-show').siblings().removeClass('level-show');
      }
	  if(m>3800){
	    $('.level-ul li').eq(7).addClass('level-show').siblings().removeClass('level-show');
	  }
	  if(m>4300){
	    $('.level-ul li').eq(8).addClass('level-show').siblings().removeClass('level-show');
	  }
	  if(m>4800){
	    $('.level-ul li').eq(9).addClass('level-show').siblings().removeClass('level-show');
	  }
  })
  $(".r-sidebar-ul li:last").css("background","#fa4333");
  $('.level-ul li').click(function(){
	  var m =  $('.level-ul li').index(this);
	
	  if(m == 0){
		$('html,body').animate({scrollTop:"780px"},400)
	  }  
	  if(m==1){
	    $('html,body').animate({scrollTop:"1380px"},400)
	  }
	  if(m>1){
	    $('html,body').animate({scrollTop:1600+465*(m-2)+"px"},400)
	  }
  })
  <!------------------------------右面导航----------------------------------------------------->
  $('.r-sidebar-ul li').mouseenter(function(){
	 $(this).children('div,span').show();  
  })
  $('.r-sidebar-ul li').mouseleave(function(){
	 $(this).children('div,span').hide(); 
	 if(window.event.toElement == null){
	  return false;
	 }
  })
  $('.r-sidebar-ul li:last').click(function(){
     $("html,body").animate({scrollTop:0},400);
  })
  $("#charge-text").keyup(function(){
	  if(this.value.length>10){ 
      var czscript = document.createElement('script');
      czscript.src="https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel="+this.value+"&callback=charge&t="+day.getTime();
	  $("body").append(czscript);
	  $("#charge-submit").css("background","red");
	  }else{
		  $(".charge-list li:eq(1)").html("运营商、地区");
		  $("#charge-submit").css("background","#666");
	 }
  })
  $(".china-ticket p select,.internation-ticket p select").mouseleave(function(){
	  if(window.event.toElement == null){
		 return false;  
	   } 
	})
  $(".charge-select").change(function(){
  	 var m =$(".charge-select option:selected").index();
	 var jiage = ["19-20","49-50","99-100"];
	 $(".charge-list li:eq(3)").html("￥"+jiage[m]);
  })
  $(".ticket-banner ul li:last").hide();
  $(".ticket-style p").eq(3).css({"text-align":"right","padding-right":"37px"});
  $(".internation-ticket p").eq(3).css({"text-align":"right","padding-right":"37px"});
  $(".ticket-banner ul li:first").css("background","#f0f0f0");
  $(".ticket-banner ul li").mouseover(function(){
	 $(this).css("background","#f0f0f0").siblings().css("background","#fff");
	 var m =  $(".ticket-banner ul li").index(this);
	 if(m == 0){
		 $(".ticket-wrap").children().eq(1).show();
		 $(".ticket-wrap").children().eq(2).hide();
	 }
	 if(m == 1){
		 $(".ticket-wrap").children().eq(2).show();
		 $(".ticket-wrap").children().eq(1).hide();
	 }
 })
 
 /////////////////导航两边位置
  var owidth = $(window).width();
      $(".level-nav").css({"left":(owidth-1200)/2-68+"px"});
	  $(".right-sidebar").css("right",(owidth-1200)/2-52+"px");
  $(window).resize(function(){
	  var owidth = $(window).width();
      $(".level-nav").css({"left":(owidth-1200)/2-68+"px"});
	  $(".right-sidebar").css("right",(owidth-1200)/2-52+"px");
  })
}