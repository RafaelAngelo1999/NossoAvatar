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

        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Departamento> Departamento { get; set; }
        public DbSet<Cabelo> Cabelo { get; set; }
        public DbSet<WebServiceRafael.Models.Acessorios> Acessorios { get; set; }
        public DbSet<WebServiceRafael.Models.Barba> Barba { get; set; }
        public DbSet<WebServiceRafael.Models.Boca> Boca { get; set; }
        public DbSet<WebServiceRafael.Models.Cor> Cor { get; set; }
        public DbSet<WebServiceRafael.Models.Estilo> Estilo { get; set; }
        public DbSet<WebServiceRafael.Models.Olhos> Olhos { get; set; }
        public DbSet<WebServiceRafael.Models.Roupa> Roupa { get; set; }
        public DbSet<WebServiceRafael.Models.Sombrancelha> Sombrancelha { get; set; }

    }
}
