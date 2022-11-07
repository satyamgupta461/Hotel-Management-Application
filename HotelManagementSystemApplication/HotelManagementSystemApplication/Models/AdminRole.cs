using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystemApplication.Models
{
    public class AdminRole
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Login must be between 3 to 20 characters")]
        public string Login { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Password must be between 3 to 20 characters and strong")]
        public string Password { get; set; }
    }
}
