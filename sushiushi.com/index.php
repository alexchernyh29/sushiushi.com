<?php
//require 
require 'assets/libs/connect.php';
require 'assets/php/n.php'
// -
?>
<!DOCTYPE html>
<html lang="RU-ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo $title ?></title>
	<script src="https://kit.fontawesome.com/f21d95520d.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<!-- jQuery and JS bundle w/ Popper.js -->
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
	<div class="navbar">
		<div class="logo">
			<span>Sushi<span style="color: red; font-style: bold;">Ushi</span></span>
		</div>
		<div class="nav-link">
			<a href="index.php"  >Главная</a>
			<a href="conf.php"class="active">Конфигуратор роллов</a>
			<a href="index.php">О нас</a>
			<a href="tel:+79999999999" class="phone"><i class="fas fa-phone"></i> +7(999)999-99-99</a>
		</div>
	</div>
	<div class="main">
		<div class="jumbotron jumbotron-fluid">
			<div class="container" >

				<h1 class="display-4"><span>Sushi<span style="color: red; font-style: bold;">Ushi</span></span></h1>
				<p class="lead">Роллы – это скрученные рулетики. Их состав ингредиентов более богатый и сложный. В основе находится рис, в качестве начинки используют мясное филе, рыбу, краб, угорь, овощи, омлет. В качестве панировки берут нори, икру летучей рыбы и другие продукты.</p>
			</div>
		</div>
		<div class="cards">
			<div class="card" style="width: 18rem; margin-left: 2.5em;">
				<div class="card-body">
					<h5 class="card-title text-center">Суши</h5>
				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title text-center">Роллы</h5>
				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title text-center">Запечёные роллы</h5>
				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title text-center">Сеты</h5>
				</div>
			</div>
		</div>
		<hr class="my-4">
		<div class="login text-center">
			<div class="login-form">
				<form method="POST">
					<input type="text" name="login" placeholder="Логин"><br><br>
					<input type="text" name="pass" placeholder="Пароль"><br><br>
					<button type="submit" name="do_login">Войти</button>
				</form>
			</div>
			<div class="reg-link">
				<h3>У вас нет аккаунта?</h3>
				<h4><a href="#">Создать аккаунт!</a></h4>
				<h6>или войти с помощью:</h6>
				<div class="login-link">
					<a href="https://vk.com"><i class="fab fa-vk"></i></a>
					<a href="https://discord.gg"><i class="fab fa-discord"></i></a>
					<a href="https://steamcommunity.com"><i class="fab fa-steam"></i></a>
					<a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
		</div>		
	</div>


	<div class="footer">
		
	</div>

	
</body>
</html>