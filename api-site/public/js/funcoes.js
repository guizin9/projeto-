// sessão
function barsChart() {
    var data = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40],
            label : 'Tigers'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100],
            label : 'Bears'
        }
        ]
    };

    var ctx = document.getElementById("barsChart").getContext("2d");
    new Chart(ctx).Bar(data);

    legend(document.getElementById("barsLegend"), data);
}
function pieChart() {
    var data = [
        {
            value: 30,
            color:"#F38630",
            label: 'Bears'
        },
        {
            value : 50,
            color : "#E0E4CC",
            label: 'Lynxes'
        },
        {
            value : 100,
            color : "#69D2E7",
            label: 'Reindeer'
        }
    ];

    var ctx = document.getElementById("pieChart").getContext("2d");
    var pieChart = new Chart(ctx).Pie(data);

    legend(document.getElementById("pieLegend"), data, pieChart);
};

function trocaFrase() {
    var r_text = [];
    r_text[0] = "Disciplina é a ponte entre metas e realizações.";
    r_text[1] = "A disciplina é a mãe do sucesso.";
    r_text[2] = "Organizar é arte, planejar faz parte!";
    r_text[3] = "A paz reina num ambiente organizado.";
    r_text[4] = "N&atilde;o h&aacute; que ser forte. H&aacute; que ser flex&iacute;vel.";
    r_text[5] = "Há tr&ecirc;s coisas que jamais voltam; a flecha lan&ccedil;ada, a palavra dita e a oportunidade perdida.";
    r_text[6] = "A juventude n&atilde;o é uma &eacute;poca da vida, &eacute; um estado de esp&iacute;rito.";

    var div = document.getElementById('id_frase');
    var val = document.getElementById('id_contator').value;
    val = Number(val);
    var txt = r_text[val]; 
    div.innerHTML = "<div class='container'><p>" + txt + "</p></div>"; 
    val++;
    if (val==r_text.length) { 
        val = 0 
    };
    document.getElementById('id_contator').value = val; 
    setTimeout('trocaFrase()',4000);
};

function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

