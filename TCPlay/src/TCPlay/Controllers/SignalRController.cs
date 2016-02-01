using Microsoft.AspNet.Mvc;

namespace TCPlay.Controllers
{
    public class SignalRController : Controller
    {
        public IActionResult SignalR()
        {
            return View("SignalR");
        }

    }
}
