



$(document).ready(function () {

    $('.phone').inputmask('(099)999-99-99');   

});



window.onload = function ()
{

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            //console.log(document.getElementById("yesdog").checked);
            //console.log(document.getElementById("nonedog").checked);
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();

            }
            event.preventDefault();
            form.classList.add('was-validated');
        }, false);
    });


    var template = '<span class="float-left"><i class="fas fa-trash fa-1x text-danger cursor-pointer delete-service" aria-hidden="true"></i></span><b>&nbsp;&nbsp;&nbsp;</b><span><i class="far fa-edit fa-1x text-info cursor-pointer edit-service"aria-hidden="true"></i></span>';
    var photoTemplate1 = '<img class="img-fluid " width="90" height="800" src="/images/face1.jpg">';
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
            photo:photoTemplate1, surname: 'Петров', name: 'Олег', tel: '(068)123-45-89', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate2 ,surname: 'Шевченко', name: 'Тарас', tel: '(098)123-77-89', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate3 ,surname: 'Равка', name: 'Марина', tel: '(063)883-67-99', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate4,surname: 'Лавренчук', name: 'Петро', tel: '(083)893-17-33', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate5,surname: 'Щепков', name: 'Віктор', tel: '(083)893-17-33', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate6,surname: 'Кащенко', name: 'Катерина', tel: '(083)893-52-45', dog: 'так',
            res: template
        },
        {
            photo: photoTemplate7,surname: 'Бобров', name: 'Сергій', tel: '(097)222-11-33', dog: 'ні',
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

    //дані про наявність собаки у користувача отримуємо з чекбоксів.
    var txtDogs = document.getElementById("yesdog");
    var txtDogsNone = document.getElementById("nonedog");

    //кнопка на сторінці Додати,після якої відкривається модальне вікно.
    var buttonadd = document.getElementById("newuser");

    //кнопка на модальному вікні для зберепження даних про користувача після того як ввели всі дані.
    var butsave = document.getElementById("buttonsave");

    

    

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
        tr = document.createElement('tr');        

        var usersurname = txtSurName.value;
        var username = txtName.value;
        var userphone = txtTelephone.value;
        var userdog = txtDogs.value;
        var userdognone = txtDogsNone.value;       

        td = document.createElement('td');
        td.innerHTML = photoTemplate9;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML =usersurname;
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
        }
        else
        {
            td.innerHTML = userdognone;
        }
        tr.appendChild(td);      
      
        td = document.createElement('td');
        td.innerHTML =template;     
        tr.appendChild(td);
        table.appendChild(tr);          

        txtSurName.value = txtName.value = txtTelephone.value = "";
        $("#mymodalwindow").modal("hide");     


        $('i.delete-service').on('click', function () {
            //e.preventDefault();
            var item = $(this).closest("tr");
            console.log(item);
           
            $("#modaldelete").modal("show");
            $("#modalText").html("Ви зараз намагаєтесь видалити: "+item[0].children[1].firstChild.data +"  "+ item[0].children[2].firstChild.data);

            $('#deletebutton').click(function () {
                $(item).remove();
                $("#modaldelete").modal("hide");
            });

        });
        
       
    }  
      
    $('i.edit-service').on('click', function () {

        $("#editmodalwindow").modal("show");
    })

   
}





     

