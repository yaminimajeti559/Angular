using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Angular_project.API.Model.DTO;
using Angular_project.API.Model.Domain;
using Angular_project.API.Data;
using Angular_project.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace Angular_project.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository courseRepository;
        private readonly ApplicationDbContext dbContext;

        public CourseController(ICourseRepository courseRepository,ApplicationDbContext dbContext)
        {
            this.courseRepository= courseRepository;
            this.dbContext=dbContext;
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

        [HttpGet]
        public  IActionResult GetCourses()
        {
            var allCourses=dbContext.Courses.ToList();
            return Ok(allCourses);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetCourseById(int id)
        {
            var course=dbContext.Courses.Find(id);
            if (course == null)
            {
                return NotFound();
            }
            return Ok(course);
        }

        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateCourse(int id,UpdateCourse updatecourse)
        {
            var course = dbContext.Courses.Find(id);
            if(course == null)
            {
                return NotFound();
            }
            course.courseName = updatecourse.courseName;
            course.description = updatecourse.description;
            course.price = updatecourse.price;
            course.duration = updatecourse.duration;
            dbContext.SaveChanges();
            return Ok(course);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public  IActionResult DeleteCourse(int id)
        {
            var course = dbContext.Courses.Find(id);
            if (course == null)
            {
                return NotFound();
            }
            dbContext.Courses.Remove(course);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
