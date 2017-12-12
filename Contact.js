function myfunt(){
if (document.getElementById('SideMenu').style.display==='block'){
	document.getElementById('SideMenu').style.display='none';
	document.getElementById('Contact').firstChild.data='Contact';
}
else{
	document.getElementById('SideMenu').style.display='block';
	document.getElementById('Contact').firstChild.data='Close Contact';
}
}
