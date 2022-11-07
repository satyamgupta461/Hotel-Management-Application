using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystemApplication.Models
{
    public class GuestRole
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Full Name must be between 3 to 50 characters")]
        public string FullName { get; set; }
        [Required]
        [Range(999999999, 10000000000, ErrorMessage = "Enter a valid Phone Number")]
        public string MobileNumber { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 8, ErrorMessage = "Email must be between 10 to 30 characters")]
        public string Email { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Id Proof must be between 3 to 50 characters")]
        public string IdProof  { get; set; }
        [Required]
        public string Gender { get; set; }


    }
}
