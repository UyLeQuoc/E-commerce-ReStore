using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.GraphQL
{
    public class ProductQuery
    {
        private readonly StoreContext _context;
        public ProductQuery(StoreContext context)
        {
            _context = context;
        }
        //get all products
        public async Task<List<Product>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

    }
}

