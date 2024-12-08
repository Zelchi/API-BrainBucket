import express from "express";
import { TarefaController } from "./TarefaController";

const router = express.Router();
const tarefaController = new TarefaController();

router.get("/mostrar", (req, res) => tarefaController.mostrarTarefas(req, res));
router.post("/criar", (req, res) => tarefaController.criarTarefa(req, res));
router.put("/atualizar/:id", (req, res) => tarefaController.atualizarTarefa(req, res));
router.delete("/deletar/:id", (req, res) => tarefaController.deletarTarefa(req, res));

export { router as TarefaRouter };