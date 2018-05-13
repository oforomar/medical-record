 <?php	
 $dsn='mysql:host=localhost;dbname=doctor';
 $username='root';
 $password= '';
    
  try{
   $con = new PDO($dsn, $username, $password);
  $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
   
}
catch(PDOException $e){
echo "Connected bad";
  }
?>
