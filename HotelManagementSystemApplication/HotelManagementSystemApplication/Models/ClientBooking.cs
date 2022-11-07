using System.ComponentModel.DataAnnotations;

namespace HotelManagementSystemApplication.Models
{
    public class ClientBooking
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Client Name must be between 3 to 50 characters")]
        public string ClientName { get; set; }
        [Required]
        public DateTime FromDate { get; set; }
        [Required]
        public DateTime ToDate { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Hotel Name Name must be between 3 to 50 characters")]
        public string hotelName { get; set; }

    }
}
 