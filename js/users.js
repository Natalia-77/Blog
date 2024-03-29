﻿

$(document).ready(function () {

    $('.phone').inputmask('(099)999-99-99');   

});


window.onload = function ()
{
    let trEdit;
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //var forms = document.getElementsByClassName('needs-validation');
    //// Loop over them and prevent submission
    //var validation = Array.prototype.filter.call(forms, function (form) {
    //    form.addEventListener('submit', function (event) {
    //        //console.log(document.getElementById("yesdog").checked);
    //        //console.log(document.getElementById("nonedog").checked);
    //        if (form.checkValidity() === false) {
    //            event.preventDefault();
    //            event.stopPropagation();

    //        }
    //        event.preventDefault();
    //        form.classList.add('was-validated');
    //    }, false);
    //});   




    var template = '<span class="float-left"><i class="fas fa-trash fa-1x text-danger cursor-pointer delete-service" aria-hidden="true"></i></span><b>&nbsp;&nbsp;&nbsp;</b><span><i class="far fa-edit fa-1x text-info cursor-pointer edit-service" aria-hidden="true"></i></span>';
    var photoTemplate2 = '<img class="img-fluid " width="90" height="800" src="/images/face2.jpg">';
    var photoTemplate3 = '<img class="img-fluid " width="90" height="800" src="/images/face3.jpg">';
    var photoTemplate4 = '<img class="img-fluid " width="120" height="800" src="/images/face4.jpg">';
    var photoTemplate5 = '<img class="img-fluid " width="120" height="800" src="/images/face5.jpg">';
    var photoTemplate6 = '<img class="img-fluid " width="120" height="800" src="/images/face6.jpg">';
    var photoTemplate7 = '<img class="img-fluid " width="120" height="800" src="/images/face8.jpg">';
    var photoTemplate8 = '<img class="img-fluid " width="120" height="800" src="/images/face7.jpg">';
    var photoTemplate9 = '<img class="img-fluid " width="120" height="800" src="/images/444.jpg">';



    let users = [
        {
            photo:photoTemplate2, surname: 'Петров', name: 'Олег', tel: '(068)123-45-89', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate3 ,surname: 'Шевченко', name: 'Тарас', tel: '(098)123-77-89', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate4 ,surname: 'Равка', name: 'Марина', tel: '(063)883-67-99', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate5,surname: 'Лавренчук', name: 'Петро', tel: '(083)893-17-33', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate6,surname: 'Щепков', name: 'Віктор', tel: '(083)893-17-33', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate7,surname: 'Кащенко', name: 'Катерина', tel: '(083)893-52-45', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate9,surname: 'Бобров', name: 'Сергій', tel: '(097)222-11-33', dog: 'ні',
            res: template
        },             
        {
            photo: photoTemplate8,surname: 'Савченко', name: 'Надія', tel: '(068)753-16-12', dog: 'так',
            res: template
        }


    ];

    //отримуємо дані з модального вікна,які були введені в інпути.
    var txtSurName = document.getElementById("txtsurname");
    var txtName = document.getElementById("txtname");
    var txtTelephone = document.getElementById("txttel");
    var imgPhoto = document.getElementById("imgPhoto");
    var imgPhotoedit = document.getElementById("imgPhotoedit");
    var fileImage = document.getElementById("fileImage");
    var fileImageedit = document.getElementById("fileImageedit");
    var selectImageBase64 = document.getElementById("selectImageBase64");
    var selectImageBase64edit = document.getElementById("selectImageBase64edit");

    //дані про наявність собаки у користувача отримуємо з чекбоксів.
    var txtDogs = document.getElementById("yesdog");
    var txtDogsNone = document.getElementById("nonedog");

    //кнопка на сторінці Додати,після якої відкривається модальне вікно.
    var buttonadd = document.getElementById("newuser");

    //кнопка на модальному вікні для зберепження даних про користувача після того як ввели всі дані.
    var butsave = document.getElementById("buttonsave");

    fileImage.onchange = function (e) {
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files && files[0]) {
            const file = files[0];
            console.log(file.type);

            if (file.type.match(/^image\//)) {
                const file_name = file.name;
                const reader = new FileReader();
                reader.onload = function () {
                    imgPhoto.src = reader.result;   
                   // fileImage.src = reader.result;
                    selectImageBase64.value = reader.result;
                    showSuccess(fileImage);
                }

                reader.readAsDataURL(file);
            }
            else {
                alert("Уточніть тип");
            }
        }
        else {
            alert("Виберіть інше");
        }

    };

    fileImageedit.onchange = function (e) {
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files && files[0]) {
            const file = files[0];
            console.log(file.type);

            if (file.type.match(/^image\//)) {
                const file_name = file.name;
                const reader = new FileReader();
                reader.onload = function () {
                    imgPhotoedit.src = reader.result;                   
                    selectImageBase64edit.value = reader.result;
                    showSuccess(fileImageedit);
                }

                reader.readAsDataURL(file);
            }
            else {
                alert("Уточніть тип");
            }
        }
        else {
            alert("Виберіть інше");
        }

    };    

    //отримуємо таблицю по айді.
    let table = document.querySelector('#table');
    let tr;

    for (let item of users) {
        tr = document.createElement('tr');
        table.appendChild(tr);
        let td;

        td = document.createElement('td');
        td.innerHTML = item.photo;       
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = item.surname;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = item.name;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = item.tel;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = item.dog;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = item.res;        
        tr.appendChild(td);       

    }

    
    
    buttonadd.onclick = function (e) {
       
        $("#mymodalwindow").modal("show");
    };

    //обробник кліка для кнопки на модальному вікні Зберегти.
    butsave.onclick = function (e) {
       
        if (isValidate()) {
            tr = document.createElement('tr');

            var usersurname = txtSurName.value;
            var username = txtName.value;
            var userphone = txtTelephone.value;
            var userdog = txtDogs.value;
            var userdognone = txtDogsNone.value;
            var photo = selectImageBase64.value;

            td = document.createElement('td');
            td.innerHTML = `<img src = "${photo}" class="img-fluid"  width="120" height="800">`;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = usersurname;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = username;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = userphone;
            tr.appendChild(td);

            // Dogs       
            td = document.createElement('td');
            if (document.getElementById("yesdog").checked) {
                td.innerHTML = userdog;
                console.log(userdog);
            }
            else {
                td.innerHTML = userdognone;
            }
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = template;
            tr.appendChild(td);
            table.appendChild(tr);

            txtSurName.value = txtName.value = txtTelephone.value = txtDogs.value = txtDogsNone.value = "";
            imgPhoto.src = '/images/empty.jpg';

            //видалила всі дані,отримані при валідації,щоб при наступному виклику модальновікна додавання не було підсвітки з помилками.
            txtSurName.classList.value=txtName.classList.value=txtTelephone.classList.value=txtDogs.classList.value=txtDogsNone.classList.value= '';
            $("#mymodalwindow").modal("hide");
        }       
       
       
    }  

    //обробник кліка на кнопку РЕДАГУВВТИ.
    $('body').on('click', "i.edit-service", function () {

        $("#editmodalwindow").modal("show");
        trEdit = $(this).closest("tr");       

        var txteditphoto = trEdit[0].cells[0].firstChild.currentSrc;
        var txteditsurname = trEdit[0].cells[1].innerHTML;
        var txteditname = trEdit[0].cells[2].innerHTML;
        var txtedittel = trEdit[0].cells[3].innerHTML;       
        var txtdog = trEdit[0].cells[4].innerHTML;       

        //Отримую по айді відповідні інпути та фото,де мають відображатись відповідні дані(до редагування).
        const inputType = document.querySelector('input[id="txteditsurname"]');
        const inputTypeName = document.querySelector('input[id="txteditname"]');
        const inputTypePhone = document.querySelector('input[id="txtedittel"]');
        const imgTypePhoto = document.querySelector('img[id="imgPhotoedit"]');   


        //У отримані інпути та фото вставляю отримані дані,про конкретного користувача(до редагування).
        inputType.value = txteditsurname;
        inputTypeName.value = txteditname;
        inputTypePhone.value = txtedittel;
        imgTypePhoto.src = txteditphoto;

        //перевіряю,яке значення в мене записано в чекбоксах.
        //якщо "ні",то я роблю чекнутим відповідний чекбокс з value "ні"
        if (txtdog == "ні") {
            $('#editnonedog').prop('checked', true);
        }
        else {
            $('#edityesdog').prop('checked', true);
        }
       

    });

    //натиснула кнопку ОК і у відповідно до відкоригованих(нових)даних заповнюю основну таблицю.
    $('#editbutton').click(function () {
        
        var photo = document.getElementById("imgPhotoedit").src;
       // console.log(photo);
     
        var newsurname = document.getElementById("txteditsurname").value;
        var newname = document.getElementById("txteditname").value;
        var newtel = document.getElementById("txtedittel").value; 
        var newdogsyes = document.getElementById("edityesdog").value;
        var newdogsnone = document.getElementById("editnonedog").value;
        var newphoto = `<img src = "${photo}" class="img-fluid"  width="120" height="800">`;   

       
        trEdit[0].cells[0].innerHTML = newphoto;
        trEdit[0].cells[1].innerHTML = newsurname;
        trEdit[0].cells[2].innerHTML = newname;
        trEdit[0].cells[3].innerHTML = newtel;

        if (document.getElementById("edityesdog").checked) {
            trEdit[0].cells[4].innerHTML = newdogsyes;
        }
        else {
            trEdit[0].cells[4].innerHTML = newdogsnone;
        }        
       
        $("#editmodalwindow").modal("hide");
    });

    //видалення користувача.
    $('body').on('click', "i.delete-service", function (e) {
        e.preventDefault();
        var item = $(this).closest("tr");
        console.log(item);

        $("#modaldelete").modal("show");
        $("#modalText").html("Ви зараз намагаєтесь видалити: " + item[0].children[1].firstChild.data + "  " + item[0].children[2].firstChild.data);

        $('#deletebutton').click(function () {
            $(item).remove();
            $("#modaldelete").modal("hide");
        });
    });
      

    function showError(input) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
    function showSuccess(input) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }


    function isValidate() {
        var isVal = true;          
        var regexName = /^[a-zA-Z\-]+$/;   
              
        //валідаця поля "Прізвище"
        if (!regexName.test(txtSurName.value)|| txtSurName.value=="")
        {           
            showError(txtSurName);
            isVal=false;
        }
        else
        {
            showSuccess(txtSurName);
        }

        //валідаця поля "Імя"
        if (!regexName.test(txtName.value)||txtName.value=="")
        {
            showError(txtName);
            isVal = false;
        }
        else
        {
            showSuccess(txtName);
        }        

        if (selectImageBase64.value == "") {
            showError(fileImage);
            isVal = false;
        }
        else {
            showSuccess(fileImage);
        }      

        return isVal;
    }
       
    
}




     

