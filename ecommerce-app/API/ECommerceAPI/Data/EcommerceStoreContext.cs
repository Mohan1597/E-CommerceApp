using Microsoft.EntityFrameworkCore;

namespace ECommerceAPI.Data
{
    public class EcommerceStoreContext : DbContext
    {

        public EcommerceStoreContext(DbContextOptions<EcommerceStoreContext> options) 
            : base(options) {
            
        }

        public DbSet<Registration> UserDetails { get; set; }

    }
}
