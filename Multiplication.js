//迴圈練習-九九乘法表
for(i=2;i<10;i++){
    document.write(
        '<p style="float:left;width:6.5em;margin:.5em;padding:.5em;background-color:rgba(150,150,150,0.8);text-align:center;">' +
        '<span style="font-size:1.5em;font-weight:bold;color:#fff;">' + i + '</span><br/>');
    for(r=1;r<10;r++){
		if(i*r<10){
			var a='&nbsp;'
		}else{var a=''};
		document.write(i + '&nbsp;&times;&nbsp;' + r + '&nbsp;=&nbsp;' + a + i*r + a + '<br/>')
	};
    document.write('</p>');
};