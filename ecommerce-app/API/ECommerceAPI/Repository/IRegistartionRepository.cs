using ECommerceAPI.Models;

namespace ECommerceAPI.Repository
{
    public interface IRegistartionRepository
    {
        public Task<List<UserDetailsModal>> GetAllUsersDetailsAsync();
    }
}
