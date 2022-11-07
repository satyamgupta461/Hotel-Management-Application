using System;
using HotelManagementSystemApplication.Models;
using Microsoft.EntityFrameworkCore;
namespace HotelManagementSystemApplication.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> dbContextOptions) : base(dbContextOptions)
        {

        }
        public DbSet<HotelRoomDetails> HotelRoomDetails { get; set; }
        public DbSet<ClientBooking> ClientBooking { get; set; }
        public DbSet<UserRole> UserRole { get; set; }
        public DbSet<GuestRole> GuestRole { get; set; }
        public DbSet<AdminRole> AdminRole { get; set; }
        public DbSet<ClientHotelBooking> ClientHotelBooking { get; set; }

    }
}
