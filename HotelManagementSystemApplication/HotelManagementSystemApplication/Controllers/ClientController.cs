using HotelManagementSystemApplication.Data;
using HotelManagementSystemApplication.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace HotelManagementSystemApplication.Controllers
{
    public class ClientController : Controller
    {
        private MyDbContext _myDbContext;

        public ClientController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        [HttpDelete("delete/{id}")]
        public void Delete([FromRoute] int id)
        {
            var obj = _myDbContext.ClientHotelBooking.Find(id);
            _myDbContext.ClientHotelBooking.Remove(obj);
            _myDbContext.SaveChanges();
        }

        [HttpGet("client-details/{token}")]

        public IEnumerable<ClientHotelBooking> GetAll([FromRoute] string token)
        {
            if (token == "xFd88NZrcbajdssl")
                return _myDbContext.ClientHotelBooking.ToList();
            return null;
        }
        [HttpGet("{id}/client-details")]

        public async Task<List<ClientHotelBooking>> Get([FromRoute] int id)
        {
            List<ClientHotelBooking> clientHotelBookings = new List<ClientHotelBooking>();
            var client = _myDbContext.ClientHotelBooking;
            foreach(var obj in client)
            {
                var val = obj.UserID;
                if (obj.UserID == id)
                    clientHotelBookings.Add(obj);
                
            }
            return clientHotelBookings;
        }
        [HttpPost("client-details")]
        public async Task<ActionResult> Post([FromBody] ClientHotelBooking request)
        {
            try
            {
                await _myDbContext.ClientHotelBooking.AddAsync(request);
                _myDbContext.SaveChanges();
                return Ok("Booked Successfully!");
            }
            catch(SqlException ex)
            {
                return BadRequest("Booking Unsuccessful!");
            }
        }

    }
}
