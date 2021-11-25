var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listaresp", function (req, res) {
    avisoController.listaresp(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

// router.post("/cadastrar", function (req, res) {
//     avisoController.deletar(req, res);
// })


router.delete("/deletar", function (req, res) {
    avisoController.deletar(req, res);
});



//router.delete("/avisos/delete/:idAviso", function (req, res) {
//    avisoController.deletar(req, res);
//});

router.put("/avisos/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

module.exports = router;