using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using ECommerceAPI.Repository;
using ECommerceAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Access the configuration
var configuration = builder.Configuration;

// Get the connection string from appsettings.json
string connectionString = configuration.GetConnectionString("ECommerceDB");

// Register DbContext
builder.Services.AddDbContext<EcommerceStoreContext>(
    options => options.UseSqlServer("Server=.;Database=ECommerceDB;Integrated Security=True;TrustServerCertificate=True"));

// Register other dependencies
builder.Services.AddTransient<IRegistartionRepository, RegistartionRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
