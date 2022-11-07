using HotelManagementSystemApplication.Data;
using HotelManagementSystemApplication.Models;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystemApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuestRoleController : Controller
    {
        private MyDbContext _myDbContext;

        public GuestRoleController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }
        [HttpPost]
        public string Post([FromBody] GuestRole guestRole)
        {
            _myDbContext.GuestRole.Add(guestRole);
            _myDbContext.SaveChanges();
            return "Login Successfull as Guest";
        }
    }
}
    