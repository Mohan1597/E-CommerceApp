using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.Controllers
{
    public class RegistartionController : Controller
    {
        [HttpGet("/login")]
        public string Login()
        {
            return "Hello Worlds";
        }
    }
}
