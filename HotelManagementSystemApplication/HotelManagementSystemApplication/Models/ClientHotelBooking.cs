using System.ComponentModel.DataAnnotations;

namespace HotelManagementSystemApplication.Models
{
    public class ClientHotelBooking
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "User Name Name must be between 3 to 50 characters")]
        public string UserName { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Email Name must be between 3 to 50 characters")]
        public string UserEmail { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Hotel Name Name must be between 3 to 50 characters")]
        public string HotelName { get; set; }
        [Required]
        [Range(0, 1000, ErrorMessage = "Enter a valid Room Number")]
        public int RoomNo { get; set; }
        [Required]
        public DateTime FromDate { get; set; }
        [Required]
        public DateTime ToDate { get; set; }
        [Required]
        [Range(0, 1000000, ErrorMessage = "Enter a valid Price")]
        public string Price { get; set; }

    }
}
