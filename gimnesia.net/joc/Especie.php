<?php
class Especie{
 
    // database connection and table name
    private $conn;
    private $table_name = 'especie';
 
    // object properties
    public $codi;
    public $nom;
    public $cientific;
    public $nivell;
    public $insistencia;
    public $resistencia;
    public $color;
    public $h1;
    public $h2;
    public $h3;
    public $imatge;
    public $poema;
    public $info;
    public $info_cast;
    public $info_angl;
/*
 	codi 
    nom
    cientific 	varchar(150) 	latin1_sw	
    nivell 		
    insistencia 		
    resistencia 		
    color 	varchar(25) 	latin1_sw	
    h1 	
    h2 	
    h3 	
    imatge 	
    poema 	
    info
    info_cast
    info_angl*/ 


// constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
}


// read products
public function read(){
 
    // select all query
    //UNA CERCA AMB LEFT JOINS
    //$query = "SELECT c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created FROM " . $this->table_name . " p LEFT JOIN categories c ON p.category_id = c.id ORDER BY p.created DESC";
    //$query = "SELECT p.id, p.name, p.description, p.price, p.category_id, p.created FROM " . $this->table_name . " p" ;
    // prepare query statement
    $query="SELECT * FROM " . $this->table_name;
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// create product
public function create(){
    // query to insert record
    $query = "INSERT INTO " . $this->table_name . " SET name=:name, price=:price, description=:description, category_id=:category_id, created=:created";
    
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->price=htmlspecialchars(strip_tags($this->price));
    $this->description=htmlspecialchars(strip_tags($this->description));
    $this->category_id=htmlspecialchars(strip_tags($this->category_id));
    $this->created=htmlspecialchars(strip_tags($this->created));
 
    // bind values
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":price", $this->price);
    $stmt->bindParam(":description", $this->description);
    $stmt->bindParam(":category_id", $this->category_id);
    $stmt->bindParam(":created", $this->created);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}

public function update(){
    //query to update record
    //$sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";
    //$query = "INSERT INTO " . $this->table_name . " SET name=:name, price=:price, description=:description, category_id=:category_id, created=:created";
    $query = "UPDATE " . $this->table_name . " SET nom=:nom, cientific=:cientific, nivell=:nivell, 
    insistencia=:insistencia, resistencia=:resistencia, color=:color, h1:=h1, h2=:h2, h3=:h3, imatge=:imatge, poema=:poema, info=:info, info_cast=:info_cast, info_angl=:info_angl
    WHERE codi:=codi";
    

    // prepare query
    $stmt = $this->conn->prepare($query);
 /* $this->codi = $row['codi'];
    $this->nom = $row['nom'];
    $this->cientific = $row['cientific'];
    $this->nivell = $row['nivell'];
    $this->insistencia = $row['insistencia'];
    $this->resistencia = $row['resistencia'];
    $this->color = $row['color'];
    $this->h1 = $row['h1'];
    $this->h2 = $row['h2'];
    $this->h3 = $row['h3'];
    $this->imatge = $row['imatge'];
    $this->poema = $row['poema'];
    $this->info = $row['info'];
    $this->info_cast = $row['info_cast'];
    $this->info_angl = $row['info_angl'];
 */
    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->price=htmlspecialchars(strip_tags($this->price));
    $this->description=htmlspecialchars(strip_tags($this->description));
    $this->category_id=htmlspecialchars(strip_tags($this->category_id));
    $this->created=htmlspecialchars(strip_tags($this->created));
 
    // bind values
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":price", $this->price);
    $stmt->bindParam(":description", $this->description);
    $stmt->bindParam(":category_id", $this->category_id);
    $stmt->bindParam(":created", $this->created);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}

function readOne(){
    
    
    // query to read single record
    $query = "SELECT * FROM " . $this->table_name . " WHERE codi = ?";
    
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    $stmt->bindParam(1, $this->codi);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->codi = $row['codi'];
    $this->nom = $row['nom'];
    $this->cientific = $row['cientific'];
    $this->nivell = $row['nivell'];
    $this->insistencia = $row['insistencia'];
    $this->resistencia = $row['resistencia'];
    $this->color = $row['color'];
    $this->h1 = $row['h1'];
    $this->h2 = $row['h2'];
    $this->h3 = $row['h3'];
    $this->imatge = $row['imatge'];
    $this->poema = $row['poema'];
    $this->info = $row['info'];
    $this->info_cast = $row['info_cast'];
    $this->info_angl = $row['info_angl'];}
    }

?>