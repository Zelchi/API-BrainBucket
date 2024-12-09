import express from "express";
import { TarefaController } from "./TarefaController";

const router = express.Router();
const tarefaController = new TarefaController();

router.use((req, res, next) => {tarefaController.autenticar(req, res, next)});

router.get("/mostrar", (req, res) => tarefaController.mostrarTarefas(req, res));
router.post("/criar", (req, res) => tarefaController.criarTarefa(req, res));
router.patch("/atualizar", (req, res) => tarefaController.atualizarTarefa(req, res));
router.delete("/deletar", (req, res) => tarefaController.deletarTarefa(req, res));

export { router as TarefaRouter };