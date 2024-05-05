using Microsoft.AspNetCore.Mvc;

namespace EcommerceAPI.Controllers
{
    public class HelloWorld : ControllerBase
    {

        [HttpGet]
        [Route("/v1/HelloWorld")]
        public string HelloWorldP()
        {
            return "Hello World";
        }
    }
}
