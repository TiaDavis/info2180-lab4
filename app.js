window.onload = function() {

    const  Btn = document.querySelector('button');
    const httpReq= new XMLHttpRequest();
  
    Btn.addEventListener('click', function(ele) {
      ele.preventDefault();
  
      // GET Request
      const  url = "superheroes.php";
      httpReq.onreadystatechange = callback;
      httpReq.open('GET', url);
      httpReq.send();
    });
  
    function callback() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) {
          const resp = httpReq.responseText;
          /*const hero = document.querySelector('#quote');*/
         /* quote.innerHTML = response;*/
            alert(resp);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  
  }