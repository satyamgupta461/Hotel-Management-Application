using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystemApplication.Controllers
{
    public class ClientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
