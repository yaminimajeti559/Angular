using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Angular_project.API.Model.DTO;
using Angular_project.API.Model.Domain;
using Angular_project.API.Data;
using Angular_project.API.Repositories.Interface;

namespace Angular_project.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository courseRepository;

        public CourseController(ICourseRepository courseRepository)
        {
            this.courseRepository= courseRepository;
        }
        [HttpPost]
        public async Task<IActionResult> Createcourse(CreateCourse req)
        {
            var course = new Course
            {
                courseName = req.courseName,
                description = req.description,
                price = req.price,
                duration = req.duration
            };
            await courseRepository.Create(course);         
            return Ok(course);
        }
    }
}
