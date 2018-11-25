using System;
using System.ComponentModel.DataAnnotations;

namespace DMS_Server.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }

        public string PID { get; set; }

        public string Latitude { get; set; }

        public string Longitude { get; set; }

        public string Status { get; set; }

        public DateTime Date { get; set; }
    }
}