using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebServiceRafael.Models
{
    public class Objeto
    {
        public int Id { get; set; }
        public Tipo Tipo { get; set; }
        public string Nome { get; set; }
        public string Traducao { get; set; }
    }
}
