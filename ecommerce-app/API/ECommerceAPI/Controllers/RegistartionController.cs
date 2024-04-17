using ECommerceAPI.Models;
using ECommerceAPI.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.Controllers
{
    public class RegistartionController : Controller
    {
        private readonly IRegistartionRepository _bookRepository;

        public RegistartionController(IRegistartionRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        [HttpGet("/helloworld")]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [HttpGet("/getAllUsers")]
        public async Task<IActionResult> GetUserDetails()
        {
            var users = await _bookRepository.GetAllUsersDetailsAsync();
            return Ok(users);
        }


    }
    }
