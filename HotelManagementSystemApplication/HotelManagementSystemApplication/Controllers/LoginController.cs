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
        public ActionResult<int> LoginValidate(string username, string password)
        {
            foreach(var val in _myDbContext.UserRole)
            {
                if(val.UserName == username)
                {
                    if(val.Password == password)
                    {
                        return val.Id;
                    }
                    else
                    {
                        return BadRequest("Password Incorrect!");
                    }
                }
            }
            return NotFound();   
        }

    }
}
