 <?php		
	include 'connect.php';
	
		if($_SERVER['REQUEST_METHOD']=='POST'){
		$username = $_POST['username'];
		$password = isset($_POST['password']) ? $_POST['password'] : '';
		$hashedpass= sha1($password);
	        
		$stmt=$con->prepare("SELECT * FROM doc WHERE username =? AND password=?");
		$stmt->execute(array($username, $hashedpass));
		$count=$stmt->rowCount();
		echo $count;
               
		}
		?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Medical Record">
        <title>Medical record</title>
        <link rel="stylesheet"href="style.css">
        <script></script>
        <style>
            .Copyrights
            {
                text-align: right;
                background:#333;
                color: #FFF;
            }
            .header
            {
                background:#333;
                color:#FFF;
                font-size:20px;
                text-align:center
            }
            .Question
            {
                background:#DDD;
                color:#676767;
                font-size:30px;
                text-align:center
            }
            .navigation
            {
                font-size:35px;
                color:#595959;
                padding:5px; }
                    body{
                background-color: rgba(0, 123, 255, 0.5);} 

               
             
                
           
            .info
            {
                font-size: 35px;
                color: BLUE;
                text-align:center
            }
                
            input
            {
          display: block;
      
         }
               marquee{
                font-size:larger;
                font-weight:bold;
                color:#ffccff
            }
               label{ 
                text-shadow:1px 1px #ef0909;
                
            }
            placeholder{
		color:green;
	    }
            
        </style>
    </head>
    <body>
        <div class="header">
         <marquee>Welcome Doctor</marquee>
            <img src="bin/1.png"width=400px:height=400px>
        </div>
        <div class="Question">
            Do you already have an account ???
        </div>
                    <fieldset>
        <legend class="info">Doctor's information</legend>
	
	
       <form class="navigation"  method="post" action=" <?php echo $_SERVER['PHP_SELF'] ?> " >
	 
                <label>Doctor's Name</label>
                <input type="text" name="username"  placeholder="doctor name" autocomplete="off" value="" />
                <label>Password</label>
                <input type="Password" name="Password" placeholder="Password" autocomplete="off" value="Password" />
                <input type="submit" name="Sign in" value="sign in" style="margin:5px;"></a>
                <label>Or Sign up now</label> </form>
                <a href="DoctorSignup.html" ><input type="button" value="Signup"></a>
                       
            </fieldset>
        </div>
        <div class="Copyrights">
            Copyrights &copy; reserved for Medical Record Team
        </div>
    </body>
</html>