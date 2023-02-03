
	function validateForm() {
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;	
		$("form").submit(function(event) {
  		event.preventDefault();
			$.ajax({
			type: "post",
			url: "/doLogin",
			data: { email: email, 
        			password: password },
			success: function (logged) {
				if (!logged) {     
			      $("#errorMessage").text("Credenziali non valide");
			      $("#errorMessage").css("font-family","Raleway, sans-serif");
			      $("#errorMessage").css("color","red");
			      $("#email, #password").css("border-color", "red");
				} else {
					window.location.href = "/views";		
			    }
			}
			});
		});
	}

