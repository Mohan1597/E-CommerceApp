using System.Numerics;

namespace ECommerceAPI.Models
{
    public class UserDetailsModal
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public long PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
    }
}
