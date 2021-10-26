<?php
	//crear en la carpeta db el archivo conectar.php
require_once('config.php');

class Connection{
	private $host;
	private $db;
	private $user;
	private $password;
	private $charset;
	
	public function __construct(){
		$this->host 	= SERVIDOR;
		$this->db	= NAMEDB;
		$this->user = USER;
		$this->password = PASSWORD;
		$this->charset = CHARSET;
	}
	
	public function connect(){
		try
		{
			$connection = "mysql:host=".$this->host.";dbname=".$this->db.";charset=".$this->charset;
			$options =[
				PDO::ATTR_ERRMODE		=> PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_EMULATE_PREPARES	=> true,
				PDO::ATTR_PERSISTENT		=> true
			];	
			$pdo = new PDO($connection,$this->user,$this->password, $options);
			return $pdo;
		}
		catch(PDOException $error)
		{
			?>
			<script>
				alert('Hay problemas con la conexión');	
			</script>
			<?php
		}
		
	}
	
}
?>