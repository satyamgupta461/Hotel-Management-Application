using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystemApplication.Models
{
    public class HotelRoomDetails
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AutoId { get; set; }
        public string HotelName { get; set; }
        public bool AC { get; set; }
        public int priceAC { get; set; }
        public bool NonAC { get; set; }
        public int priceNonAC { get; set; }

        internal void SaveChanges()
        {
            throw new NotImplementedException();
        }
    }
}
