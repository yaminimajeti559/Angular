using Angular_project.API.Model.Domain;

namespace Angular_project.API.Repositories.Interface
{
    public interface ICourseRepository
    {
        Task<Course> Create(Course course);
    }
}
