using HotelManagementSystemApplication.Data;
using HotelManagementSystemApplication.Models;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystemApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : Controller
    {
        private MyDbContext _myDbContext;

        public SignUpController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }
        [HttpPost]
        public string Post([FromBody] UserRole userRole)
        {
            _myDbContext.UserRole.Add(userRole);
            _myDbContext.SaveChanges();
            return "SignUp Successfully";
        }
    }
}
