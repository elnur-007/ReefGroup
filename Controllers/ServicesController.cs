using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReefGroup.Controllers
{
    public class ServicesController : Controller
    {
        // GET: ServicesController
        public ActionResult Index()
        {
            return View();
        }

    }
}
