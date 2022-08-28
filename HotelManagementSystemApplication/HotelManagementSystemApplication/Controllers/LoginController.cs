using HotelManagementSystemApplication.Data;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystemApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private MyDbContext _myDbContext;

        public LoginController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        [HttpGet]
        public IActionResult LoginValidate(string username, string password)
        {
            var name = from val in _myDbContext.UserRole where val.UserName == username && val.Password == password select val.FullName;
            if(name != null)
            {
                return Ok("Login Successfull !!");
            }
            return NotFound();
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
