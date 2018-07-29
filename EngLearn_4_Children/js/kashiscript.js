		
	var ImageArray=new Array(9);
			var ImageDisplayed=new Array(16);						
			function Initialization()
			{
				for(i=0;i<ImageArray.length;i++)
				{
					ImageArray[i]=new Image();
				}
				ImageArray[0].src="gamePic/Pic1.jpg";
				ImageArray[1].src="gamePic/Pic2.jpg";
				ImageArray[2].src="gamePic/Pic3.jpg";
				ImageArray[3].src="gamePic/Pic4.jpg";
				ImageArray[4].src="gamePic/Pic5.jpg";
				ImageArray[5].src="gamePic/Pic6.jpg";
				ImageArray[6].src="gamePic/Pic7.jpg";
				ImageArray[7].src="gamePic/Pic8.jpg";
				ImageArray[8].src="gamePic/none1.jpg";
				for(i=0;i<ImageDisplayed.length;i++)
				{
					ImageDisplayed[i]=i%8;
				}
				for(i=0;i<ImageDisplayed.length;i++)
				{
					var tmpImage=ImageDisplayed[i];
					var x=Math.round(Math.random()*(15));
					ImageDisplayed[i]=ImageDisplayed[x];
					ImageDisplayed[x]=tmpImage;
				}
			}
			//***************************************************

			function Display()
			{
				document.write("<table border='0' align='center'>");				
				for(i=0;i<4;i++)
				{
					document.write("<tr>");
					for(j=0;j<4;j++)
					{
						document.write("<td style='background-image:url(\"gamePic/back.png\"); ");
						document.write("background-repeat:no-repeat'><a href='javascript:void(0)' ");
						document.write("onclick='Click("+ (i*4+j) +")' >");
						document.write("<img src='gamePic/none1.jpg' width='96' height='96'/>");
						document.write("</a>");
						document.write("</td>");
					}
					document.write("</tr>");
				}
				document.write("</table>");
			}
			
			//***************************************************
			
			click0=0;
			click1=0;
			click2=0;
			function Click(n)
			{
				if(click0==0)
				{
					click0=1;
					click1=n;
					document.images[n].src=ImageArray[ImageDisplayed[n]].src;
					
					
				}
				else if(click0==1)
				{
					click0=0;
					click2=n;
					document.images[n].src=ImageArray[ImageDisplayed[n]].src;
					if(click1==click2 || ImageDisplayed[click1]!=ImageDisplayed[click2])
						
					{
	
						
						
						setTimeout("ResetImages()",1000);
					}
				}
				if(click1==click2){
					
					image[n].opacity=0;
				}
				
				//alert(search());
				
				var img=document.getElementById("congra");
				var timer=document.getElementById("countdown");
				if(TestWin())
				{
					document.getElementById("hh").innerHTML="You Win !";
					img.hidden=false;
					
					
					
				}
			}
			//***************************************************
			
			function TestWin()
			{
				for(i=0;i<document.images.length;i++)
				{
					if(document.images[i].src==ImageArray[8].src)
					{
						return false;
					}
				}
				
				return true;
			}
			//***************************************************
			
			function ResetImages()
			{
				document.images[click1].src=ImageArray[8].src;
				document.images[click2].src=ImageArray[8].src;
			}