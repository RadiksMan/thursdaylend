<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />

	<meta id="viewport" name="viewport" content="width=1280, user-scalable=no">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/reset.css" media="all" />

	<link rel="stylesheet" href="css/bootstrap.css" media="all" />
	<link rel="stylesheet" href="css/bootstrap-theme.css" media="all" />

	<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />

	<link rel="stylesheet" href="css/tuesdayAnimate.css" media='all' />

	<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>

	<!-- bootstrap -->

	<script src="js/bootstrap.js" type="text/javascript"></script>

	<!-- /bootstrap -->

	<script src="js/selectivizr-min.js" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="css/jquery.znice.css" media="all" />
	<script src="js/jquery.validate.min.js" type="text/javascript"></script>
	<!--<script src="js/jquery.znice.validate.js" type="text/javascript"></script>
	<script src="js/jquery.znice.js" type="text/javascript"></script>-->

	<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox.css" media="all" />
	<script src="fancybox/jquery.fancybox.js" type="text/javascript"></script>

	<script src="js/modernizr.js" type="text/javascript"></script>
	<script src="js/jquery.watermark.min.js" type="text/javascript"></script>

<!-- mask for inputs -->

	<script src="js/maskInput.js" type="text/javascript"></script>

<!-- /mask for inputs -->

<!-- sliders -->
	<link rel="stylesheet" type="text/css" href="css/slick.css" media="all" />
	<script src="js/slick.js" type="text/javascript"></script>
<!-- sliders -->

<!-- jScrollPane -->
	<link type="text/css" href="css/jquery.jscrollpane.css" rel="stylesheet" media="all" />
	<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="js/jquery.jscrollpane.min.js"></script>
<!-- jScrollPane -->

<!-- jandexMaps -->
	<style>
		.map1{width: 100%;height: 350px;}
		.mapes{height: 350px;margin-bottom: 15px;}
		.list{width: 200px;float: left;}
		.list-item.hover{background-color: red;}
		.checkboxes{float: right;margin-right: 10px;}
		.checkboxes label{display: inline-block;margin-right: 10px;}
		.clear{clear: both;}
	</style>

	<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
	<script src="js/jandexMapsScr.js" type="text/javascript"></script>
<!-- jandexMaps -->

<!-- remove Files -->
	<!--<script src="js/myalert.js" type="text/javascript"></script>
	<script src="develop/autocssrenew.js" type="text/javascript"></script>-->

    <script src="js/develop_2.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="css/develop_2.css" media="all" />

    <script src="js/develop_3.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="css/develop_3.css" media="all" />

    <script src="js/develop_4.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="css/develop_4.css" media="all" />
<!-- remove Files -->

	<link rel="stylesheet" href="css/style_main.css" media="all" />
	<script src="js/scr.js" type="text/javascript"></script>

	<!--[if lt IE 9]>
		<script>
		document.createElement('header');
		document.createElement('nav');
		document.createElement('section');
		document.createElement('article');
		document.createElement('aside');
		document.createElement('footer');
		document.createElement('time');
		</script>
		<script src="js/pie.js" type="text/javascript"></script>
	<![endif]-->

	<!--[if lt IE 8]><script src="js/oldie/warning.js"></script><script>window.onload=function(){e("js/oldie/")}</script><![endif]-->
</head>
<body>
	<?partial('zHiddenBlock');?>
	<header class="header <?php  echo $act;?>">
		<div class="header-wrap">
			<div class="mbox">
				<div class="header-top cfix-after">
					<div class="header-logo">
						<img src="images/logo.png" alt="">
					</div>
					<div class="header-nav">
							<ul class="cfix-after">
								<li><a href="#"><span>О нас</span></a></li>
								<li><a href="#"><span>Новости</span></a></li>
								<li><a href="#"><span>Вакансии</span></a></li>
								<li><a href="#"><span>Контакты</span></a></li>
							</ul>
					</div>
					<div class="header-tel">
						<a href="tel:+74953696082"><span>+7&nbsp;(495)&nbsp;369&nbsp;60&nbsp;82</span></a>
					</div>
				</div>
				<div class="header-sub-top cfix-after">
					<div class="header-sub-top-zvonok">
						<a href="#call-popup" class="fancybox_popup">
							<span class="icon icon-head-tel"></span>
							<span>заказать звонок</span>
						</a>
					</div>
				</div>
				<?php if($act == "autsor"){?>
					<div class="header-middle">
						<div class="header-tab-top-title"><h3>Аутсорсинг</h3></div>
						<div class="header-tab-wrap">
							<div class="header-tab-top">
								<div class="header-tab-top-item">
									<div class="header-tab-top-desc">
										<p>Аутсорсинг – это делегирование полномочий, форма организации труда, при которой непрофильные функции компании передаются сторонним исполнителям. Чаще всего это ведение кадровых и юридических вопросов, бухгалтерский учёт, реже – производство вторичной и вспомогательной продукции, продажа товаров.</p>
									</div>
								</div>
								<div class="header-tab-top-item">
									<div class="header-tab-top-desc">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facere possimus, inventore ipsam at autem! Necessitatibus aliquam qui itaque quasi, laborum fugit? Eos minima quasi, aperiam incidunt dolores aliquid nihil maiores autem vitae ab facere obcaecati. Culpa porro in minima praesentium accusamus eligendi nisi incidunt dolore libero, beatae aliquam odio.</p>
									</div>
								</div>
								<div class="header-tab-top-item">
									<div class="header-tab-top-desc">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nisi quo est minus veritatis expedita delectus, commodi sequi ratione corporis porro nostrum corrupti at sit voluptatibus quidem libero? Molestiae commodi est, nostrum dolorum rerum inventore quidem. Officiis, enim molestiae facilis.</p>
									</div>
								</div>
							</div>
							<div class="header-tab-bottom">
								<div class="header-tab-bottom-item" data-utab="0">
									<span>  Аутсорсинг в ритейле</span>
								</div>
								<div class="header-tab-bottom-item" data-utab="1" >
									<span>Аутсорсинг в производстве</span>
								</div>
								<div class="header-tab-bottom-item" data-utab="2" >
									<span>Аутсорсинг в логистике</span>
								</div>
							</div>
						</div>
					</div>
					<div class="header-pagination">
						<div class="header-pagination-wrap cfix">
							<div class="header-pagination-left">
								<span class="icon icon-pagination-left"></span>
								<span>МЕРЧЕНДАЙЗИНГ</span>
							</div>
							<div class="header-pagination-right">
								<span>Аутстаффинг</span>
								<span class="icon icon-pagination-right"></span>
							</div>
						</div>
					</div>
				<?php } ?>
			</div>
		</div>

	</header>