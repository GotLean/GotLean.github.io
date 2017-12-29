  function OpenEl(){
	  if(document.getElementById('DD').style.display!='block'){
	  document.getElementById('DD').style.display='block';
	  document.getElementById('Contact').style.background='white';
	  document.getElementById('Contact').style.color='black';
	  }
	  else{
		document.getElementById('DD').style.display='none';
		document.getElementById('Contact').style.background= '#222';
		document.getElementById('Contact').style.color='#999';
	  }
  }