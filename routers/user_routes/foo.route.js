const{ Router }=require("express");
const router=new Router();

const fooService=require("../../service/foo.service");

router.get("/",fooService.getEmployees);
router.get("/:id",fooService.getEmp);

module.exports=router;