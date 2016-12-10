
star_img = "stars.png";
star_no = 15;

if (typeof(window.pageYOffset) == "number")
{
	star_browser_width = window.innerWidth;
	star_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	star_browser_width = document.body.offsetWidth;
	star_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	star_browser_width = document.documentElement.offsetWidth;
	star_browser_height = document.documentElement.offsetHeight;
}
else
{
	star_browser_width = 500;
	star_browser_height = 500;	
}

star_dx = [];
star_xp = [];
star_yp = [];
star_am = [];
star_stx = [];
star_sty = [];

for (i = 0; i < star_no; i++) 
{ 
	star_dx[i] = 0; 
	star_xp[i] = Math.random()*(star_browser_width-50);
	star_yp[i] = Math.random()*star_browser_height;
	star_am[i] = Math.random()*10; 
	star_stx[i] = 0.02 + Math.random()/10;
	star_sty[i] = 5 + Math.random();
	document.write("<\div id=\"star_flake"+ i +"\" style=\"position:absolute;z-index:"+(i-999)+"\"><\img src=\""+star_img+"\" border=\"0\"><\/div>");
}

function StarStart() 
{ 
	for (i = 0; i < star_no; i++) 
	{ 
		star_yp[i] += star_sty[i];
		if (star_yp[i] > star_browser_height-50) {
		    star_xp[i] = Math.random()*(star_browser_width-star_am[i]-30);
			star_yp[i] = 0;
			star_stx[i] = 0.02 + Math.random()/10;
			star_sty[i] = 5 + Math.random();
		}
		star_dx[i] += star_stx[i];
		document.getElementById("star_flake"+i).style.top=star_yp[i]+"px";
		document.getElementById("star_flake"+i).style.left=star_xp[i] + star_am[i]*Math.sin(star_dx[i])+"px";
	}
	star_time = setTimeout(StarStart, 10);
}
StarStart();
