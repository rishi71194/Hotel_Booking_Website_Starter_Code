headerTemplate();
footerTemplate();

function headerTemplate() {
    let headertemplate = '<a href="index.html" target="_self"><img src="assests/images/logo.png" alt="logo" id="logo" width="150" height="100"></a>' +
    '<span><button type="button" class="btn btn-light" data-toggle="modal" data-target="#loginModal" onclick="logInOut()" id="login-btn">LOGIN</button></span>' +
        '<div class="modal fade" tabindex="-1" id="loginModal" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog" role="document" >' +
          '<div class="modal-content">'+
            '<div class="modal-header">'+
              '<h5 class="modal-title" id="loginModalLabel">Please Login</h5>'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                '<span aria-hidden="true">&times;</span>'+
              '</button>'+
            '</div>'+

            '<div class="modal-body">'+
            '<form>'+
                '<div class="form-group">'+
                  '<p>Username:   <input type="text" class="form-control" id="username" style="width:50%;display: inline; margin-left: 12%;" aria-describedby="emailHelp" placeholder="Enter Username"></p>'+
                '</div>'+
                '<div class="form-group">'+
                    '<span>'+
                        '<span>Password:   <input type="password" class="form-control" id="password" style="width:50%;display: inline; margin-left: 12%;" placeholder="Enter Password"></span>'+
                    '</span>'+
                '</div>'+
              '</form>'+
              '</div>'+

              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-primary" onclick="userLogin()" style="margin-left: auto;margin-right: auto;">Login</button>'+
            '</div>'+


            '</div>'+
          '</div>'+
        '</div>';
    document.getElementById('header').innerHTML += headertemplate;
}

function footerTemplate() {
  let footertemplate = '<span><button type="button" class="btn btn-info" data-toggle="modal" data-target="#contactModal" id="contact-btn">Contact Us</button></span>' + 
  '<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">' + 
  '<div class="modal-dialog" role="document">' +
  '<div class="modal-content">' + 
  '<div class="modal-header">' + 
  '<h5 class="modal-title" id="contactModalLabel">Get in touch</h5>' + 
  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' + 
  '<span aria-hidden="true">&times;</span>' + 
  '</button> </div>' + 
  '<div class="modal-body">' + 
  '<p>Thank You for reaching out!!!<br> Please enter your email we will get back to you</p> <span>Email: <input type="email" placeholder="Enter your email id" required ></span>' + 
  '</div>' + 
  '<div class="modal-footer"> <button type="submit" class="btn btn-primary">Submit</button> </div>' + 
  '</div> </div> </div>' + 
  '<span style="font-size: 10px;">&copy; 2020 ROOM SEARCH PVT. LTD.</span>' + 
  '<span class="social">' + 
  '<a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" id="smicons"></a>'+
  '<a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" id="smicons"></a>'+
  '<a href="https://www.twitter.com" target="_blank"><img src="assests/images/twitter.png" id="smicons"></a>'+
  ' </span> ';
  document.getElementById('footer').innerHTML += footertemplate;
}

function logInOut() {
  let lgnBtn = document.getElementById('login-btn');
  if(lgnBtn.innerHTML == 'LOGIN'){
      let modal = document.getElementById('loginModal');
      modal.setAttribute('style', 'display:block');
  }  else {
      lgnBtn.innerHTML = "LOGIN";
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      if(document.getElementById('payment-btn')!=null){
        disablePayBtn();
      }
  }
}

function userLogin() {
  let lgnBtn = document.getElementById("login-btn");
  if(lgnBtn.innerHTML === "LOGIN"){
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      if(username === 'admin' && password === 'admin') {
          alert('Successfully loggedin');
          localStorage.setItem('username', 'admin');
          localStorage.setItem('password', 'admin');
          let modal = document.getElementById('loginModal');
          modal.style.display = "none";
          lgnBtn.innerHTML = "LOGOUT";
      }
      if(document.getElementById('payment-btn')!=null){
        enablePayBtn();
      }
  } 
      
}


                        
                          

                              
                              
                                
                              
                           
                               
                              
                              
                                
                              
                            
                          
                        
                    
                    
                    
                        
                        
                        
                   
                
                  