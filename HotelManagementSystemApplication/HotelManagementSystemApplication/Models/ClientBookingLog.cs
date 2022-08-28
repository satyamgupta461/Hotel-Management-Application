using System.ComponentModel.DataAnnotations;

namespace HotelManagementSystemApplication.Models
{
    public class ClientBookingLog
    {
        [Key]
        public int hotelID { get; set; }
        public string ClientName { get; set; } 
        public DateTime FromDateTime { get; set; }
        public DateTime ToDateTime { get; set; }
    }   
}
 