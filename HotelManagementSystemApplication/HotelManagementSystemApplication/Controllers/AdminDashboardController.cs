using HotelManagementSystemApplication.Data;
using HotelManagementSystemApplication.Models;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystemApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminDashboardController : Controller
    {
        private MyDbContext _myDbContext;

        public AdminDashboardController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        [HttpGet]
        public string Get(string username, string password)
        {
            int temp = 0;
            foreach (var val in _myDbContext.AdminRole)
            {
                if (val.Login == username)
                {
                    if (val.Password == password)
                    {
                        temp = 1;
                    }
                }
            }
            if (temp == 1)
            {
                return "xFd88NZrcbajdssl";
            }
            return "wrong-user-password";
        }
    }
}
