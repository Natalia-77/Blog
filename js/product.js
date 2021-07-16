$(function () {

    var $modalAddProduct = $("#modalAddProduct");
    var $txtName = $("#txtName");
    var $txtOwner = $("#txtOwner");
    var $txtPrice = $("#txtPrice");
    var $newProductRow = $("#newProductRow");
    var $imgPhoto = $("#imgPhoto");
    var uploader;
    var cropper=null;
    //отримую модальне вікно кропера по айді.
    var $cropperModal = $("#cropperModal");
    //приховане поле,куди записано значення нового доданого фото.
    var $inputImgHidden = $("#inputImgHidden");
    //змінна для бейс64 обрізаного зображення.
    var imgurl;
    //зображення в вікні кроппера.
    var $imgcropp = $("#imgcropp");

    //модальне вікно додавання продукту.
    $("#newProduct").on("click", function () {

        $modalAddProduct.modal("show");
    });

    $imgPhoto.on("click", function () {
        if (uploader)
            uploader.remove();
        uploader = $(`<input type="file" class="d-none" accept=".jpg, .jpeg, .png" />`);

        uploader.click();

        uploader.on("change", function (e) {
            SaveImage(uploader[0]);
        });

    });

    var draganddrop = document.getElementById('draganddrop');

    draganddrop.addEventListener('dragenter', DragIn, false);
    draganddrop.addEventListener('dragover', DragIn, false);

    draganddrop.addEventListener('dragleave', DragOut, false);
    draganddrop.addEventListener('drop', DragOut, false);


    draganddrop.addEventListener('dragenter', PreventDefaults, false);
    draganddrop.addEventListener('dragover', PreventDefaults, false);

    draganddrop.addEventListener('dragleave', PreventDefaults, false);
    draganddrop.addEventListener('drop', PreventDefaults, false);

    draganddrop.addEventListener('drop', SaveImage, false);

    function DragIn(e) {
        draganddrop.classList.add('dragIn');
    }

    function DragOut(e) {
        draganddrop.classList.remove('dragIn');
    }

    function PreventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }


    function SaveImage(e) {
        
        var files;
        if (e.files) {
            files = e.files;
        } else if (e.dataTransfer) {
            files = e.dataTransfer.files;
        }

        if (files && files[0]) {
            var file = files[0];

            if (file.type.match(/^image\//)) {

                const reader = new FileReader();
                reader.onload = function () {
                   
                    //змінюю атрибут "src"
                    //$imgPhoto.attr("src", reader.result);

                    //записала в приховане поле значення фото.
                    $inputImgHidden.value = reader.result;

                    //записала в атрибут src зображення на вікні кроппера бейс 64 отриманого зображення.
                     $imgcropp.attr("src", reader.result);   
                    
                   
                    //виклик модального кроппера.  
                    $cropperModal.show();  
                  
                    //виклик метода ІнітКроппер з затримкою.Без затримки не працювало чомусь.
                    setTimeout(initCropper, 1000);           
                     
                }
                //читаю вміст ,переданий у file.
                reader.readAsDataURL(file);
                
            }
        }

    }

    $("#btnCropImg").on("click", function () {

        //отриала значення бейс64 для обрізаного зображення.
        imgurl = cropper.getCroppedCanvas().toDataURL();
        //внесла в атрибут src на формі додавання.
        $imgPhoto.attr("src", imgurl);
        $cropperModal.hide();
        
       
        
    });



    //В модальному вікні для кроппера обробник клiка на кнопку Скасувати.
    $("#cropperModal").on("click", "[data-closeModal]", function () {
        $cropperModal.hide();
    });

   

    function initCropper() {
        if (cropper == null) {
            const imageсropp = document.getElementById('imgcropp');
            cropper = new Cropper(imageсropp, {
                aspectRatio: 1 / 1,
                viewMode: 1,
                autoCropArea: 0.5
            });
          
        }
       
    }

        //кнопка зберігання доданого продукту.
        $("#productbuttonsave").on("click", function () {
            //оголошую змінну,яка буде містити строчку з необхідною кількістю зірочок.
            var temp;
            //записаний бейс 64 доданого фото новоствореного товару.
            //var photo = $inputImgHidden.value;
            var photo = imgurl;

            //отримую значення обраного елементу по айді.
            var res = $("#rateoption").select2().find(":selected").data("id");

            //і відповідно до отриманих значень записую в змінну потрібну кількість зірочок.
            if (res == "1") {
                temp = '<i class="fa fa-star" aria-hidden="true"></i>';

            }
            if (res == "2") {
                temp = '<i class="fa fa-star" aria-hidden="true"></i><b>&nbsp;</b><i class="fa fa-star" aria-hidden="true"></i>';

            }
            if (res == "3") {
                var temp = '<i class="fa fa-star" aria-hidden="true"></i><b>&nbsp;</b><i class="fa fa-star" aria-hidden="true"></i><b>&nbsp;</b><i class="fa fa-star" aria-hidden="true"></i>';

            }
            

            $newProductRow.append(`
            <div class="col-md-4 mb-3">
                <div class="card h-100 backcolor">
                    <div class="labels d-flex justify-content-between position-absolute w-100">
                        <div class="label-new">
                            <span class="text-white bg-success small d-flex align-items-center px-2 py-1">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <span class="ml-1">New</span>
                            </span>

                        </div>
                        <div class="label-sale">
                            <span class="text-white bg-primary small d-flex align-items-center px-2 py-1">
                                <i class="fa fa-tag" aria-hidden="true"></i>
                                <span class="ml-1">Sale</span>
                            </span>
                        </div>
                    </div>
                    <div class="aspect-ratio-box">
                        <a href="#">
                            <img src="${photo}" class="card-img-top" alt="Product" />
                        </a>
                    </div>
                    <div class="card-body px-2 pb-2 pt-1 d-flex flex-column">
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="h4 text-primary">₴${$txtPrice.val()}</p>
                            </div>
                        </div>
                        <p class="text-warning d-flex align-items-center mb-3">                
                       ${temp};                                    
                        </p>
                        <p class="mb-0">
                            <h5 class="text-justify">${$txtName.val()}</h5>
                        </p>
                        <div class="d-flex mb-0 justify-content-between">
                            <div>
                                <p class="mb-0 small"><b>Ціна: </b> ₴${$txtPrice.val()}</p>
                                <p class="mb-0 small"><b>Виробник: </b> ${$txtOwner.val()}</p>
                                <p class="mb-0 small"><b>Артикул: </b> 45-351</p>
                            </div>
                            <div class="text-right">
                                <p class="mb-0 small"><b>Безкоштовна доставка</b></p>
                                <p class="mb-0 small text-primary">
                                    <span class="font-weight-bold">Знижка</span> ₴200.00 (16%)
                                </p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-auto">
                            <div class="col px-0">
                                <button class="btn btn-outline-primary btn-block">
                                    В кошик
                                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="ml-2">
                                <a href="#" class="btn btn-outline-success" data-toggle="tooltip" data-placement="left"
                                    title="Додати в список бажань">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
            $txtPrice.val("");
            $txtName.val("");
            $txtOwner.val("");
            $imgPhoto.attr("src", "/images/333.png");         
            $modalAddProduct.modal("hide");
        });

    });



    //Select2.	
    $(document).ready(function () {

        function setCurrency(currency) {
            if (!currency.id) {
                return currency.text;
            }
            //Відповідно до обраного пункту розміру рейтингу,відображаються -одна,-дві чи три зірочки.
            //рейтинг обирається з дропдауна на формі модального вікна.
            if (currency.text == "Низький") {
                var $currency = $('<span><i class="fas fa-' + currency.element.value + '" aria-hidden="true"></i></span>');
            }
            if (currency.text == "Середній") {
                var $currency = $('<span><i class="fas fa-' + currency.element.value + '" aria-hidden="true"></i></span><b>&nbsp;</b><span><i class="fas fa-' + currency.element.value + '" aria-hidden="true"></i></span>');
            }
            if (currency.text == "Високий") {
                var $currency = $('<span><i class="fas fa-' + currency.element.value
                    + '" aria-hidden="true"></i></span><b>&nbsp;</b><span><i class="fas fa-' + currency.element.value
                    + '" aria-hidden="true"></i></span><b>&nbsp;</b><span><i class="fas fa-' + currency.element.value
                    + '" aria-hidden="true"></i></span>');
            }
            //console.log(currency.text);
            return $currency;
        };

        //class rate знаходиться в products.html 409 рядок.
        $(".rate").select2({
            //placeholder
            placeholder: "Рейтинг товару",
            //можна обрати тільки одну позицію.
            maximumSelectionLength: 1,
            //спосіб відображення обраних елементів.
            templateSelection: setCurrency
        });
    })
