/*using HotelManagementSystemApplication.Data;
using HotelManagementSystemApplication.Models;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystemApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminRoleController : Controller
    {
        private MyDbContext _myDbContext;

        public AdminRoleController (MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        [HttpGet]
        public IEnumerable<UserRole> Get()
        {
            return _myDbContext.UserRole.ToList();
        }

        [HttpGet("{id}")]

        public IActionResult Edit(int id)
        {
            var user = _myDbContext.UserRole.Where(e => e.Id == id).FirstOrDefault();
            return View(user);
        }

        [HttpPost]
        public IActionResult Edit(UserRole userRole)
        {
            _myDbContext.UserRole.Update(userRole);
            _myDbContext.SaveChanges();
            return View("List", _myDbContext.UserRole);
        }

        [HttpGet("{id}")]

        public IActionResult Delete(int id)
        {
            var employee = _myDbContext.UserRole.Where(e => e.Id == id).FirstOrDefault();
            return View(employee);
        }

        [HttpPost]

        public ActionResult Delete(UserRole userRole)
        {
            //var employeeToDelete = myDbContext.Employee.Where(e => e.Id == employee.Id);
            _myDbContext.UserRole.Remove(userRole);
            _myDbContext.SaveChanges();
            return View("List", _myDbContext.UserRole);
        }


        //public IActionResult Index()
        //{
        //    return View();
        //}


        [HttpGet]
        public IActionResult CreateHotel()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(HotelRoomDetails hotel)
        {
            _myDbContext.HotelRoomDetails.Add(hotel);
            _myDbContext.SaveChanges();
            return RedirectToAction("List", _myDbContext.HotelRoomDetails);
        }


        //public IActionResult ListHotel()
        //{
        //    return View(_myDbContext.HotelRoomDetails.ToList());
        //}

        [HttpGet]

        public IActionResult EditHotel(int id)
        {
            var hotel = _myDbContext.HotelRoomDetails.Where(e => e.AutoId == id).FirstOrDefault();
            return View(hotel);
        }

        [HttpPost]
        public IActionResult EditHotel(HotelRoomDetails hotelRoom)
        {
            _myDbContext.HotelRoomDetails.Update(hotelRoom);
            _myDbContext.SaveChanges();
            return View("List", _myDbContext.HotelRoomDetails);

            return RedirectToAction("List");
        }


        [HttpGet]
        public IActionResult DeleteHotel(int id)
        {
            var hotel = _myDbContext.HotelRoomDetails.Where(e => e.AutoId == id).FirstOrDefault();
            return View(hotel);
        }

        [HttpPost]

        public ActionResult Delete(HotelRoomDetails hotelRoom)
        {
            //var employeeToDelete = myDbContext.Employee.Where(e => e.Id == employee.Id);
            _myDbContext.HotelRoomDetails.Remove(hotelRoom);
            _myDbContext.SaveChanges();
            return View("List", _myDbContext.HotelRoomDetails);
        }

    }
}
*/