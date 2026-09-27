using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReefGroup.Controllers
{
    public class ProjectsController : Controller
    {
        // GET: ProjectsController
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Gallery()
        {
            return View();
        }
        public ActionResult Detail()
        {
            return View();
        }
    }
}
