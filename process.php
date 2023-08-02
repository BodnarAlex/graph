<?
if(isset($_POST["quantity"]) || isset($_POST["count"])) {
$quantity="";
$count="";
if(isset($_POST['quantity'])){$quantity=$_POST['quantity']}
if(isset($_POST['count'])){$count=$_POST['count']}

echo $quantity."<br>";
echo $count;
return true;
}
return true;
?>