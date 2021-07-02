



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
    






    var template = '<span class="float-left"><i class="fas fa-trash fa-1x text-danger cursor-pointer delete-service" aria-hidden="true"></i></span><b>&nbsp;&nbsp;&nbsp;</b><span><i class="far fa-edit fa-1x text-info cursor-pointer"aria-hidden="true"></i></span>';
    let cityes = [
        {
            surname: 'Петров', name: 'Олег', tel: '(068)123-45-89', dog: 'так',
            res: template
        },
        {
            surname: 'Шевченко', name: 'Тарас', tel: '(098)123-77-89', dog: 'так',
            res: template
        },
        {
            surname: 'Равка', name: 'Марина', tel: '(063)883-67-99', dog: 'так',
            res: template
        },
        {
            surname: 'Лавренчук', name: 'Петро', tel: '(083)893-17-33', dog: 'так',
            res: template
        },
        {
            surname: 'Щепков', name: 'Віктор', tel: '(083)893-17-33', dog: 'так',
            res: template
        },
        {
            surname: 'Кащенко', name: 'Катерина', tel: '(083)893-52-45', dog: 'так',
            res: template
        },
        {
            surname: 'Бобров', name: 'Сергій', tel: '(097)222-11-33', dog: 'ні',
            res: template
        },
        {
            surname: 'Кулеба', name: 'Михайло', tel: '(067)566-23-43', dog: 'ні',
            res: template
        },
        {
            surname: 'Данченко', name: 'Дмитро', tel: '(067)633-13-63', dog: 'так',
            res: template
        },
        {
            surname: 'Савченко', name: 'Надія', tel: '(068)753-16-12', dog: 'так',
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

    for (let item of cityes) {
        tr = document.createElement('tr');
        table.appendChild(tr);
        let td;


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

        console.log("txtLastName", usersurname);
        console.log("txtName", username);
        console.log("txtPhone", userphone);

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
        else {
            td.innerHTML = userdognone;
        }
        tr.appendChild(td);      
      
        td = document.createElement('td');
        td.innerHTML =template;
        tr.appendChild(td);
       

        txtSurName.value = txtName.value = txtTelephone.value = "";
        $("#mymodalwindow").modal("hide");
       
        table.appendChild(tr);     
       
    }  
      

    $('i.delete-service').on('click', function (e) {
        e.preventDefault();
        var item = $(this).closest('tr');      
        $("#modaldelete").modal("show");

        $('#deletebutton').click(function () {            
            $(item).remove();
            $("#modaldelete").modal("hide");
        });
        
    });

   
}


     

