function signupvalidation(){
    var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var confirm_password = document.getElementById("confirm_password").value;

            
            if (username == "" || username == null){
                alert("Username cant be empty")
                document.getElementById("username").focus();
                return false;
            }
            if (username.length < 2){
                alert("Enter a Name with more than 2 characters")
                document.getElementById("username").focus();
                
                
                  return false;
            }
            for (let i = 0; i < username.length; i++) {
                if (username[i] >= '0' && username[i] <= '9') {
                  alert("Name cannot containe Digits");
                  document.getElementById("username").focus();
                  return false;
                  
                }
              }
            if (email == "" || email == null){
                alert("Email cant be empty")
                document.getElementById("email").focus();
                return false;
            }
            if (password.length < 8){
                alert("Enter a Password with more than 8 characters")
                document.getElementById("password").focus();
                return false;
            }

            if (password != confirm_password) {
                alert("Password and Confirm Password do not match");
                document.getElementById("password").focus();
                return false;
            }
            
                    
        }
        function loginvalidation(){
           
                    var email = document.getElementById("emaillogin").value;
                    var password = document.getElementById("passwordlogin").value;
                    if (email == "" || email == null){
                        alert("Email cant be empty")
                        document.getElementById("emaillogin").focus();
                        return false;
                    }
                    if (password.length < 8){
                        alert("Enter a Password with more than 8 characters")
                        document.getElementById("passwordlogin").focus();
                        return false;
                    }

                   
                }