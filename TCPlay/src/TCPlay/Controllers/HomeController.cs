using Microsoft.AspNet.Mvc;

namespace TCPlay.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View("HomePage");
        }

        public IActionResult Notes()
        {
            return View("Notes")
;        }
    }
}
