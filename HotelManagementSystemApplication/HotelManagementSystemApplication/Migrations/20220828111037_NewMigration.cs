using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HotelManagementSystemApplication.Migrations
{
    public partial class NewMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClientBookingLog",
                columns: table => new
                {
                    hotelID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClientName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FromDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ToDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientBookingLog", x => x.hotelID);
                });

            migrationBuilder.CreateTable(
                name: "HotelRoomDetails",
                columns: table => new
                {
                    AutoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AC = table.Column<bool>(type: "bit", nullable: false),
                    priceAC = table.Column<int>(type: "int", nullable: false),
                    NonAC = table.Column<bool>(type: "bit", nullable: false),
                    priceNonAC = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HotelRoomDetails", x => x.AutoId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClientBookingLog");

            migrationBuilder.DropTable(
                name: "HotelRoomDetails");
        }
    }
}
