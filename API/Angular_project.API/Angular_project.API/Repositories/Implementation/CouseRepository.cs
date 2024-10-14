using Angular_project.API.Data;
using Angular_project.API.Model.Domain;
using Angular_project.API.Repositories.Interface;

namespace Angular_project.API.Repositories.Implementation
{
    public class CouseRepository : ICourseRepository
    {
        private readonly ApplicationDbContext dbContext;

        public CouseRepository(ApplicationDbContext dbContext)
        {
            this.dbContext=dbContext;
        }
        public async Task<Course> Create(Course course)
        {
            await dbContext.Courses.AddAsync(course);
            await dbContext.SaveChangesAsync();
            return course;
        }
    }
}
