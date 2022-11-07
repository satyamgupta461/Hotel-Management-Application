using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystemApplication.Models
{
    public class HotelRoomDetails
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AutoId { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Hotel Name Name must be between 3 to 50 characters")]
        public string HotelName { get; set; }
        [DefaultValue(false)]
        public bool AC { get; set; }
        [Required]
        [Range(0, 1000000, ErrorMessage = "Enter a valid Price")]
        public int priceAC { get; set; }
        [DefaultValue(false)]
        public bool NonAC { get; set; }
        [Required]
        [Range(0, 1000000, ErrorMessage = "Enter a valid Price")]
        public int priceNonAC { get; set; }

        internal void SaveChanges()
        {
            throw new NotImplementedException();
        }
    }
}
