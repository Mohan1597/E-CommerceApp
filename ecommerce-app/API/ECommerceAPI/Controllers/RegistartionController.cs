using ECommerceAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.Controllers
{
    public class RegistartionController : Controller
    {
        [HttpGet("/helloworld")]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [HttpPost("/adduser")]

        public IActionResult YourAction(LoginModal model)
        {
            return Ok(model);
        }

    }
}
