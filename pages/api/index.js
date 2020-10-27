

export default (req, res) => {

    var title = req.query.title;
    var subTitle = req.query.subTitle;
    var companyName = req.query.companyName;
    var description = req.query.description;
    var characteristics = req.query.characteristics;
    var imageUri = req.query.imageUri;
    var price = req.query.price;
    var language = req.query.language;
    var recommentedBy = req.query.recommentedBy;

    var query = req;

    var monetarySymbol = "$";
    var recommentedText = "Recommented by:"
    var descriptionText = "Description";
    var characteristicsText = "Characteristics"
    var inStockText = "In stock"

    if(language == "pt-br"){
      monetarySymbol = "R$";
      recommentedText = "Recomendado por: ";
      descriptionText = "Descrição";
      characteristicsText = "Características";
      inStockText = "Em estoque"
    }

    if(imageUri == null || imageUri == ""){
      imageUri = "http://via.placeholder.com/300";
    }

    if(title == null){
      title = "";
    }

    if(subTitle == null){
      subTitle = "";
    }

    if(price == null || price == ""){
      price = language == "pt-br" ? "0,00" : "0.00";
    }

    if(companyName == null){
      companyName = "";
    }

    var descriptionContent = "";

    if(description != null && description != ""){
      descriptionContent = 
      "<h2>"+descriptionText+"</h2>"+
      "<p>"+description+"</p>";
    }

    var characteristicsContent = "";

    if(characteristics != null && characteristics != ""){
      characteristicsContent = 
      "<h2>"+characteristicsText+"</h2>"+
      "<p>"+characteristics+"</p>";
    }

    var recommentedByContent = "";

    if(recommentedBy != null && recommentedBy != ""){
      recommentedByContent = 
      "<p>"+recommentedText+"</p>"+
      "<h3>"+recommentedBy+"</h3>";
    }


  
    var style = "@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Montserrat:300,400,700,800|Open+Sans:300'); body { background-image: -webkit-gradient(linear, left top, right bottom, from(#b91eda), color-stop(#a02ae0), color-stop(#8234e5), color-stop(#5d3be8), to(#1241eb)); background-image: linear-gradient(to right bottom, #b91eda, #a02ae0, #8234e5, #5d3be8, #1241eb); height: 100%; margin: 0; background-repeat: no-repeat; background-attachment: fixed; } main{max-width:720px;margin:5% auto}.card{box-shadow:0 6px 6px rgba(0,0,0,.3);-webkit-transition:.2s;transition:.2s;background:#fff}.card .card__title{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:30px 40px}.card .card__title h3{-webkit-box-flex:0;flex:0 1 200px;text-align:right;margin:0;color:#252525;font-family:sans-serif;font-weight:600;font-size:20px;text-transform:uppercase}.card .card__title .icon{-webkit-box-flex:1;flex:1 0 10px;background:#115dd8;color:#fff;padding:10px 10px;-webkit-transition:.2s;transition:.2s}.card .card__title .icon>a{color:#fff}.card .card__title .icon:hover{background:#252525}.card .card__body{padding:0 40px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row no-wrap;margin-bottom:25px}.card .card__body>.half{box-sizing:border-box;padding:0 15px;-webkit-box-flex:1;flex:1 0 50%}.card .card__body .featured_text h1{margin:0;padding:0;font-weight:800;font-family:Montserrat,sans-serif;font-size:45px;line-height:50px;color:#181e28}.card .card__body .featured_text p{margin:0;padding:0}.card .card__body .featured_text p.sub{font-family:Montserrat,sans-serif;font-size:26px;text-transform:uppercase;color:#686e77;font-weight:300;margin-bottom:5px}.card .card__body .featured_text p.price{font-family:'Fjalla One',sans-serif;color:#252525;font-size:26px}.card .card__body .image{padding-top:15px;width:100%}.card .card__body .image img{display:block;max-width:100%;height:auto}.card .card__body .description{margin-bottom:25px}.card .card__body .description p{margin:0;font-family:'Open Sans',sans-serif;font-weight:300;line-height:27px;font-size:16px;color:#555}.card .card__body span.stock{font-family:Montserrat,sans-serif;font-weight:600;color:#a1cc16}.card .card__body .reviews .stars{display:inline-block;list-style:none;padding:0}.card .card__body .reviews .stars>li{display:inline-block}.card .card__body .reviews .stars>li .fa{color:#f7c01b}.card .card__body .reviews>span{font-family:'Open Sans',sans-serif;font-size:14px;margin-left:5px;color:#555}.card .card__footer{padding:30px 40px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row no-wrap;-webkit-box-align:center;align-items:center;position:relative}.card .card__footer::before{content:'';position:absolute;display:block;top:0;left:40px;width:calc(100% - 40px);height:3px;background:#115dd8;background:-webkit-gradient(linear,left top,right top,from(#115dd8),color-stop(20%,#115dd8),color-stop(20%,#ddd),to(#ddd));background:linear-gradient(to right,#115dd8 0,#115dd8 20%,#ddd 20%,#ddd 100%)}.card .card__footer .recommend{-webkit-box-flex:1;flex:1 0 10px}.card .card__footer .recommend p{margin:0;font-family:Montserrat,sans-serif;text-transform:uppercase;font-weight:600;font-size:14px;color:#555}.card .card__footer .recommend h3{margin:0;font-size:20px;font-family:Montserrat,sans-serif;font-weight:600;text-transform:uppercase;color:#115dd8}.card .card__footer .action button{cursor:pointer;border:1px solid #115dd8;padding:15px;border-radius:100%;color:#fff;background:#115dd8;font-family:'Open Sans',sans-serif;font-size:16px;-webkit-transition:.2s;transition:.2s}.card .card__footer .action button:hover{background:#fff;color:#115dd8}";
  
    var textHtml = "<html>"+
    "<head>"+
    "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'>"+
    "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'>"+
    "<style>"+style+"</style>"+
    "<meta http-equiv='Content-Language' content='pt-br'>"+
    "<meta charset='utf-8'>"+
    "<meta name='description' content='"+description+"'><title>"+title+"</title>"+
    "</head>"+ 
    "<body>"+
    "<main>"+
      "<div class='card'>"+
        "<div class='card__title'>"+
          "<div class='icon'>"+
            "<a href='#'><i class='fa fa-arrow-left'></i></a>"+
          "</div>"+
          "<h3>"+companyName+"</h3>"+
        "</div>"+
        "<div class='card__body'>"+
          "<div class='half'>"+
            
            "<div class='featured_text'>"+
              "<h1>"+title+"</h1>"+
              "<p class='sub'>"+subTitle+"</p>"+
              "<p class='price'>"+monetarySymbol+" "+price+"</p>"+
            "</div>"+
            "<div class='image'>"+
              "<img src='"+imageUri+"' alt=''>"+
            "</div>"+
          "</div>"+
          "<div class='half'>"+
            "<div class='description'>"+
              descriptionContent +
              characteristicsContent+
            "</div>"+
            "<span class='stock'><i class='fa fa-pen'></i>"+inStockText+"</span>"+
            // "<div class='reviews'>"+
            // "<i class='fa fa-twitter'></i>"+

            //   "<ul class='stars'>"+
            //     "<li><i class='fa fa-twitter'></i></li>"+
            //     "<li><i class='fa fa-star'></i></li>"+
            //     "<li><i class='fa fa-star'></i></li>"+
            //     "<li><i class='fa fa-star'></i></li>"+
            //     "<li><i class='fa fa-star-o'></i></li>"+
            //   "</ul>"+
            //   "<span>(64 reviews)</span>"+
            // "</div>"+
          "</div>"+
        "</div>"+
        "<div class='card__footer'>"+
          "<div class='recommend'>"+
            recommentedByContent +
          "</div>"+
          "<div class='action' style='margin: 0 10 0 0'>"+
            "<button type='button' onclick='whatsShare()'><i class='fa fa-whatsapp' style='padding: 0 2'></i></button>"+
          "</div>"+
          "<div class='action' style='margin: 0 10 0 0'>"+
            "<button type='button' onclick='twitterShare()'><i class='fa fa-twitter'></i></button>"+
          "</div>"+
          "<div class='action'>"+
            "<button type='button' onclick='facebookShare()'><i class='fa fa-facebook' style='padding: 0 4'></i></button>"+
          "</div>"+
        "</div>"+
      "</div>"+
    "</main>"+
    "<script>"+
    "function whatsShare() {"+
    "  window.open('https://wa.me/?text='+window.location.href);"+
    "}"+
    "function facebookShare() {"+
    "  window.open('https://www.facebook.com/sharer.php?u='+window.location.href);"+
    "}"+
    "function twitterShare() {"+
    "  window.open('https://twitter.com/intent/tweet?status='+window.location.href);"+
    "}"+
    "</script>"+
  "</body>"+ 
  "</html>";
  
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html')
    res.send(textHtml)
  }