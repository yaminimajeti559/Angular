using Angular_project.API.Data;
using Angular_project.API.Model.Domain;
using Angular_project.API.Model.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular_project.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public StudentController(ApplicationDbContext dbContext)
        {
            this.dbContext=dbContext;
        }

        [HttpPost]
        public IActionResult Createstudent(CreateStudent createStudent) 
        {
            var student = new Student
            {
                name = createStudent.name,
                email = createStudent.email,
                age = createStudent.age,
                joiningDate = DateTime.Now
            };
            dbContext.Students.Add(student);
            dbContext.SaveChanges();
            return Ok(student);
        }
        [HttpGet]
        public IActionResult GetStudents()
        {
            var allStudents = dbContext.Students.ToList();
            return Ok(allStudents);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetSudentById(int id)
        {
            var student = dbContext.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateStudent(int id, UpdateStudent updatestudent)
        {
            var student = dbContext.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }
            student.email = updatestudent.email;
            student.age = updatestudent.age;
            student.name = updatestudent.name;
            dbContext.SaveChanges();
            return Ok(student);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteCourse(int id)
        {
            var student = dbContext.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }
            dbContext.Students.Remove(student);
            dbContext.SaveChanges();

            return Ok();
        }

    }
}
