import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("inicio"));
router.get("/about", (req, res) => res.render("about"));
router.get("/contactanos", (req, res) => res.render("contactanos"));
router.get("/favoritos", (req, res) => res.render("favoritos"));
router.get("/maps", (req, res) => res.render("maps"));
router.get("/filtros", (req, res) => res.render("filtros"));
router.get("/categorias", (req, res) => res.render("categorias"));
router.get("/usuarios", (req, res) => res.render("usuarios"));

export default router;


