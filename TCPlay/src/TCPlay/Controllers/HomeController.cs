using Microsoft.AspNet.Mvc;

namespace TCPlay.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View("HomePage");
        }
    }
}
