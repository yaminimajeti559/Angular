using Angular_project.API.Model.Domain;
using Microsoft.EntityFrameworkCore;

namespace Angular_project.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}
