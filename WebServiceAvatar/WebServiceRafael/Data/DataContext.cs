using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebServiceRafael.Models;

namespace WebServiceRafael.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<WebServiceRafael.Models.Departamento> Departamento { get; set; }
        public DbSet<WebServiceRafael.Models.Objeto> Objeto { get; set; }
        public DbSet<WebServiceRafael.Models.RoupaAvatar> RoupaAvatar { get; set; }
        public DbSet<WebServiceRafael.Models.Tipo> Tipo { get; set; }
        public DbSet<WebServiceRafael.Models.Usuario> Usuario { get; set; }


    }
}
