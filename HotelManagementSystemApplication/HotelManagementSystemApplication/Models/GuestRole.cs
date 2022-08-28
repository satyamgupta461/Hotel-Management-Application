using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystemApplication.Models
{
    public class GuestRole
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string MobileNumber { get; set; }
        public string Email { get; set; }
        public string IdProof  { get; set; }
        public string Gender { get; set; }


    }
}
