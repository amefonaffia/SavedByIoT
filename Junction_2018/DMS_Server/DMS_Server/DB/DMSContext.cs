using System.Data.Entity;
using DMS_Server.Models;

namespace DMS_Server.DB
{
    public class DMSContext : DbContext
    {
        public DMSContext() : base("DMSCon")
        {

        }

        public DbSet<Message> Messages { get; set; }
    }
}