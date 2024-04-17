using ECommerceAPI.Data;
using ECommerceAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ECommerceAPI.Repository
{
    public class RegistartionRepository : IRegistartionRepository
    {

        private readonly EcommerceStoreContext _context;

        public RegistartionRepository(EcommerceStoreContext context)
        {
            _context = context;
        }

        public async Task<List<UserDetailsModal>> GetAllUsersDetailsAsync()
        {
            var records = await _context.UserDetails
                .Select(x => new UserDetailsModal()
                {
                    Id = x.Id,
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    Email = x.Email,
                    PhoneNumber = x.PhoneNumber,
                    Password = x.Password,
                })
                .ToListAsync();

            return records;
        }
    }
}
