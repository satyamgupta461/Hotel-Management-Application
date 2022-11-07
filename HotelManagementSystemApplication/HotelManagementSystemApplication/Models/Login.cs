using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace HotelManagementSystemApplication.Models
{
    public class Login
    {
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "User Name Name must be between 3 to 50 characters")]
        public string UserName { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Password must be between 3 to 20 characters and strong")]
        public string Password { get; set; }
    }
}
