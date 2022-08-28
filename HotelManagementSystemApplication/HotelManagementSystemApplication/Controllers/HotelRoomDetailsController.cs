using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using HotelManagementSystemApplication.Data;
using HotelManagementSystemApplication.Models;

namespace HotelManagementSystemApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelRoomDetailsController : Controller
    {
        private MyDbContext _myDbContext;

        public HotelRoomDetailsController(MyDbContext myDbContext)
        {
            
            _myDbContext = myDbContext;
        }
        [HttpGet]
        public IEnumerable<HotelRoomDetails> Get()
        {
            return _myDbContext.HotelRoomDetails.ToList();
        }


        [HttpGet("{id}")]
        public HotelRoomDetails Get(int id)
        {
            HotelRoomDetails hotelRoomDetails = _myDbContext.HotelRoomDetails.Where(p => p.AutoId == id).FirstOrDefault();
            return hotelRoomDetails;
        }


        // POST api/<ValuesController>
        [HttpPost]
        public string Post([FromBody] HotelRoomDetails hotelRoomDetails)
        {
            _myDbContext.HotelRoomDetails.Add(hotelRoomDetails);
            _myDbContext.SaveChanges();
            return "Hotel Room Details Added Successfully";
        }


        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] HotelRoomDetails hotelRoomDetails)
        {
            HotelRoomDetails hotelRoomDetail = _myDbContext.HotelRoomDetails.Where(p => p.AutoId == id).FirstOrDefault();
            hotelRoomDetail.HotelName = hotelRoomDetails.HotelName;
            hotelRoomDetail.priceAC = hotelRoomDetails.priceAC;
            hotelRoomDetail.priceNonAC = hotelRoomDetails.priceNonAC;
            hotelRoomDetail.AC = hotelRoomDetails.AC;
            hotelRoomDetail.NonAC = hotelRoomDetails.NonAC;
            hotelRoomDetail.SaveChanges();
            return "Updated Successfully!!";

        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            HotelRoomDetails employee = _myDbContext.HotelRoomDetails.Where(p => p.AutoId == id).FirstOrDefault();
            _myDbContext.HotelRoomDetails.Remove(employee);
            _myDbContext.SaveChanges();
            return "Deleted Successfully!!!";

        }
        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
